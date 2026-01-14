import React, { useState } from 'react';
import { MapPin, Home, DollarSign, Activity, User, FileText } from 'lucide-react';

const MOCK_LEADS = [
    {
        id: 1,
        city: 'Phoenix, AZ',
        zip: '85001',
        date: '14 January 2026, 07:08 AM',
        type: 'Single Family',
        occupancy: 'Tenant Occupied',
        motivation: 'Death in family; Sell without showings',
        listed: 'No',
        sqft: 1800,
        beds: 3,
        baths: 2,
        price: 350,
        equity: 'High',
        debt: 185000,
        callSummary: 'Owner confirmed they need to sell quickly due to family situation. Property is rented month-to-month, tenant willing to vacate. Needs minimal repairs, ready for showings.'
    },
    {
        id: 2,
        city: 'Austin, TX',
        zip: '78701',
        date: '14 January 2026, 06:15 AM',
        type: 'Multi Family',
        occupancy: 'Owner Occupied',
        motivation: 'Inherited Property; Downsizing',
        listed: 'No',
        sqft: 2400,
        beds: 4,
        baths: 3,
        price: 550,
        equity: 'Med',
        debt: 'N/A',
        callSummary: 'Inherited from parents 6 months ago. All units currently occupied. Owner wants cash offer, flexible on timeline. Property in good condition.'
    },
    {
        id: 3,
        city: 'Tampa, FL',
        zip: '33601',
        date: '13 January 2026, 09:30 PM',
        type: 'Single Family',
        occupancy: 'Vacant',
        motivation: 'Job Relocation; Quick Cash',
        listed: 'Yes (Expired)',
        sqft: 1500,
        beds: 3,
        baths: 2,
        price: 299,
        equity: 'High',
        debt: 95000,
        callSummary: 'Job transfer to California next month. Listing expired after 90 days. Willing to sell below market for quick close. Property needs cosmetic updates.'
    },
    {
        id: 4,
        city: 'Las Vegas, NV',
        zip: '89101',
        date: '13 January 2026, 04:45 PM',
        type: 'Condo',
        occupancy: 'Tenant Occupied',
        motivation: 'Tired Landlord',
        listed: 'No',
        sqft: 1100,
        beds: 2,
        baths: 2,
        price: 200,
        equity: 'High',
        debt: 125000,
        callSummary: 'Owned for 8 years, tired of property management. Tenant has 3 months left on lease. HOA fees current. Owner very motivated to sell.'
    },
];

const Marketplace = () => {
    return (
        <div className="page-container">
            <div className="marketplace-header">
                <div>
                    <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Real-Time Lead Marketplace</h1>
                    <p className="section-desc" style={{ textAlign: 'left', margin: 0 }}>Fresh leads added every hour. Unlock high-intent leads instantly.</p>
                </div>
            </div>

            <div className="leads-container">
                {MOCK_LEADS.map((lead) => (
                    <div key={lead.id} className="marketplace-lead-card">
                        {/* Header */}
                        <div className="marketplace-card-header">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="exclusive-tag">Exclusive Lead</span>
                                <h3 className="marketplace-card-title">{lead.city}</h3>
                            </div>
                            <div className="marketplace-card-date">
                                <Activity className="w-4 h-4" /> {lead.date}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="marketplace-card-body">
                            {/* Map Section */}
                            <div className="marketplace-map-section">
                                <div className="marketplace-map-wrapper">
                                    <div className="lead-map-placeholder"></div>
                                    <div className="marketplace-map-label">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        <span>{lead.city} area</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="marketplace-content-section">
                                {/* Call Summary */}
                                <div className="marketplace-call-summary">
                                    <div className="marketplace-summary-header">
                                        <FileText className="w-3 h-3" />
                                        <span>AI Call Summary</span>
                                    </div>
                                    <p className="marketplace-summary-text">
                                        "{lead.callSummary}"
                                    </p>
                                </div>

                                {/* Property Details Grid */}
                                <div className="marketplace-details-grid">
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Occupancy</span>
                                        <span className="marketplace-detail-value">{lead.occupancy}</span>
                                    </div>
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Type</span>
                                        <span className="marketplace-detail-value">{lead.type}</span>
                                    </div>
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Listing Status</span>
                                        <span className="marketplace-detail-value text-green-400">Off-Market</span>
                                    </div>
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Est. Debt</span>
                                        <span className="marketplace-detail-value">{typeof lead.debt === 'number' ? `$${lead.debt.toLocaleString()}` : lead.debt}</span>
                                    </div>
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Motivation</span>
                                        <span className="marketplace-detail-value">{lead.motivation}</span>
                                    </div>
                                    <div className="marketplace-detail-item">
                                        <span className="marketplace-detail-label">Urgency</span>
                                        <span className="marketplace-detail-value text-red-400">{lead.listed === 'Yes (Expired)' ? '1 month' : '1 month'}</span>
                                    </div>
                                </div>

                                {/* AI Score & CTA */}
                                <div className="marketplace-cta-section">
                                    <div className="marketplace-ai-badge">
                                        <span className="marketplace-ai-label">Deal Engine AI</span>
                                        <div className="marketplace-ai-score">A+</div>
                                    </div>

                                    <div className="marketplace-price-cta">
                                        <div className="marketplace-price-section">
                                            <span className="marketplace-price-label">Unlock Price</span>
                                            <span className="marketplace-price-value">${lead.price}</span>
                                        </div>
                                        <button className="btn btn-primary w-full">Unlock Lead</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
