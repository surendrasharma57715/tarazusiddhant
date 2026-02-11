import React from 'react'

export const metadata = {
    title: 'Refund Policy - Tarazu Siddhant',
    description: 'Refund Policy for Tarazu Siddhant Academy. Learn about our terms and conditions regarding refunds.',
}

export default function RefundPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
                    <div className="bg-primary px-8 py-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Refund Policy</h1>
                        <p className="opacity-80">Last updated: January 21, 2026</p>
                    </div>

                    <div className="p-8 md:p-12 prose prose-blue max-w-none">
                        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-10 rounded-r-xl">
                            <h3 className="text-red-800 font-bold mb-2">No Refund Policy</h3>
                            <p className="text-red-700 text-sm">
                                As a general rule, Taraju Siddhant does not offer refunds for purchased memberships, courses, digital products, or any other services. All sales are final.
                            </p>
                        </div>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">1. Policy Overview</h2>
                            <p className="text-text-secondary mb-4">
                                This Refund Policy outlines the terms and conditions regarding refunds for services purchased from Taraju Siddhant. By making a purchase, you acknowledge and agree to this policy.
                            </p>
                            <p className="text-text-secondary font-bold">
                                Important: Please read this policy carefully before making any purchase. Once you complete your transaction, you are bound by these terms.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">2. No Refund Rule</h2>
                            <p className="text-text-secondary mb-4"><strong>2.1 General Policy:</strong> All purchases are final and non-refundable. This includes but is not limited to:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Monthly and annual membership subscriptions</li>
                                <li>VIP membership plans and authentication tokens</li>
                                <li>Individual course purchases</li>
                                <li>Digital educational materials and resources</li>
                                <li>Physical books and printed materials</li>
                                <li>Live trading class access</li>
                                <li>One-time educational services</li>
                            </ul>
                            <p className="text-text-secondary mb-4">
                                <strong>2.2 Immediate Access:</strong> Since our services provide immediate access to digital content and live classes, refunds are not feasible once access has been granted.
                            </p>
                            <p className="text-text-secondary">
                                <strong>2.3 Educational Nature:</strong> Our services are educational in nature, and the value is delivered through knowledge transfer, which cannot be &quot;returned&quot; once received.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">3. Rationale Behind Our Policy</h2>
                            <p className="text-text-secondary mb-4">Our no-refund policy exists because:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li><strong>Immediate Value Delivery:</strong> You gain immediate access to live classes, recorded content, and educational materials</li>
                                <li><strong>Digital Nature:</strong> Our services are primarily digital and cannot be &quot;returned&quot; like physical products</li>
                                <li><strong>Resource Investment:</strong> Significant resources are invested in creating and delivering live content</li>
                                <li><strong>Fair Pricing:</strong> Our services are priced competitively to provide maximum value</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">4. Before You Purchase</h2>
                            <p className="text-text-secondary mb-4">Please consider the following before making a purchase:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Review all course descriptions and membership features carefully</li>
                                <li>Check the class timings (9:00 AM - 12:00 PM and 3:00 PM - 5:00 PM IST)</li>
                                <li>Ensure you have the time commitment required for live classes</li>
                                <li>Understand that trading education requires dedication and practice</li>
                                <li>Contact our support team if you have any questions before purchasing</li>
                            </ul>
                            <p className="text-text-secondary">
                                We encourage you to thoroughly research and consider your purchase decision. Our support team is available to answer any questions about our services before you buy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">5. Payment Processing</h2>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>5.1 Payment Gateway:</strong> All payments are processed through Razorpay, a secure and trusted payment processor.</li>
                                <li><strong>5.2 Transaction Confirmation:</strong> Once payment is successfully processed, you will receive immediate access to your purchased services.</li>
                                <li><strong>5.3 Payment Issues:</strong> For technical payment issues (failed transactions, double charges), please contact Razorpay support or our customer service team.</li>
                                <li><strong>5.4 Currency:</strong> All prices are listed in Indian Rupees (INR) unless otherwise specified.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">6. Exceptional Circumstances</h2>
                            <p className="text-text-secondary mb-4">While our general policy is no refunds, we may consider requests in the following exceptional circumstances:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
                                <li>Technical issues preventing access to purchased services for extended periods</li>
                                <li>Duplicate payments due to technical errors</li>
                                <li>Unauthorized transactions (subject to verification)</li>
                                <li>Service discontinuation by us within 30 days of purchase</li>
                            </ul>
                            <p className="text-text-secondary italic text-sm">
                                Note: Even in exceptional circumstances, refunds are not guaranteed and are subject to our sole discretion after thorough investigation.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">7. Account and Access Issues</h2>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>7.1 Account Suspension:</strong> If your account is suspended due to violation of our Terms of Service, no refund will be provided.</li>
                                <li><strong>7.2 Technical Support:</strong> We provide technical support to resolve access issues. Refunds will not be issued for problems that can be resolved through support.</li>
                                <li><strong>7.3 User Error:</strong> Refunds will not be provided for user errors, including but not limited to wrong course selection or misunderstanding of service features.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">8. Alternative Solutions</h2>
                            <p className="text-text-secondary mb-4">Instead of refunds, we may offer the following alternatives in certain situations:</p>
                            <ul className="list-disc pl-6 text-text-secondary space-y-2">
                                <li>Account credit for future purchases</li>
                                <li>Service extension for technical issues</li>
                                <li>Alternative course or membership transfer</li>
                                <li>Additional support and resources</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">9. Dispute Resolution</h2>
                            <ul className="list-none space-y-4 text-text-secondary">
                                <li><strong>9.1 Contact First:</strong> Before initiating any dispute with your bank or payment processor, please contact our support team to discuss your concerns.</li>
                                <li><strong>9.2 Documentation:</strong> Any refund requests must be submitted in writing with detailed explanation of the circumstances.</li>
                                <li><strong>9.3 Response Time:</strong> We will respond to refund requests within 5-7 business days.</li>
                                <li><strong>9.4 Final Decision:</strong> Our decision regarding refund requests is final and binding.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-heading mb-4">10. Contact Information</h2>
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
