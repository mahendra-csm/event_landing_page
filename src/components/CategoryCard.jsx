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
    'business-economics': '#0066CC', // Vibrant Royal Blue - Professional & Dynamic
    'health-medical-sciences': '#E91E63', // Hot Pink - Modern Medical
    'engineering-technology': '#FF6B35', // Vibrant Orange - Tech Energy
    'education': '#7C3AED', // Vivid Purple - Knowledge & Innovation
    'physical-life-sciences': '#10B981', // Bright Emerald - Life & Growth
    'social-science-humanities': '#8B5CF6', // Rich Violet - Culture & Creativity
    'agriculture-food-sciences': '#84CC16', // Lime Green - Fresh & Natural
    'interdisciplinary-emerging-fields': '#EC4899', // Bright Magenta - Innovation
    'mathematics-data-science': '#3B82F6', // Electric Blue - Logic & Tech
    'arts-culture-communication': '#F59E0B', // Golden Amber - Creative Expression
    'sports-physical-education': '#14B8A6', // Vibrant Cyan - Energy & Vitality
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
                    // Vibrant Premium Gradient
                    background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}f0 60%, ${themeColor}e8 100%)`,
                    boxShadow: `0 10px 25px -8px ${themeColor}70`,
                    position: 'relative',
                    overflow: 'hidden',
                    border: `1px solid ${themeColor}40`,
                    backdropFilter: 'blur(10px)'
                }}
            >
                {/* Subtle Glow Effect */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-40px',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)',
                        opacity: '0.6',
                        filter: 'blur(30px)',
                        zIndex: 0
                    }}
                />

                <div className="category-content-wrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

                    {/* Premium Icon Bubble with Golden Accent */}
                    <div
                        className="category-icon-wrapper"
                        style={{
                            color: themeColor,
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', // Subtle gradient for depth
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            marginBottom: '0.5rem',
                            boxShadow: `0 8px 16px -6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)`,
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}
                    >
                        {icon}
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 className="category-block-title" style={{
                            color: '#ffffff',
                            fontSize: '1rem',
                            fontWeight: '700',
                            marginBottom: '0.25rem',
                            lineHeight: '1.3',
                            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            letterSpacing: '-0.02em'
                        }}>
                            {title}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.75rem', fontWeight: '500', letterSpacing: '0.01em', margin: 0 }}>
                            World-class events
                        </p>
                    </div>

                    <div className="category-meta" style={{
                        marginTop: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: `1px solid rgba(255,255,255,0.25)`,
                        paddingTop: '0.75rem'
                    }}>
                        <span
                            className="category-count"
                            style={{
                                color: themeColor,
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)', // Premium gradient pill
                                padding: '0.25rem 0.6rem',
                                borderRadius: '99px',
                                fontSize: '0.7rem',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)',
                                border: '1px solid rgba(255,255,255,0.4)',
                                letterSpacing: '0.02em'
                            }}
                        >
                            {events.length} Events
                        </span>

                        <motion.div
                            className="category-action"
                            style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', letterSpacing: '0.01em', fontSize: '0.75rem' }}
                            whileHover={{ x: 3 }}
                        >
                            <span>Explore</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
