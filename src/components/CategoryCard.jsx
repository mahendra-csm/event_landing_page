import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaGraduationCap, FaDna, FaLandmark, FaLeaf,
    FaAtom, FaChartLine, FaPalette, FaRunning,
    FaMicrochip, FaHeartbeat, FaGlobeAmericas
} from 'react-icons/fa';

const iconMap = {
    'education': <FaGraduationCap />,
    'physical-life-sciences': <FaDna />,
    'social-science-humanities': <FaLandmark />,
    'agriculture-food-sciences': <FaLeaf />,
    'interdisciplinary-emerging-fields': <FaAtom />,
    'mathematics-data-science': <FaChartLine />,
    'arts-culture-communication': <FaPalette />,
    'sports-physical-education': <FaRunning />,
    'engineering-technology': <FaMicrochip />,
    'health-medical-sciences': <FaHeartbeat />,
    'business-economics': <FaGlobeAmericas />
};

const colorMap = {
    'business-economics': '#0284c7', // Deep Sky
    'health-medical-sciences': '#dc2626', // Deep Red
    'engineering-technology': '#d97706', // Deep Amber
    'education': '#2563eb', // Deep Royal
    'physical-life-sciences': '#059669', // Deep Emerald
    'social-science-humanities': '#7c3aed', // Deep Violet
    'agriculture-food-sciences': '#65a30d', // Deep Lime
    'interdisciplinary-emerging-fields': '#db2777', // Deep Pink
    'mathematics-data-science': '#4f46e5', // Deep Indigo
    'arts-culture-communication': '#ea580c', // Deep Orange
    'sports-physical-education': '#0d9488', // Deep Teal
};

const CategoryCard = ({ id, title, events = [] }) => {
    const icon = iconMap[id] || <FaAtom />;
    const themeColor = colorMap[id] || '#2563eb';

    return (
        <Link to={`/conferences/${id}`} className="category-card-link">
            <motion.div
                className="category-block"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    // Vibrant Gradient Background
                    background: `linear-gradient(135deg, ${themeColor}, ${themeColor}dd)`,
                    boxShadow: `0 20px 40px -15px ${themeColor}60`, // Stronger colored shadow
                    position: 'relative',
                    overflow: 'hidden',
                    border: 'none'
                }}
            >
                {/* Decorative White Glow Blob */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-60px',
                        right: '-60px',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'white',
                        opacity: '0.1',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }}
                />

                <div className="category-content-wrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

                    {/* Floating Icon Bubble - White Glass */}
                    <div
                        className="category-icon-wrapper"
                        style={{
                            color: themeColor,
                            backgroundColor: 'white', // Pure white bg for icon
                            width: '64px',
                            height: '64px',
                            borderRadius: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.75rem',
                            marginBottom: '1.5rem',
                            boxShadow: `0 10px 20px -5px rgba(0,0,0,0.2)`
                        }}
                    >
                        {icon}
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 className="category-block-title" style={{
                            color: 'white',
                            fontSize: '1.35rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            lineHeight: '1.3',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            {title}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: '500' }}>
                            World-class events
                        </p>
                    </div>

                    <div className="category-meta" style={{
                        marginTop: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: `1px solid rgba(255,255,255,0.2)`,
                        paddingTop: '1.25rem'
                    }}>
                        <span
                            className="category-count"
                            style={{
                                color: themeColor,
                                fontWeight: '700',
                                background: 'white', // Creating a clean pill
                                padding: '0.35rem 0.85rem',
                                borderRadius: '99px',
                                fontSize: '0.8rem',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                        >
                            {events.length} Events
                        </span>

                        <motion.div
                            className="category-action"
                            style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}
                            whileHover={{ x: 3 }}
                        >
                            <span>Explore</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default CategoryCard;
