
/**
 * Sanitize user input to prevent NoSQL injection and XSS
 */
export function sanitizeInput<T>(input: T): T {
    if (typeof input === 'string') {
        // Remove potential XSS vectors
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .trim() as T
    }

    // Return as is (mongo-sanitize removed)
    return input
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    }
    return text.replace(/[&<>"']/g, (char) => map[char])
}

/**
 * Validate file upload security
 */
export function validateFileUpload(file: File): { valid: boolean; error?: string } {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

    if (file.size > maxSize) {
        return { valid: false, error: 'File size must be less than 5MB' }
    }

    if (!allowedTypes.includes(file.type)) {
        return { valid: false, error: 'Only JPEG, PNG, WebP, and GIF images are allowed' }
    }

    // Check file extension matches MIME type
    const extension = file.name.split('.').pop()?.toLowerCase()
    const mimeExtensionMap: Record<string, string[]> = {
        'image/jpeg': ['jpg', 'jpeg'],
        'image/png': ['png'],
        'image/webp': ['webp'],
        'image/gif': ['gif'],
    }

    const allowedExtensions = mimeExtensionMap[file.type] || []
    if (extension && !allowedExtensions.includes(extension)) {
        return { valid: false, error: 'File extension does not match file type' }
    }

    return { valid: true }
}

/**
 * Generate secure filename
 */
export function generateSecureFilename(originalName: string): string {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 15)
    const extension = originalName.split('.').pop()?.toLowerCase() || 'jpg'
    const safeName = originalName
        .split('.')[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .substring(0, 20)

    return `${safeName}-${timestamp}-${random}.${extension}`
}

/**
 * Rate limiting helper (simple in-memory implementation)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
    identifier: string,
    maxRequests: number = 10,
    windowMs: number = 60000
): { allowed: boolean; remaining: number } {
    const now = Date.now()
    const record = rateLimitMap.get(identifier)

    if (!record || now > record.resetTime) {
        rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs })
        return { allowed: true, remaining: maxRequests - 1 }
    }

    if (record.count >= maxRequests) {
        return { allowed: false, remaining: 0 }
    }

    record.count++
    return { allowed: true, remaining: maxRequests - record.count }
}

/**
 * Clean up expired rate limit records
 */
setInterval(() => {
    const now = Date.now()
    for (const [key, value] of rateLimitMap.entries()) {
        if (now > value.resetTime) {
            rateLimitMap.delete(key)
        }
    }
}, 60000) // Clean up every minute
