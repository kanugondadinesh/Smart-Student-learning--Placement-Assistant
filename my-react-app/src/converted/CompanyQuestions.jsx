import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CompanyQuestions = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companyQuestions = {
    Amazon: [
      { q: 'Tell me about a time you solved a difficult problem with limited resources.', type: 'Behavioral', hint: 'Use STAR: Situation, Task, Action, Result — emphasize impact and quantifiable outcomes.' },
      { q: 'Explain how a hash table works and when you would use one.', type: 'Technical', hint: 'Describe buckets, hashing, collisions, and average O(1) lookup.' },
      { q: 'Design a system for handling high write throughput with low read latency.', type: 'Technical', hint: 'Consider partitioning, write-optimized storage, and read replicas.' },
      { q: 'How do you prioritize tasks when multiple stakeholders request urgent changes?', type: 'Behavioral', hint: 'Discuss trade-offs, communication, and choosing based on impact and deadlines.' }
    ],
    Google: [
      { q: 'Describe a data structure that supports insert, delete, and get-random in O(1).', type: 'Technical', hint: 'Combine an array and hash map: array for random access, map for indexes.' },
      { q: 'How do you keep yourself updated with new technologies?', type: 'HR', hint: 'Mention blogs, courses, reading RFCs, and hands-on projects.' },
      { q: 'Explain an algorithm to find strongly connected components in a directed graph.', type: 'Technical', hint: 'Tarjan or Kosaraju algorithms; explain stack usage or reversed graph pass.' },
      { q: 'Discuss a project where you optimized performance — what metrics did you improve?', type: 'Behavioral', hint: 'Give measurable improvements (latency, throughput, memory) and steps taken.' }
    ],
    Microsoft: [
      { q: 'Design a system for a simple note-taking app.', type: 'Technical', hint: 'Discuss frontend, backend API, persistence, authentication, and syncing.' },
      { q: 'What are the differences between SQL and NoSQL databases?', type: 'Technical', hint: 'Compare schemas, consistency models, and when to choose each.' },
      { q: 'How would you instrument an application to monitor performance and errors?', type: 'Technical', hint: 'Discuss metrics, logs, traces, and alerting with examples.' },
      { q: 'Describe a time you had to collaborate across teams to deliver a feature.', type: 'Behavioral', hint: 'Highlight communication, coordination, and conflict resolution.' }
    ],
    Infosys: [
      { q: 'Describe your understanding of the software development lifecycle.', type: 'HR', hint: 'Mention phases: requirements, design, implementation, testing, deployment, maintenance.' },
      { q: 'What are the key features of object-oriented programming?', type: 'Technical', hint: 'Discuss encapsulation, inheritance, polymorphism, and abstraction with examples.' },
      { q: 'How would you approach testing a large enterprise application?', type: 'Technical', hint: 'Mention unit, integration, end-to-end tests, and CI/CD pipelines.' },
      { q: 'Explain a situation where you improved a process at work or school.', type: 'Behavioral', hint: 'Describe the problem, your solution, and measurable impact.' }
    ]
  };

  return (
    <div className="page">
      <Link to="/" className="back">← Back to Dashboard</Link>
      <h1>Company Interview Questions</h1>
      <div className="tag">Pick a company and review role-specific interview questions.</div>

      <div className="card-light">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <strong>Select a company:</strong>
          {Object.keys(companyQuestions).map(company => (
            <button key={company} className="ai-btn" onClick={() => setSelectedCompany(company)}>{company}</button>
          ))}
        </div>
        
        <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }}>
          {!selectedCompany ? (
            <div className="card"><strong>Choose a company to load questions.</strong></div>
          ) : (
            companyQuestions[selectedCompany].map((item, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>{index + 1}. {item.q}</strong>
                  <span className="pill pill-purple">{item.type}</span>
                </div>
                {item.hint && <div className="small" style={{ color: '#475569' }}>Hint: {item.hint}</div>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyQuestions;