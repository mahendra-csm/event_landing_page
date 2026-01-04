import React from 'react';
import ConferenceCard from './ConferenceCard';

const ConferenceList = ({ events, themeColor }) => {
    if (!events || events.length === 0) {
        return (
            <div className="no-events">
                <p>No conferences available.</p>
            </div>
        );
    }

    return (
        <div className="conference-list">
            {events.map((event, index) => {
                const isObject = event && typeof event === 'object';
                const title = isObject ? event.title : event;
                const link = isObject ? event.link : undefined;

                return (
                    <ConferenceCard
                        key={`${index}-${title.substring(0, 10)}`}
                        title={title}
                        link={link}
                        themeColor={themeColor}
                    />
                );
            })}
        </div>
    );
};

export default ConferenceList;
