import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap, MapPin, Activity, User, FileText, Lock } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg" />
                <div className="container hero-content">
                    <div className="hero-badge">
                        <span className="pulse-dot">
                            <span className="animate-ping"></span>
                            <span className="dot"></span>
                        </span>
                        New Inventory Added Daily
                    </div>
                    <h1 className="hero-title">
                        Stop Chasing leads. <br />
                        <span className="gradient-text">
                            Start Closing Deals.
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Direct access to high-intent, off-market motivated seller leads.
                        <br className="hidden md:block" />
                        <strong>Opted-in. Validated. Double Verified.</strong>
                    </p>
                    <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
                        Every lead comes with call transcripts and a summary validated by our expert team.
                        If anything is incorrect, we give you a <strong>full refund</strong>.
                    </p>
                    <div className="hero-actions">
                        <Link to="/marketplace" className="btn btn-primary btn-lg">
                            Browse Marketplace <ArrowRight className="icon-sm" />
                        </Link>
                        <a href="https://calendly.com/iamiornyman-proton/new-meeting?" target="_blank" className="btn btn-outline btn-lg">
                            Book a Strategy Call
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-grid">
                    <div className="stat-item">
                        <div className="stat-value">15k+</div>
                        <div className="stat-label">Leads Generated</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">$500M+</div>
                        <div className="stat-label">Property Value</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">98%</div>
                        <div className="stat-label">Customer Satisfaction</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">24/7</div>
                        <div className="stat-label">Instant Delivery</div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-slate-900/50 border-b border-slate-800">
                <div className="container text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="section-title mb-6">What Makes Us Different?</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Every lead that comes in from our different marketing channels is <strong>re-verified</strong>.
                            We confirm their interest in selling, validate property details, and ensure motivation levels
                            before they ever hit the marketplace.
                        </p>
                        <div className="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg inline-block">
                            <span className="text-green-400 font-bold">You only speak with qualified prospects. Every time.</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What our clients are saying</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <span className="quote-icon-large">“</span>
                            <p className="testimonial-text">
                                Thanks to DSL we dominate our area. $300k last 12 months.
                            </p>
                            <div className="testimonial-author">Nick T, FL</div>
                        </div>
                        <div className="testimonial-card">
                            <span className="quote-icon-large">“</span>
                            <p className="testimonial-text">
                                Five lead sources failed me. Started DSL - closed 3 deals.
                            </p>
                            <div className="testimonial-author">Edward W, VA</div>
                        </div>
                        <div className="testimonial-card">
                            <span className="quote-icon-large">“</span>
                            <p className="testimonial-text">
                                We went from $0 to $48K in 90 days with DSL.
                            </p>
                            <div className="testimonial-author">Joey Z, GA</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Top Investors Choose Us</h2>
                        <p className="section-desc">
                            We combine advanced data analytics with human verification to deliver the highest quality leads in the industry.
                        </p>
                    </div>

                    <div className="features-grid">
                        <FeatureCard
                            icon={<Shield className="icon-lg text-cyan" />}
                            title="100% Verified Leads"
                            description="Every lead is double-verified. Calls are recorded, contact info is checked. We filter out the tire-kickers so you don't have to."
                        />
                        <FeatureCard
                            icon={<Zap className="icon-lg text-yellow" />}
                            title="Instant Exclusivity"
                            description="When you buy a lead, it's yours. We pause distribution to give you the first-mover advantage you need to lock up the deal."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="icon-lg text-green" />}
                            title="Deal Engine AI"
                            description="Squeeze more from your leads with automated voice AI calls and automated text SMS to handle everything for you."
                        />
                    </div>
                </div>
            </section>

            {/* Value Prop / How it works */}
            <section className="value-section">
                <div className="container value-container">
                    <div className="value-content">
                        <h2 className="section-title">Built for Speed and Scalability</h2>
                        <ul className="value-list">
                            <ListItem title="Select Your Market" text="Filter by state, city, or zip code to find leads in your target backyard." />
                            <ListItem title="Analyze the Data" text="View property details, motivation factors, and estimated equity before you buy." />
                            <ListItem title="Unlock & Engage" text="Purchase with one click. Get instant access to the seller's direct phone number and email." />
                        </ul>
                        <div className="mt-8">
                            <Link to="/marketplace" className="btn btn-primary">Start Buying Leads</Link>
                        </div>
                    </div>

                    {/* Detailed Sample Lead Card */}
                    <div className="w-full max-w-2xl mx-auto lg:mx-0">
                        <div className="lead-card-wide transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="lead-card-header">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="exclusive-tag">Exclusive Lead</span>
                                    <h3 className="text-xl font-bold text-white">South Roxana, IL</h3>
                                </div>
                                <div className="text-gray-400 text-sm flex items-center gap-2">
                                    <Activity className="w-4 h-4" /> 14 January 2026
                                </div>
                            </div>

                            <div className="lead-card-body p-6 home-lead-grid gap-6">
                                {/* Left: Map */}
                                <div className="lead-map-area h-32 lg:h-full rounded-lg overflow-hidden relative bg-slate-800">
                                    <div className="absolute inset-0 bg-black/40" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=300&h=200")', backgroundSize: 'cover' }}></div>
                                    <div className="relative z-10 font-bold bg-black/60 px-2 py-1 rounded text-xs text-white absolute bottom-2 left-2">
                                        <MapPin className="inline w-3 h-3 mr-1 text-red-500" />
                                        South Roxana
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                                        <Lock className="w-8 h-8 text-white/50" />
                                    </div>
                                </div>

                                {/* Center: Details */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 text-sm">
                                    <div className="col-span-2 bg-slate-800/50 p-3 rounded border border-slate-700">
                                        <div className="text-gray-400 text-xs mb-1 font-bold uppercase tracking-wider">AI Call Summary</div>
                                        <p className="text-gray-300 text-xs leading-relaxed italic">
                                            "The homeowner shared plans to consider selling the property around March... <span className="blur-sm select-none">noting a current renter is in place and a cosmetic remodel is planned before listing. The home has four bedrooms...</span>"
                                        </p>
                                    </div>

                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Occupancy</div>
                                        <div className="font-semibold text-white">Owner Occupied</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Type</div>
                                        <div className="font-semibold text-white">Single Family</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Listing Status</div>
                                        <div className="font-semibold text-white text-green-400">Off-Market</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Est. Debt</div>
                                        <div className="font-semibold text-white blur-sm select-none">$1X5,000</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Motivation</div>
                                        <div className="font-semibold text-white">Relocating</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-1">Urgency</div>
                                        <div className="font-semibold text-white text-red-400">1 month</div>
                                    </div>
                                </div>

                                {/* Right: AI Score & Action */}
                                <div className="flex flex-col justify-between h-full gap-4">
                                    <div className="bg-slate-800/50 rounded p-3 text-center border border-slate-700">
                                        <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Deal Engine AI</div>
                                        <div className="w-12 h-12 bg-green-900/50 text-green-400 text-2xl font-bold rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                                            A+
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="text-center mb-2">
                                            <div className="text-gray-500 text-xs uppercase mb-1">Unlock Price</div>
                                            <span className="text-2xl font-bold text-white">$145</span>
                                        </div>
                                        <Link to="/marketplace" className="btn btn-primary w-full text-sm py-2">
                                            Unlock Lead
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <Link to="/marketplace" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                View 500+ more leads like this <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-bg"></div>
                <div className="container cta-content">
                    <h2 className="cta-title">Ready to Scale Your Portfolio?</h2>
                    <p className="cta-desc">
                        Join thousands of investors booking deals every month with Direct Seller Leads.
                    </p>
                    <div className="cta-actions">
                        <Link to="/marketplace" className="btn btn-primary btn-lg">See Available Leads</Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-icon-wrapper">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
    </div>
);

const ListItem = ({ title, text }) => (
    <div className="list-item">
        <div className="list-icon">
            <CheckCircle className="icon-md text-green" />
        </div>
        <div>
            <h4 className="list-title">{title}</h4>
            <p className="list-text">{text}</p>
        </div>
    </div>
);

export default Home;
