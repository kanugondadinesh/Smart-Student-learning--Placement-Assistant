import React from 'react';
import { Link } from 'react-router-dom';

const PersonalizedRoadmap = () => {
  return (
    <div className="page page-small">
      <Link to="/" className="back">← Back to Dashboard</Link>
      <h1>Personalized Roadmap</h1>
      <div className="tag">A guided, adaptive learning plan that evolves with your performance and placement goals.</div>
      
      <div className="card-light">
        <p>This page explains how the platform builds a student-specific roadmap by combining concept mastery, performance feedback, and placement milestone planning.</p>
        <p style={{ marginTop: '14px', color: '#475569', lineHeight: 1.7 }}>
          The roadmap is designed to keep learning focused, with clear daily actions, weekly review points, and a sequence of topics aligned to your target placement goals.
        </p>
        <div className="pill pill-purple">Core Feature</div>
        
        <ul style={{ marginTop: '18px', paddingLeft: '20px', color: '#475569' }}>
          <li style={{ marginTop: '10px' }}>Daily learning recommendations based on strength/weakness analysis.</li>
          <li style={{ marginTop: '10px' }}>Weekly checkpoints with revision prompts and concept refreshers.</li>
          <li style={{ marginTop: '10px' }}>Priority tasks for coding practice, aptitude drills, and interview readiness.</li>
          <li style={{ marginTop: '10px' }}>Milestone tracking for core skills, mock interviews, and readiness scores.</li>
          <li style={{ marginTop: '10px' }}>Guided transition from fundamentals to advanced placement topics.</li>
        </ul>
        <div style={{ marginTop: '12px', color: '#475569' }}>
          <strong>Sample 4-week starter roadmap:</strong>
          <ol style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li><strong>Week 1:</strong> Basics review — arrays, loops, basic aptitude practice (20–30 mins/day).</li>
            <li><strong>Week 2:</strong> Data structures — linked lists, stacks, queues; medium difficulty problems (45–60 mins/day).</li>
            <li><strong>Week 3:</strong> Algorithms & patterns — sorting, two-pointers, recursion; start timed mocks twice a week.</li>
            <li><strong>Week 4:</strong> Mock interviews, behavioral practice, and company-specific question sets; revise weak topics.</li>
          </ol>
        </div>
        <div style={{ marginTop: '12px', color: '#475569' }}>
          <strong>Sample 8-week roadmap (gradual):</strong>
          <ol style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li><strong>Weeks 1–2:</strong> Fundamentals: arrays, strings, basic aptitude.</li>
            <li><strong>Weeks 3–4:</strong> Core DSA: linked lists, stacks, queues, basic trees.</li>
            <li><strong>Weeks 5–6:</strong> Algorithms & patterns: graphs, DP fundamentals, sorting/searching suites.</li>
            <li><strong>Weeks 7–8:</strong> Intensive mock tests, company questions, and resume + behavioral prep.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRoadmap;