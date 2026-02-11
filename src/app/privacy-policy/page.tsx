import React from 'react'

export const metadata = {
    title: 'Privacy Policy - Tarazu Siddhant',
    description: 'Privacy Policy for Tarazu Siddhant Academy. Learn how we collect, use, and safeguard your data.',
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
                    <div className="bg-primary px-8 py-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
                        <p className="opacity-80">Last updated: January 21, 2026</p>
                    </div>

                    <div className="p-8 md:p-12 prose prose-blue max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">Our Commitment to Privacy</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                At Taraju Siddhant, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">1.1 Personal Information You Provide</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li><strong>Account Information:</strong> Name, email address, phone number, date of birth</li>
                                <li><strong>Profile Information:</strong> Profile photo, trading experience level, preferences</li>
                                <li><strong>Payment Information:</strong> Billing address, payment method details (processed by Razorpay)</li>
                                <li><strong>Communication Data:</strong> Messages, support tickets, feedback, and correspondence</li>
                                <li><strong>Identity Verification:</strong> Documents required for account verification when necessary</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">1.2 Automatically Collected Information</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, IP address, device identifiers</li>
                                <li><strong>Log Data:</strong> Access times, error logs, performance metrics</li>
                                <li><strong>Session Data:</strong> Login/logout times, session duration, activity patterns</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">1.3 Cookies and Tracking Technologies</h3>
                            <p className="text-text-secondary mb-4">We use cookies and similar technologies to:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Maintain your login session and preferences</li>
                                <li>Analyze platform usage and improve our services</li>
                                <li>Provide personalized content and recommendations</li>
                                <li>Ensure platform security and prevent fraud</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">2. How We Use Your Information</h2>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">2.1 Service Provision</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Create and manage your account</li>
                                <li>Provide access to courses, live classes, and content</li>
                                <li>Process payments and manage subscriptions</li>
                                <li>Deliver customer support and technical assistance</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">2.2 Communication</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Send important account and service notifications</li>
                                <li>Provide updates about new courses and features</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Send marketing communications (with your consent)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">2.3 Platform Improvement</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Analyze usage patterns to improve user experience</li>
                                <li>Develop new features and services</li>
                                <li>Conduct research and analytics</li>
                                <li>Ensure platform security and prevent abuse</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-text-secondary font-bold mb-4 italic">We Do Not Sell Your Personal Information</p>
                            <p className="text-text-secondary mb-6">
                                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                            </p>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">3.1 Service Providers</h3>
                            <p className="text-text-secondary mb-4">We may share information with trusted service providers who help us operate our platform:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li><strong>Payment Processing:</strong> Razorpay for secure payment processing</li>
                                <li><strong>Cloud Storage:</strong> MongoDB Atlas for secure data storage</li>
                                <li><strong>Email Services:</strong> For sending transactional and marketing emails</li>
                                <li><strong>Analytics:</strong> To understand platform usage and improve services</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">3.2 Legal Requirements</h3>
                            <p className="text-text-secondary mb-4">We may disclose information when required by law or to:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Comply with legal processes or government requests</li>
                                <li>Protect our rights, property, or safety</li>
                                <li>Prevent fraud or security threats</li>
                                <li>Enforce our Terms of Service</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">4. Data Security</h2>
                            <p className="text-text-secondary mb-6">We implement comprehensive security measures to protect your information:</p>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">4.1 Technical Safeguards</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>SSL/TLS encryption for data transmission</li>
                                <li>Secure database storage with encryption at rest</li>
                                <li>Regular security audits and vulnerability assessments</li>
                                <li>Multi-factor authentication for admin access</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">4.2 Access Controls</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Limited access to personal information on a need-to-know basis</li>
                                <li>Regular employee training on privacy and security</li>
                                <li>Secure authentication and session management</li>
                                <li>Regular monitoring and logging of system access</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">4.3 Data Retention</h3>
                            <p className="text-text-secondary">
                                We retain your information only as long as necessary to provide services and comply with legal obligations. When data is no longer needed, it is securely deleted.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">5. Your Rights and Choices</h2>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">5.1 Account Management</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Access and update your account information</li>
                                <li>Change your privacy settings and preferences</li>
                                <li>Download your account data</li>
                                <li>Delete your account (subject to legal retention requirements)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">5.2 Communication Preferences</h3>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Opt-out of marketing communications</li>
                                <li>Choose notification settings</li>
                                <li>Update contact preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-heading mt-6 mb-3">5.3 Cookie Management</h3>
                            <p className="text-text-secondary">
                                You can control cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">6. International Transfers</h2>
                            <p className="text-text-secondary mb-4">
                                Your information may be processed and stored in servers located outside India. We ensure that any international transfers comply with applicable data protection laws and maintain appropriate safeguards for your information.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">7. Children&apos;s Privacy</h2>
                            <p className="text-text-secondary mb-4">
                                Our services are intended for users aged 18 and above. We do not knowingly collect personal information from children under 18.
                            </p>
                            <p className="text-text-secondary">
                                If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly. Parents who believe their child has provided us with personal information should contact us immediately.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">8. Third-Party Links and Services</h2>
                            <p className="text-text-secondary mb-4">
                                Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites.
                            </p>
                            <p className="text-text-secondary">
                                We encourage you to review the privacy policies of any third-party services you use. This Privacy Policy applies only to information collected by Taraju Siddhant.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">9. Changes to This Privacy Policy</h2>
                            <p className="text-text-secondary mb-4">
                                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. When we make changes:
                            </p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>We will post the updated policy on our website</li>
                                <li>We will update the &quot;Last updated&quot; date</li>
                                <li>For significant changes, we will notify you via email or platform notification</li>
                                <li>Your continued use of our services after changes constitutes acceptance</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">10. Contact Us About Privacy</h2>
                            <p className="text-text-secondary mb-4">
                                If you have questions about this Privacy Policy or how we handle your personal information, please contact us:
                            </p>
                            <ul className="list-none space-y-2">
                                <li><strong>Privacy Officer:</strong> support@tarajusiddhant.com</li>
                                <li><strong>General Support:</strong> support@tarajusiddhant.com</li>
                                <li><strong>Phone:</strong> +91 82092 03234</li>
                                <li><strong>Address:</strong> Kalwar Road, Jaipur, India</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <h4 className="text-lg font-bold text-primary mb-2">Your Data, Your Rights</h4>
                            <p className="text-text-secondary text-sm">
                                We believe in transparency and giving you control over your personal information. If you have any concerns or requests regarding your data, we&apos;re here to help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
