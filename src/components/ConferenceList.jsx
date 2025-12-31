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
            {events.map((event, index) => (
                <ConferenceCard key={`${index}-${event.substring(0, 10)}`} title={event} themeColor={themeColor} />
            ))}
        </div>
    );
};

export default ConferenceList;
