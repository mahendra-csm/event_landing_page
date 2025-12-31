import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="site-header">
        <div className="container header-container">
            <Link to="/" className="logo-text" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{
                    color: '#64748b',
                    fontWeight: '600',
                    fontSize: '2rem',
                    letterSpacing: '-0.02em'
                }}>
                    One
                </span>
                <span style={{
                    color: '#dc2626',
                    fontWeight: '800',
                    fontSize: '2rem',
                    letterSpacing: '-0.02em'
                }}>
                    Grasp
                </span>
                <span style={{
                    fontWeight: '300',
                    fontSize: '1.25rem',
                    color: '#94a3b8',
                    marginLeft: '8px'
                }}>
                    Events
                </span>
            </Link>
            <nav>
                {/* Placeholder for future nav items if needed */}
            </nav>
        </div>
    </header>
);

const Footer = () => (
    <footer className="site-footer" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#cbd5e1',
        padding: '4rem 0 2rem 0',
        marginTop: '6rem'
    }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                marginBottom: '3rem'
            }}>
                {/* Brand Column */}
                <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ color: '#ffffffff', fontWeight: '600', fontSize: '1.75rem' }}>One</span>
                        <span style={{ color: '#dc2626', fontWeight: '800', fontSize: '1.75rem' }}>Grasp</span>
                    </div>
                    <p style={{ color: '#ffffffff', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        Connecting minds, shaping the future through premier global conferences and academic events.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: '#64748b',
                                fontSize: '1.25rem',
                                transition: 'color 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                        >

                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: '#64748b',
                                fontSize: '1.25rem',
                                transition: 'color 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                        >

                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            style={{
                                color: '#64748b',
                                fontSize: '1.25rem',
                                transition: 'color 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                        >

                        </a>
                    </div>
                </div>

                {/* Services Column */}
                <div>
                    <h3 style={{
                        color: '#60a5fa',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        OUR SERVICES
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {['Education Events', 'Science Conferences', 'Technology Forums', 'Medical Symposiums', 'Business Summits', 'Research Networking'].map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '0.75rem' }}>
                                <span style={{
                                    color: '#ffffffff',
                                    fontSize: '0.95rem',
                                    transition: 'color 0.2s',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links Column */}
                <div>
                    <h3 style={{
                        color: '#60a5fa',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        QUICK LINKS
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                            { text: 'About Us', href: '#' },
                            { text: 'All Categories', href: '/' },
                            { text: 'Upcoming Events', href: '#' },
                            { text: 'Scientific Research', href: '#' },
                            { text: 'Strategic Terms', href: '#' },
                            { text: 'Privacy Policy', href: '#' }
                        ].map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '0.75rem' }}>
                                <Link to={item.href} style={{
                                    color: '#ffffffff',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    transition: 'color 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffffff'}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 style={{
                        color: '#60a5fa',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        CONTACT SUPPORT
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                color: '#60a5fa'
                            }}>
                                📧
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Email Experts
                                </div>
                                <a href="mailto:support@onegrasp.com" style={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem'
                                }}>
                                    support@onegrasp.com
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                color: '#60a5fa'
                            }}>
                                📞
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Connect Desk
                                </div>
                                <a href="tel:+91 8977760443" style={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem'
                                }}>
                                    +91-9177106443
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                color: '#60a5fa'
                            }}>
                                🌍
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Location
                                </div>
                                <div style={{
                                    color: '#ffffff',
                                    fontWeight: '700',
                                    fontSize: '0.95rem'
                                }}>
                                    Global operations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: '2rem',
                textAlign: 'center',
                color: '#64748b',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} OneGrasp. All rights reserved.
            </div>
        </div>
    </footer>
);

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <div className="main-content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
