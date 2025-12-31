import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ConferenceCard = ({ title, themeColor = '#2563eb' }) => {
    // Extract Logic: Try to find "Feb2026" or similar patterns
    const dateInfo = useMemo(() => {
        const monthMatch = title.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-zA-Z-]*20\d\d/i);
        const yearMatch = title.match(/20\d\d/);

        if (monthMatch) {
            // content like "Feb2026"
            const raw = monthMatch[0];
            const month = raw.substring(0, 3).toUpperCase();
            const year = raw.match(/20\d\d/)[0];
            return { month, year, exact: true };
        } else if (yearMatch) {
            return { month: '', year: yearMatch[0], exact: false };
        }
        return { month: '', year: '2026', exact: false };
    }, [title]);

    // Clean title for display (optional: remove the date code from the end if desired, but keeping it full is safer for now)
    // const displayTitle = title.replace(/-?\s?IC-.*$/, ''); 

    return (
        <motion.div
            className="conference-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                x: 6,
                backgroundColor: `${themeColor}08`,
                borderLeft: `4px solid ${themeColor}`
            }}
            transition={{ duration: 0.2 }}
            style={{
                borderLeft: `4px solid transparent`,
                background: `linear-gradient(90deg, #ffffff 0%, ${themeColor}05 100%)`
            }}
        >
            <div className="conf-date-badge" style={{ color: themeColor, borderColor: `${themeColor}30` }}>
                <span className="conf-month">{dateInfo.month}</span>
                <span className="conf-year" style={{
                    fontWeight: '700',
                    background: `${themeColor}15`,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    marginTop: '0.25rem'
                }}>
                    {dateInfo.year}
                </span>
            </div>

            <div className="conf-content">
                <h3 className="conf-title">{title}</h3>
                <div className="conf-meta">
                    <span className="conf-tag">International</span>
                    <span className="conf-tag">Conference</span>
                </div>
            </div>

            <div className="conf-action">
                <button
                    className="btn-row-action"
                    style={{ color: themeColor, borderColor: themeColor }}
                >
                    Register
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};

export default ConferenceCard;
