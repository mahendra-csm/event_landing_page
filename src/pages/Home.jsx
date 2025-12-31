import React from 'react';
import { Helmet } from 'react-helmet-async';
import { conferencesData } from '../data/conferences';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>OneGrasp Events - Global Conference Directory</title>
                <meta name="description" content="Discover premier academic and professional conferences globally. Browse events in Education, Science, Tech, and more." />
                <link rel="canonical" href="/" />
            </Helmet>

            <main>
                <Hero />

                <section className="container categories-section" aria-label="Conference Categories">
                    <div className="category-grid">
                        {conferencesData.map((category) => (
                            <CategoryCard
                                key={category.id}
                                {...category}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;

