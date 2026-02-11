import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from './db'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    console.log('🔐 Auth attempt for:', credentials?.email)

                    if (!credentials?.email || !credentials?.password) {
                        console.log('❌ Missing credentials')
                        throw new Error('Email and password are required')
                    }

                    // Find admin user
                    const admin = await prisma.admin.findUnique({
                        where: { email: credentials.email },
                    })

                    if (!admin) {
                        console.log('❌ Admin not found:', credentials.email)
                        throw new Error('Invalid email or password')
                    }

                    // Verify password
                    const isValidPassword = await bcrypt.compare(
                        credentials.password,
                        admin.password
                    )

                    if (!isValidPassword) {
                        console.log('❌ Invalid password for:', credentials.email)
                        throw new Error('Invalid email or password')
                    }

                    console.log('✅ Auth successful for:', admin.email)

                    // Return user object
                    return {
                        id: admin.id.toString(),
                        email: admin.email,
                        name: admin.username,
                        role: admin.role,
                    }
                } catch (error) {
                    console.error('🔥 Auth Error:', error)
                    throw error
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
            }
            return session
        },
    },

    pages: {
        signIn: '/admin/login',
        error: '/admin/login',
    },

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    secret: process.env.NEXTAUTH_SECRET,

    debug: process.env.NODE_ENV === 'development',
}
