import React from 'react'

export const metadata = {
    title: 'Shipping Policy - Tarazu Siddhant',
    description: 'Shipping Policy for Tarazu Siddhant Academy. All our products and services are delivered digitally.',
}

export default function ShippingPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
                    <div className="bg-primary px-8 py-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Shipping Policy</h1>
                        <p className="opacity-80">Last updated: January 21, 2026</p>
                    </div>

                    <div className="p-8 md:p-12 prose prose-blue max-w-none">
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-10 rounded-r-xl">
                            <h3 className="text-blue-800 font-bold mb-2">100% Digital Delivery</h3>
                            <p className="text-blue-700 text-sm">
                                All our products and services are delivered digitally. There is no physical shipping involved as we provide online classes, downloadable resources, and e-learning content.
                            </p>
                        </div>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">1. Overview</h2>
                            <p className="text-text-secondary mb-4">
                                Taraju Siddhant operates as a digital-first educational platform. Since all our products and services are delivered electronically, traditional shipping does not apply to our business model.
                            </p>
                            <p className="text-text-secondary">
                                This policy explains how you will receive access to your purchased content and what to expect after completing your transaction.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">2. What We Deliver Digitally</h2>
                            <p className="text-text-secondary mb-4">All our offerings are delivered through digital channels:</p>

                            <h4 className="font-bold text-heading mt-6 mb-2">Live Online Classes</h4>
                            <ul className="list-disc pl-6 text-text-secondary space-y-1 mb-6">
                                <li>Live trading sessions (9:00 AM - 12:00 PM IST)</li>
                                <li>Evening classes (3:00 PM - 5:00 PM IST)</li>
                                <li>Interactive webinars and workshops</li>
                                <li>Real-time market analysis sessions</li>
                            </ul>

                            <h4 className="font-bold text-heading mt-6 mb-2">Digital Resources</h4>
                            <ul className="list-disc pl-6 text-text-secondary space-y-1 mb-6">
                                <li>Downloadable course materials</li>
                                <li>Trading strategy guides (PDF)</li>
                                <li>Video tutorials and recordings</li>
                                <li>Market analysis reports</li>
                            </ul>

                            <h4 className="font-bold text-heading mt-6 mb-2">Membership Access</h4>
                            <ul className="list-disc pl-6 text-text-secondary space-y-1 mb-6">
                                <li>VIP membership authentication tokens</li>
                                <li>Exclusive content access</li>
                                <li>Premium community forums</li>
                                <li>Advanced trading tools</li>
                            </ul>

                            <h4 className="font-bold text-heading mt-6 mb-2">Educational Content</h4>
                            <ul className="list-disc pl-6 text-text-secondary space-y-1 mb-6">
                                <li>Structured online courses</li>
                                <li>E-books and digital publications</li>
                                <li>Interactive learning modules</li>
                                <li>Assessment and progress tracking</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">3. Instant Access Delivery</h2>
                            <h4 className="font-bold text-heading mt-6 mb-3">Immediate Delivery Process</h4>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>3.1 Processing Time:</strong> Digital access is typically granted within 1-5 minutes of successful payment confirmation.</li>
                                <li><strong>3.2 Account Dashboard:</strong> All purchased content and active memberships are accessible through your personal account dashboard.</li>
                                <li><strong>3.3 Email Notifications:</strong> You will receive email confirmations containing access instructions and relevant login details.</li>
                                <li><strong>3.4 VIP Tokens:</strong> For VIP memberships, authentication tokens are generated and sent to your registered email address.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">4. How to Access Your Content</h2>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>4.1 Website Login:</strong> Access your purchased content by logging into your account on our website using your registered credentials.</li>
                                <li><strong>4.2 Mobile Access:</strong> Our platform is mobile-responsive, allowing you to access content from any device with internet connectivity.</li>
                                <li><strong>4.3 Live Class Links:</strong> For live classes, you will receive joining links via email and SMS before each session.</li>
                                <li><strong>4.4 Download Options:</strong> Downloadable materials will be available in your account&apos;s resource section with direct download links.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4 text-orange-600">5. Physical Products (If Applicable)</h2>
                            <p className="text-text-secondary mb-4 italic">
                                Note: In the rare event that we offer physical products (such as printed books or materials), the following shipping terms would apply:
                            </p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                                <li>Shipping within India only</li>
                                <li>5-10 business days delivery time</li>
                                <li>Shipping costs will be clearly mentioned at checkout</li>
                                <li>Tracking information provided via email</li>
                                <li>Physical items subject to separate return policies</li>
                            </ul>
                            <p className="text-text-secondary font-bold">
                                Currently, we do not offer any physical products. All services are delivered digitally.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">6. Technical Requirements</h2>
                            <p className="text-text-secondary mb-4">To ensure smooth access to your digital content, please ensure you have:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li><strong>Stable Internet Connection:</strong> Broadband connection recommended for live classes</li>
                                <li><strong>Compatible Device:</strong> Computer, laptop, tablet, or smartphone</li>
                                <li><strong>Updated Browser:</strong> Chrome, Firefox, Safari, or Edge (latest versions)</li>
                                <li><strong>Email Access:</strong> Active email account for receiving access credentials</li>
                                <li><strong>PDF Reader:</strong> For downloadable course materials</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">7. Access Issues and Support</h2>
                            <ul className="list-none space-y-4 text-text-secondary mb-6">
                                <li><strong>7.1 Common Issues:</strong> If you experience difficulty accessing your purchased content, common causes include payment processing delays, incorrect login credentials, browser compatibility issues, firewall or network restrictions, or email delivery issues.</li>
                                <li><strong>7.2 Support Response:</strong> Our technical support team responds to access issues within 24 hours during business days.</li>
                                <li><strong>7.3 Resolution Time:</strong> Most access issues are resolved within 2-4 hours of reporting.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">8. International Access</h2>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>8.1 Global Availability:</strong> Our digital services are accessible worldwide, provided you have internet connectivity.</li>
                                <li><strong>8.2 Time Zone Considerations:</strong> Live classes are conducted in Indian Standard Time (IST). International students should account for time zone differences.</li>
                                <li><strong>8.3 Language:</strong> All content is delivered in English and Hindi as specified in course descriptions.</li>
                                <li><strong>8.4 Currency:</strong> Payments are processed in Indian Rupees (INR). International payment processing fees may apply through your bank.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">9. Contact Information</h2>
                            <ul className="list-none space-y-2 text-text-secondary">
                                <li><strong>Email:</strong> support@tarajusiddhant.com</li>
                                <li><strong>Phone:</strong> +91 82092 03234</li>
                                <li><strong>Address:</strong> Kalwar Road, Jaipur, India</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
