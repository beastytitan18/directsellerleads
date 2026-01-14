import React from 'react';
import { DollarSign, Users, Gift } from 'lucide-react';

const Affiliate = () => {
    return (
        <div className="animate-fade-in">
            <div className="bg-secondary py-24 text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Earn 20% recurring commission on every customer you refer.
                    </p>
                    <button className="btn btn-primary px-8 py-4 text-lg">Join Affiliate Program</button>
                </div>
            </div>

            <div className="page-container">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="inline-block p-4 rounded-full bg-blue-900/30 text-blue-400 mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Refer Friend</h3>
                        <p className="text-gray-400">Share your unique link with your network of investors.</p>
                    </div>
                    <div className="text-center">
                        <div className="inline-block p-4 rounded-full bg-green-900/30 text-green-400 mb-6">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Earn Commissions</h3>
                        <p className="text-gray-400">Get paid every time your referral buys a lead or subscribes.</p>
                    </div>
                    <div className="text-center">
                        <div className="inline-block p-4 rounded-full bg-purple-900/30 text-purple-400 mb-6">
                            <Gift className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Bonuses & Perks</h3>
                        <p className="text-gray-400">Top affiliates get exclusive access to beta features and higher tiers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;
