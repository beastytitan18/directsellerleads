import React from 'react';
import { Shield, Zap, Database, UserCheck, Target } from 'lucide-react';

const WhyUs = () => {
    return (
        <div className="animate-fade-in">
            <div className="bg-secondary py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Built for Serious Investors</h1>
                    <p className="section-desc">
                        We solved the biggest problem in the industry: paying for bad data.
                        Our multi-step verification process ensures you only speak to sellers who are ready to sell.
                    </p>
                </div>
            </div>

            <div className=" page-container">
                {/* Verification Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <div className="inline-block p-4 rounded-2xl bg-blue-900/20 text-blue-400 mb-6">
                            <UserCheck className="icon-lg" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Human Verification</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            AI isn't enough. Our team of US-based qualifiers calls every lead to verify intent, timeline, and property condition before it ever hits the marketplace.
                        </p>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-center gap-3 text-gray-300"><Shield className="w-5 h-5 text-green-400" /> Confirmed ownership</li>
                            <li className="flex items-center gap-3 text-gray-300"><Shield className="w-5 h-5 text-green-400" /> Verified motivation to sell</li>
                            <li className="flex items-center gap-3 text-gray-300"><Shield className="w-5 h-5 text-green-400" /> Correct contact info guaranteed</li>
                        </ul>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border">
                                <span className="text-gray-400">Lead Quality</span>
                                <span className="text-green-400 font-bold">Verified</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border">
                                <span className="text-gray-400">Phone Number</span>
                                <span className="text-green-400 font-bold">Active</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border">
                                <span className="text-gray-400">Intent</span>
                                <span className="text-green-400 font-bold">High</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper"><Zap className="icon-lg text-yellow" /></div>
                        <h3 className="feature-title">Speed to Lead</h3>
                        <p className="feature-desc">Instant delivery via SMS and Email the second a lead is verified.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper"><Database className="icon-lg text-purple-400" /></div>
                        <h3 className="feature-title">Data Enrichment</h3>
                        <p className="feature-desc">We append skip-traced data, mortgage info, and equity estimates.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper"><Target className="icon-lg text-red-400" /></div>
                        <h3 className="feature-title">Exclusive Access</h3>
                        <p className="feature-desc">Leads are sold to a maximum of 1 buyer to ensure you have the edge.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
