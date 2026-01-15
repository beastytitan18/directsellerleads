import React from 'react';
import { Mail } from 'lucide-react';

const Support = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
                <p className="text-gray-400">Our support team is here to assist you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="text-blue-400" />
                            <span className="text-gray-300">support@directsellerleads.com</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold mb-4 text-white">FAQ</h3>
                        <div className="space-y-4">
                            <details className="bg-secondary p-4 rounded-lg cursor-pointer">
                                <summary className="font-medium text-gray-200">What is the refund policy?</summary>
                                <p className="mt-2 text-sm text-gray-400">We offer refunds on leads with disconnected numbers or wrong homeowners within 48 hours of purchase.</p>
                            </details>
                            <details className="bg-secondary p-4 rounded-lg cursor-pointer">
                                <summary className="font-medium text-gray-200">How often are leads updated?</summary>
                                <p className="mt-2 text-sm text-gray-400">New leads are added to the marketplace in real-time as they are verified by our team.</p>
                            </details>
                        </div>
                    </div>
                </div>

                <form className="bg-card p-8 rounded-xl border border-gray-700">
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input type="text" className="support-form-input" placeholder="Your Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" className="support-form-input" placeholder="your@email.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea className="support-form-input support-form-textarea" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Support;
