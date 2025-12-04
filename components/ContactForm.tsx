'use client';

import { useState, useEffect } from 'react';
import { Send, Loader2, X, Copy, MessageCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [inquiryData, setInquiryData] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the inquiry message
        const messengerMessage = `☕ NEW INQUIRY - Kafe Barako

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Event Date: ${formData.eventDate || 'Not specified'}

💬 Message:
${formData.message}`;

        // Store inquiry data for modal
        setInquiryData(messengerMessage);

        try {
            // Send email using Web3Forms (free service)
            const emailData = {
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
                subject: `New Inquiry from ${formData.name} - Kafe Barako`,
                from_name: 'Kafe Barako Website',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                event_date: formData.eventDate || 'Not specified',
                message: formData.message,
                to_email: process.env.NEXT_PUBLIC_TO_EMAIL || 'kafebarako@gmail.com',
            };

            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            const result = await response.json();
            setEmailSent(result.success);

            // Show modal regardless of email success
            setShowModal(true);

            // Reset form
            setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' });
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            setEmailSent(false);

            // Show modal even if email fails
            setShowModal(true);

            // Reset form
            setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Automatically copy to clipboard when modal shows
    useEffect(() => {
        if (showModal && inquiryData) {
            // Auto-copy to clipboard
            navigator.clipboard.writeText(inquiryData)
                .then(() => {
                    console.log('Inquiry details automatically copied to clipboard');
                })
                .catch((error) => {
                    console.error('Failed to auto-copy:', error);
                });
        }
    }, [showModal, inquiryData]);

    const handleCopyInquiry = async () => {
        try {
            await navigator.clipboard.writeText(inquiryData);
            alert('✅ Inquiry details copied to clipboard!');
        } catch (error) {
            alert('❌ Failed to copy. Please select and copy the text manually.');
        }
    };

    const handleMessageUs = () => {
        // Open Facebook Messenger directly to Kafe Barako Malolos page
        window.open('https://m.me/kafebarakomalolos', '_blank');
        setShowModal(false);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Get In Touch</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600">We'd love to hear from you!</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Terms & Conditions */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
                        <h3 className="text-3xl font-bold text-primary mb-8">Terms & Conditions</h3>

                        <div className="space-y-4 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold mb-2">PAYMENT:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>50% DOWN PAYMENT IS REQUIRED UPON BOOKING</li>
                                    <li>BALANCE CAN BE PAID IN THE VENUE</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">ADDITIONAL CHARGES:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>ADDITIONAL DRINKS: ₱130/drink</li>
                                    <li>ADDITIONAL HOURS: ₱500/hour</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-accent mb-2">NO REFUND</p>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">CANCELLATION:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>FOR LESS THAN 24 HRS CANCELLATION: NO REFUND</li>
                                    <li>CANCELLATION MUST BE MADE 3 DAYS OR 72 HRS BEFORE THE EVENT.</li>
                                    <li>ONLY 50% WILL BE REFUNDED IF CANCELLED WITHIN NOTICE PERIOD</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Send Inquiry Form */}
                    <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-8">Send Inquiry</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="John Smith"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="0927 969 8669"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Event Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.eventDate}
                                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                                    placeholder="Tell us about your event..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-primary text-white font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" />
                                        Send Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                            <h3 className="text-2xl font-bold text-primary">
                                {emailSent ? '✅ Inquiry Submitted!' : '⚠️ Inquiry Received'}
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            {/* Status Message */}
                            <div className={`p-4 rounded-lg ${emailSent ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                                <p className={`text-sm ${emailSent ? 'text-green-800' : 'text-yellow-800'}`}>
                                    {emailSent ? (
                                        <>
                                            <strong>Thank you!</strong> Your inquiry has been sent to our email successfully.
                                            We'll get back to you as soon as possible.
                                        </>
                                    ) : (
                                        <>
                                            <strong>Note:</strong> There was an issue sending the email.
                                            Please use the alternative option below to contact us directly.
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* Alternative Option */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                    <MessageCircle className="h-5 w-5" />
                                    Alternative: Message Us on Facebook
                                </h4>
                                <p className="text-sm text-blue-800 mb-3">
                                    {emailSent
                                        ? "For faster response, you can also send us a message on Facebook. We've prepared your inquiry details below - just copy and paste!"
                                        : "Please send us a message on Facebook with your inquiry details. Click 'Copy Details' below, then click 'Message Us' to open our Facebook page."}
                                </p>
                            </div>

                            {/* Inquiry Details */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Inquiry Details:
                                </label>
                                <textarea
                                    readOnly
                                    value={inquiryData}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-sm font-mono resize-none"
                                    rows={12}
                                    onClick={(e) => e.currentTarget.select()}
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    💡 Tip: Click the text above to select all, or use the Copy button below
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleCopyInquiry}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 border border-gray-300"
                                >
                                    <Copy className="h-5 w-5" />
                                    Copy Details
                                </button>
                                <button
                                    onClick={handleMessageUs}
                                    className="flex-1 bg-accent hover:bg-primary text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Message Us on Facebook
                                </button>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all border border-gray-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
