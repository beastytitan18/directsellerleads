import React from 'react';

const CaseStudies = () => {
    const cases = [
        {
            name: "Hans Andersen",
            role: "Real Estate Wholesaler",
            result: "$84k Profit in 30 Days",
            quote: "I was skeptical at first, but the quality of these leads is unlike anything I've seen. I closed 2 deals in my first month.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Sarah Jenkins",
            role: "House Flipper",
            result: "3 Properties Acquired",
            quote: "Direct Seller Leads allows me to find off-market properties before they hit the MLS. It's my secret weapon.",
            image: "https://images.unsplash.com/photo-1573496359-136d475583dc?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Marcus Johnson",
            role: "Investment Firm CEO",
            result: "Scaled to 5 Markets",
            quote: "The consistency of lead flow allowed us to expand into new territories without worrying about marketing fulfillment.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
        }
    ];

    return (
        <div className="container py-24 animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Real Results from Real Investors</h1>
                <p className="text-gray-400">See how our clients are closing deals and scaling their businesses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cases.map((study, idx) => (
                    <div key={idx} className="bg-card rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
                        <div className="h-48 overflow-hidden">
                            <img src={study.image} alt={study.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-8">
                            <div className="text-green-400 font-bold mb-2">{study.result}</div>
                            <blockquote className="text-gray-300 italic mb-6">"{study.quote}"</blockquote>
                            <div className="border-t border-gray-700 pt-4">
                                <div className="font-bold text-white">{study.name}</div>
                                <div className="text-sm text-gray-500">{study.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
