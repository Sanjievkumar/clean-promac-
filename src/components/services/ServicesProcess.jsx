import React, { useEffect, useRef, useState } from 'react';
import './ServicesProcess.css';

const processSteps = [
  { id: '01', title: 'Discover', desc: 'We understand your needs, challenges, and objectives.', x: 10, y: 50 },
  { id: '02', title: 'Diagnose', desc: 'In-depth assessment of people, processes, and environments.', x: 30, y: 30 },
  { id: '03', title: 'Design', desc: 'We create a tailored strategy and action plan.', x: 50, y: 70 },
  { id: '04', title: 'Deliver', desc: 'Implementation support and team enablement.', x: 70, y: 30 },
  { id: '05', title: 'Drive Impact', desc: 'Measure, optimize, and continuously improve.', x: 90, y: 50 }
];

const ServicesProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-process section" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header text-center animate-on-scroll">
          <div className="section-subtitle">OUR PROCESS</div>
          <h2 className="section-title">
            A Proven Path to<br/>
            <span className="text-red">Cleaner, Smarter</span> Spaces.
          </h2>
        </div>

        <div className="process-timeline-wrapper">
          {/* The wavy connecting line */}
          <div className="process-svg-line">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 0,50 C 15,50 20,30 30,30 C 40,30 40,70 50,70 C 60,70 60,30 70,30 C 80,30 85,50 100,50" 
                fill="none" 
                stroke="var(--color-gray-200)" 
                strokeWidth="0.5" 
                strokeDasharray="1 1"
                className={`timeline-path ${isVisible ? 'draw-path' : ''}`}
              />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="process-nodes">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`process-node-wrapper ${isVisible ? 'animate-node' : ''}`}
                style={{ 
                  left: `${step.x}%`, 
                  top: `${step.y}%`,
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className={`process-node ${index === 0 ? 'active' : ''}`}>
                  {step.id}
                </div>
                <div className="process-node-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesProcess;
