import React from 'react';
import useCountUp from '../hooks/useCountUp';
import './AboutStats.css';

const StatBox = ({ icon, end, suffix, label, colorClass }) => {
  const { count, countRef } = useCountUp(end, 2000);
  
  // Format number with commas
  const formattedCount = count.toLocaleString();

  return (
    <div className="about-stat-box" ref={countRef}>
      <span className={`stat-icon ${colorClass}`}>{icon}</span>
      <div className="stat-value">{formattedCount}{suffix}</div>
      <div className="stat-label" dangerouslySetInnerHTML={{ __html: label }}></div>
    </div>
  );
};

const AboutStats = () => {
  return (
    <section className="about-stats-section animate-on-scroll">
      <div className="container">
        <div className="about-stats-container">
          <StatBox icon="🌐" end={20} suffix="+" label="Global Brands<br/>Partnered" colorClass="red-icon" />
          <StatBox icon="⚙️" end={25000} suffix="+" label="Machines<br/>Deployed" colorClass="blue-icon" />
          <StatBox icon="👥" end={1000} suffix="+" label="Clients<br/>Served" colorClass="green-icon" />
          <StatBox icon="🎧" end={24} suffix="/7" label="Support<br/>Always Available" colorClass="orange-icon" />
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
