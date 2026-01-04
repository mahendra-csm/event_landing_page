import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ConferenceCard = ({ title, themeColor = '#2563eb', link }) => {
    // Extract Logic: Try to find "4-Feb-26" or "Feb2026" patterns
    const dateInfo = useMemo(() => {
        // Try to match "4-Feb-26" or "14-Mar-26" format first
        const dayMonthMatch = title.match(/(\d{1,2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2,4})/i);
        
        if (dayMonthMatch) {
            const day = dayMonthMatch[1];
            const month = dayMonthMatch[2].toUpperCase();
            let year = dayMonthMatch[3];
            if (year.length === 2) {
                year = '20' + year;
            }
            return { day, month, year, exact: true };
        }
        
        // Fallback to original "Feb2026" pattern
        const monthMatch = title.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-zA-Z-]*20\d\d/i);
        const yearMatch = title.match(/20\d\d/);

        if (monthMatch) {
            const raw = monthMatch[0];
            const month = raw.substring(0, 3).toUpperCase();
            const year = raw.match(/20\d\d/)[0];
            return { day: '', month, year, exact: true };
        } else if (yearMatch) {
            return { day: '', month: '', year: yearMatch[0], exact: false };
        }
        return { day: '', month: '', year: '2026', exact: false };
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
                <span className="conf-month" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                    {dateInfo.month}{dateInfo.day ? ` ${dateInfo.day}` : ''}
                </span>
                <span className="conf-year" style={{
                    fontWeight: '700',
                    background: `${themeColor}15`,
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    marginTop: '0.15rem',
                    fontSize: '0.75rem'
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
                    onClick={link ? () => window.open(link, '_blank', 'noopener,noreferrer') : undefined}
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
