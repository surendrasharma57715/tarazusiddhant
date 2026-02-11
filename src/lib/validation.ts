import { z } from 'zod'

// Admin/Auth validation
export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const createAdminSchema = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
    role: z.enum(['ADMIN', 'EDITOR']).optional(),
})

// Lead validation
export const createLeadSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
    source: z.string().optional(),
})

export const updateLeadSchema = z.object({
    status: z.enum(['PENDING', 'CONTACTED', 'CONVERTED', 'REJECTED']),
})

// Category validation
export const createCategorySchema = z.object({
    name: z.string().min(2).max(100),
    slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    description: z.string().optional(),
})

export const updateCategorySchema = createCategorySchema.partial()

// Blog post validation
export const createBlogPostSchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters').max(255),
    slug: z.string().min(5).max(255).regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    content: z.string().min(50, 'Content must be at least 50 characters'),
    excerpt: z.string().max(500).optional(),
    featuredImage: z.string().optional(),
    metaTitle: z.string().max(255).optional(),
    metaDescription: z.string().max(500).optional(),
    keywords: z.string().optional(),
    categoryId: z.number().int().positive().optional(),
    status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    publishedAt: z.string().datetime().optional(),
})

export const updateBlogPostSchema = createBlogPostSchema.partial()

// Image upload validation
export const imageUploadSchema = z.object({
    file: z.custom<File>((file) => {
        if (!(file instanceof File)) return false

        // Check file size (5MB max)
        if (file.size > 5 * 1024 * 1024) return false

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
        if (!allowedTypes.includes(file.type)) return false

        return true
    }, {
        message: 'File must be an image (JPEG, PNG, WebP, or GIF) and less than 5MB',
    }),
})

// Query parameter validation
export const paginationSchema = z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20),
})

export const searchSchema = z.object({
    q: z.string().optional(),
})

export const filterSchema = z.object({
    status: z.string().optional(),
    category: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
})

// Type exports
export type LoginInput = z.infer<typeof loginSchema>
export type CreateAdminInput = z.infer<typeof createAdminSchema>
export type CreateLeadInput = z.infer<typeof createLeadSchema>
export type UpdateLeadInput = z.infer<typeof updateLeadSchema>
export type CreateCategoryInput = z.infer<typeof createCategorySchema>
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>
export type CreateBlogPostInput = z.infer<typeof createBlogPostSchema>
export type UpdateBlogPostInput = z.infer<typeof updateBlogPostSchema>
export type PaginationInput = z.infer<typeof paginationSchema>
export type SearchInput = z.infer<typeof searchSchema>
export type FilterInput = z.infer<typeof filterSchema>
