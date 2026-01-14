import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const AdService = () => {
    return (
        <div className="animate-fade-in">
            <div className="bg-gradient-to-b from-blue-900/20 to-bg-primary py-24">
                <div className="container text-center">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Done-For-You Marketing</span>
                    <h1 className="text-5xl font-bold mb-6">We Run Your Ads. You Close Deals.</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Stop wasting money on agencies that don't understand real estate.
                        Our team manages over $1M/mo in ad spend for wholesalers and flippers.
                    </p>
                    <a href="https://calendly.com/iamiornyman-proton/new-meeting?" target="_blank" className="btn btn-primary text-lg px-8 py-4">
                        Book a Strategy Call
                    </a>
                </div>
            </div>

            <div className="page-container">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-card p-8 rounded-2xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6">Google PPC Management</h2>
                        <ul className="space-y-4">
                            {[
                                'Keyword Research & Selection',
                                'High-Converting Landing Pages',
                                'Negative Keyword Management',
                                'Conversion Tracking Setup',
                                'Weekly Performance Reports'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6">Facebook & Instagram Ads</h2>
                        <ul className="space-y-4">
                            {[
                                'Custom Audience Targeting',
                                'Retargeting Campaigns',
                                'Creative Design & Copywriting',
                                'Lead Form Integration',
                                'A/B Testing'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdService;
