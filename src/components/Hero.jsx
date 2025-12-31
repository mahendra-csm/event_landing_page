import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-overlay"></div>
            <div className="container hero-content">
                <h1>Global Conference Directory</h1>
                <p>Discover premier academic and professional events across 11+ disciplines.</p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">300+</span>
                        <span className="stat-label">Upcoming Events</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">Global</span>
                        <span className="stat-label">Reach</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
