import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConferenceList from './ConferenceList';

const CategoryAccordion = ({ category, isExpanded, onToggle }) => {
    const { title, events } = category;
    const count = events.length;

    return (
        <div className="accordion-item">
            <button
                className="accordion-header"
                onClick={onToggle}
                aria-expanded={isExpanded}
            >
                <span className="category-title">
                    {title}
                    <span className="count-badge">{count}</span>
                </span>
                <span className={`icon ${isExpanded ? 'expanded' : ''}`}>
                    ▼
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="accordion-content">
                            <div className="conference-list-wrapper">
                                <ConferenceList events={events} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CategoryAccordion;
