import React from 'react';
import './InsightsSection.css';

const insightsData = [
  { id: 1, date: 'May 15, 2024', title: '5 Essential Tips for Maintaining Spotless Commercial Floors', category: 'CLEANING TIPS', imageUrl: '/assets/insight_1.png' },
  { id: 2, date: 'May 10, 2024', title: 'How Modern Cleaning Machines Improve Productivity & Hygiene', category: 'INDUSTRY NEWS', imageUrl: '/assets/insight_2.png' },
  { id: 3, date: 'May 05, 2024', title: 'Choosing the Right Scrubber Dryer for Your Facility', category: 'EQUIPMENT GUIDE', imageUrl: '/assets/insight_1.png' }
];

const InsightsSection = () => {
  return (
    <section className="insights-section animate-on-scroll">
      <div className="container">
        <div className="section-header space-between">
          <div>
            <span className="subtitle text-red">INSIGHTS & RESOURCES</span>
            <h2 className="section-title">Stay Updated with Industry Insights</h2>
          </div>
          <a href="/blog" className="view-all-link text-red">View All Articles <span>&rarr;</span></a>
        </div>

        <div className="insights-grid">
          <div className="articles-grid">
            {insightsData.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-image">
                  {article.imageUrl ? (
                    <img src={article.imageUrl} alt={article.title} className="article-img" />
                  ) : (
                    <div className="article-placeholder-bg"></div>
                  )}
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-category text-red">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <a href={`/blog/${article.id}`} className="article-link text-red">Read More <span>&rarr;</span></a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="newsletter-card">
            <div className="newsletter-icon">✉️</div>
            <h3>Subscribe to our newsletter</h3>
            <p>Get the latest updates, product launches and industry insights delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">&rarr;</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
