import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { conferencesData } from '../data/conferences';
import ConferenceList from '../components/ConferenceList';

const CategoryDetail = () => {
    const { slug } = useParams();

    const category = useMemo(() =>
        conferencesData.find(c => c.id === slug),
        [slug]
    );

    if (!category) {
        return <Navigate to="/" replace />;
    }

    const { title, events } = category;
    const count = events.length;

    const colorMap = {
        'business-economics': '#0ea5e9',
        'health-medical-sciences': '#ef4444',
        'engineering-technology': '#f59e0b',
        'education': '#3b82f6',
        'physical-life-sciences': '#10b981',
        'social-science-humanities': '#8b5cf6',
        'agriculture-food-sciences': '#84cc16',
        'interdisciplinary-emerging-fields': '#ec4899',
        'mathematics-data-science': '#6366f1',
        'arts-culture-communication': '#f97316',
        'sports-physical-education': '#14b8a6',
    };

    const themeColor = colorMap[slug] || '#2563eb';

    return (
        <>
            <Helmet>
                <title>{`${title} Conferences (${count})`}</title>
                <meta
                    name="description"
                    content={`Browse ${count} upcoming conferences in ${title}. Register now.`}
                />
                <link rel="canonical" href={`/conferences/${slug}`} />
            </Helmet>

            <main className="container" style={{ paddingTop: '1.5rem' }}>
                <Link
                    to="/"
                    className="back-link"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'linear-gradient(135deg, #475569, #334155)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '10px',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(51, 65, 85, 0.3)',
                        border: 'none',
                        transition: 'all 0.2s ease',
                        marginBottom: '1.25rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 6px 25px rgba(51, 65, 85, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #334155, #1e293b)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(51, 65, 85, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #475569, #334155)';
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to all categories
                </Link>
                <header style={{
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: `2px solid ${themeColor}20`
                }}>
                    <h1 style={{
                        fontSize: '2.25rem',
                        fontWeight: '800',
                        background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}dd 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        {title}
                    </h1>
                    <p className="subtitle" style={{
                        fontSize: '0.95rem',
                        color: '#64748b',
                        fontWeight: '500',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: `${themeColor}10`,
                        padding: '0.35rem 0.85rem',
                        borderRadius: '99px',
                        border: `1px solid ${themeColor}20`
                    }}>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            background: themeColor,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}></span>
                        {count} events and more
                    </p>
                </header>

                <section>
                    <ConferenceList events={events} themeColor={themeColor} />
                </section>
            </main>
        </>
    );
};

export default CategoryDetail;
