import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeModule, setActiveModule] = useState('ai');

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'You', text: chatInput }]);
    const userInput = chatInput.toLowerCase();
    setChatInput('');

    setTimeout(() => {
      let aiResponse = 'Start with a quick review of your current weak topics, then practice one coding problem and one aptitude question.';
      
      if (userInput.includes('study plan') || userInput.includes('plan')) {
        aiResponse = 'Create a focused 4-week plan: Week 1 - core concepts and revision, Week 2 - aptitude & reasoning practice, Week 3 - coding problems and data structures, Week 4 - mock interviews and company-specific preparation.';
      } else if (userInput.includes('amazon') || userInput.includes('google') || userInput.includes('microsoft') || userInput.includes('infosys') || userInput.includes('company')) {
        aiResponse = 'For company interview prep, focus on data structures, problem-solving patterns, and clear behavioral responses. Review common questions, explain your thought process, and practice with mock rounds.';
      } else if (userInput.includes('arrays') || userInput.includes('linked list') || userInput.includes('stack') || userInput.includes('queue') || userInput.includes('tree')) {
        aiResponse = 'Arrays are fundamental for placement coding. Practice traversal, two-pointer patterns, sorting, and subarray problems. For linked lists, focus on reversal, cycle detection, and merge operations.';
      } else if (userInput.includes('today') || userInput.includes('now') || userInput.includes('practice')) {
        aiResponse = 'Today, solve one aptitude question, one coding problem, and one short concept review. Review any mistakes immediately and note the topic for your next practice session.';
      }

      setMessages(prev => [...prev, { sender: 'AI', text: aiResponse }]);
    }, 700);
  };

  const moduleData = {
    ai: {
      title: "AI Learning Module",
      desc: "AI builds an adaptive study plan and tracks your progress across topics.",
      items: ["Daily learning tasks with concept-based guidance.", "Weekly revision checkpoints and focus recommendations.", "Performance feedback to prioritize weak topics.", "Extra practice links for core concepts and placement skills."]
    },
    aptitude: {
      title: "Aptitude, Reasoning & Technical",
      desc: "Build speed and accuracy with timed practice and real placement-style problems.",
      items: ["Quantitative aptitude questions with step-by-step solutions.", "Logical reasoning tests and pattern-based exercises.", "Technical drills for data structures and algorithm thinking.", "Company-specific question patterns for placement rounds."]
    },
    comm: {
      title: "Communication Skills",
      desc: "Prepare for interviews with answer structure, speech clarity, and HR question practice.",
      items: ["Mock interview prompts for confidence and response strength.", "Resume tips to highlight projects and achievements clearly.", "Speech feedback for pronunciation, pacing, and clarity.", "Behavioral question frameworks for placement rounds."]
    },
    java: {
      title: "Java & Full Stack",
      desc: "Learn Java core concepts, DSA fundamentals, and web development workflows for complete full-stack readiness.",
      items: ["Java fundamentals: OOP, collections, exception handling, and coding best practices.", "DSA mastery: arrays, linked lists, stacks, queues, trees, graphs, sorting, and search algorithms.", "Backend basics: REST APIs, server-side logic, database integration, and Java frameworks.", "Full-stack flow: frontend forms, backend services, and deployment-ready web apps.", "Placement-ready projects: build web applications and demonstrate practical skills."]
    },
    study: {
      title: "Study Resources",
      desc: "Use curated resources and topic summaries to strengthen your understanding across every module.",
      items: ["Topic summaries for quick revision.", "Guided practice prompts and study strategies.", "Helpful resource links to deepen your learning.", "Example-driven content for faster concept retention."]
    }
  };

  // Sample interview questions and quiz samples to enrich existing sections
  const interviewQuestions = [
    'Tell me about a time you faced a technical challenge and how you solved it.',
    'Explain the difference between an array and a linked list. When would you use each?',
    'Design an algorithm to detect a cycle in a directed graph.',
    'How does quicksort work? Explain average and worst-case complexity.',
    'Describe a REST API and how you would design one for a todo app.',
    'Explain dynamic programming and give an example problem where it applies.',
    'How do you handle merge conflicts in Git? Give a real-world example.',
    'What is a race condition and how can it be prevented?'
  ];

  const sampleQuizQuestions = [
    { q: 'What is the time complexity of binary search?', a: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], correct: 1 },
    { q: 'Which data structure uses LIFO ordering?', a: ['Queue', 'Stack', 'Heap', 'Graph'], correct: 1 },
    { q: 'Which sorting algorithm is stable?', a: ['QuickSort', 'HeapSort', 'MergeSort', 'SelectionSort'], correct: 2 },
    { q: 'Which HTML tag is used for links?', a: ['<link>', '<a>', '<href>', '<url>'], correct: 1 },
    { q: 'Which HTTP method is idempotent?', a: ['POST', 'PUT', 'DELETE', 'PATCH'], correct: 2 }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="page">
      <header>
        <div className="brand">SSLP</div>
        <div>
          <h1>Smart Student Learning & Placement Assistant</h1>
          <div className="tag">AI-driven learning, mock interviews, and placement readiness — built for students who want results.</div>
        </div>
      </header>

      <div className="layout">
        <main>
          {/* Hero */}
          <section className="hero">
            <div className="hero-left">
              <h2 style={{ fontFamily: 'Poppins', margin: 0, fontSize: '28px' }}>From confusion to confidence — a complete path to placement success</h2>
              <p style={{ marginTop: '10px', color: '#475569' }}>Personalized roadmaps, adaptive practice, real-time analytics, and AI mock interviews — all in one student-first platform.</p>

              <div className="cta">
                <button className="btn-primary" onClick={() => setIsChatOpen(true)}>Talk to AI Mentor</button>
                <button className="btn-ghost" onClick={() => scrollToSection('modules')}>Explore Modules</button>
              </div>
              <p style={{ marginTop: '18px', color: '#475569', maxWidth: '520px', lineHeight: 1.7 }}>Build a complete placement learning journey with core concept mastery, company-specific interview preparation, weekly skill checks, and progress reviews that keep your preparation on track.</p>
              <div className="stats" aria-hidden="true">
                <div className="stat">
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>+85%</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>Avg placement improvement</div>
                </div>
                <div className="stat">
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>1200+</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>Practice tests</div>
                </div>
                <div className="stat">
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>24/7</div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>AI guidance</div>
                </div>
              </div>
            </div>

            <div style={{ width: '40%' }}>
              <div className="hero-visual">
                <div className="hero-preview">
                  <div className="preview-card">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Dashboard workspace" />
                    <span>Live Dashboard</span>
                  </div>
                  <div className="preview-card">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" alt="Student coding" />
                    <span>Study Insights</span>
                  </div>
                  <div className="preview-card" style={{ gridColumn: '1/-1' }}>
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Best student overview" />
                    <span>Best Student Metrics</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                <div className="card" style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontWeight: 700 }}>Adaptive Roadmaps</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '6px' }}>Tailored weekly plans based on your strengths.</div>
                  <div className="small" style={{ marginTop: '8px', color: '#475569' }}>Built around your target companies, topics to revise, and current completion pace.</div>
                </div>
                <div className="card" style={{ width: '120px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700 }}>Mock Interviews</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '6px' }}>AI feedback on answers & speech.</div>
                  <div className="small" style={{ marginTop: '8px', color: '#475569' }}>Practice questions for HR, technical, and company-specific interview rounds.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="card" style={{ marginTop: '18px' }}>
            <div className="section-title">
              <h3>Core Features</h3>
              <div className="pill">Student-first</div>
            </div>
            <div className="feature-grid">
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>🧭</div>
                <h4>Personalized Roadmaps</h4>
                <div className="small">AI builds a study plan that adapts as you progress.</div>
                <div className="small" style={{ marginTop: '6px', color: '#475569' }}>See your weekly learning targets and review the skills you need for upcoming placement rounds.</div>
              </div>
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>📊</div>
                <h4>Real-time Analytics</h4>
                <div className="small">Visualize strengths, weak topics, and progress trends.</div>
                <div className="small" style={{ marginTop: '6px', color: '#475569' }}>Understand your growth across aptitude, coding, and interview readiness in one place.</div>
              </div>
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>🧪</div>
                <h4>Smart Mock Tests</h4>
                <div className="small">Timed tests with detailed solutions and improvement tips.</div>
              </div>
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>🗣️</div>
                <h4>AI Interview Coach</h4>
                <div className="small">Practice HR and technical interviews with instant feedback.</div>
              </div>
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>💡</div>
                <h4>Concept Paths</h4>
                <div className="small">Learn by concept with micro-lessons and quizzes.</div>
              </div>
              <div className="feature" onClick={() => navigate('/roadmap')}>
                <div style={{ fontSize: '28px' }}>🏆</div>
                <h4>Leaderboard & Rewards</h4>
                <div className="small">Gamified progress to keep motivation high.</div>
              </div>
            </div>
          </section>

          {/* Modules & Deep Dive */}
          <section id="modules" className="card" style={{ marginTop: '18px' }}>
            <div className="section-title">
              <h3>Modules — Deep Dive</h3>
              <div className="pill">Comprehensive</div>
            </div>
            <div className="modules">
              <div className="module-list">
                <div className={`module-card ${activeModule === 'ai' ? 'active' : ''}`} onClick={() => setActiveModule('ai')}>
                  <h4>AI Learning Module</h4>
                  <p className="small">Adaptive schedules, concept-based learning paths, and progress reports.</p>
                  {activeModule === 'ai' && <div className="pill pill-purple">Active</div>}
                </div>
                <div className={`module-card ${activeModule === 'aptitude' ? 'active' : ''}`} onClick={() => setActiveModule('aptitude')}>
                  <h4>Aptitude, Reasoning & Technical</h4>
                  <p className="small">Timed drills, problem solving, and company-specific question sets.</p>
                  {activeModule === 'aptitude' && <div className="pill pill-purple">Active</div>}
                </div>
                <div className={`module-card ${activeModule === 'comm' ? 'active' : ''}`} onClick={() => setActiveModule('comm')}>
                  <h4>Communication Skills</h4>
                  <p className="small">Mock interviews, resume tips, speech feedback, and HR prep.</p>
                  {activeModule === 'comm' && <div className="pill pill-purple">Active</div>}
                </div>
                <div className={`module-card ${activeModule === 'java' ? 'active' : ''}`} onClick={() => setActiveModule('java')}>
                  <h4>Java & Full Stack</h4>
                  <p className="small">Java core concepts, DSA mastery, backend APIs, frontend integration, and web app projects.</p>
                  {activeModule === 'java' && <div className="pill pill-purple">Active</div>}
                </div>
                <div className={`module-card ${activeModule === 'study' ? 'active' : ''}`} onClick={() => setActiveModule('study')}>
                  <h4>Study Resources</h4>
                  <p className="small">Extra study aids, resource links, and concept summaries for deeper learning.</p>
                  {activeModule === 'study' && <div className="pill pill-purple">Active</div>}
                </div>
              </div>
              <div className="module-info">
                <h4>{moduleData[activeModule].title}</h4>
                <p className="small">{moduleData[activeModule].desc}</p>
                <ul className="module-detail-list">
                  {moduleData[activeModule].items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }} className="card">
                <h4>Communication Skills</h4>
                <p className="small">AI mock interviews, resume builder, speech & pronunciation feedback, and HR tips.</p>
                <ul style={{ marginTop: '12px', paddingLeft: '18px', color: '#475569', lineHeight: 1.75 }}>
                  <li>Answer structuring tips for common HR questions.</li>
                  <li>Resume review pointers to highlight achievements clearly.</li>
                  <li>Clear expression and confidence-building practice.</li>
                </ul>
              </div>
              <div style={{ width: '320px' }} className="card">
                <h4>Study Resources</h4>
                <p className="small">Curated learning tools, concept summaries, and example-driven content to support each study session.</p>
                <ul style={{ marginTop: '12px', paddingLeft: '18px', color: '#475569', lineHeight: 1.75 }}>
                  <li>Topic summaries for fast revision.</li>
                  <li>Practice tips to improve retention.</li>
                  <li>Resource links and example prompts for self-study.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Practice & Quiz */}
          <section className="card" style={{ marginTop: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Interactive Practice</h3>
              <div className="pill">Try now</div>
            </div>
            <p style={{ marginTop: '12px', color: '#475569', maxWidth: '720px', lineHeight: 1.7 }}>Practice core topics with quizzes, instant answer feedback, and guided follow-ups so you learn while you solve, not just when you study.</p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '320px' }} className="card card-light" style={{ margin: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>Quick Aptitude Drill</strong>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>3 questions generated from your current roadmap</div>
                  </div>
                  <button className="ai-btn" onClick={() => navigate('/quiz')}>Open Quiz Practice</button>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <div className="small">Click <strong>Open Quiz Practice</strong> to go to the dedicated quiz page for interactive practice.</div>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px' }}>Sample Questions</div>
                  <ul style={{ paddingLeft: '18px', color: '#475569' }}>
                    {sampleQuizQuestions.slice(0,3).map((q, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>
                        {q.q} <button className="btn-ghost" style={{ marginLeft: '8px' }} onClick={() => navigate('/quiz')}>Try</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ width: '320px' }} className="card">
                <h4>Progress Snapshot</h4>
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><div className="small">Aptitude</div><div className="small">78%</div></div>
                  <div style={{ height: '10px', background: '#eef3fb', borderRadius: '8px', marginTop: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}></div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}><div className="small">Coding</div><div className="small">65%</div></div>
                  <div style={{ height: '10px', background: '#eef3fb', borderRadius: '8px', marginTop: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #06b6d4, #7c3aed)' }}></div>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  <button className="ai-btn" style={{ width: '100%' }} onClick={() => setIsChatOpen(true)}>Ask AI Mentor for a plan</button>
                  <div className="small" style={{ marginTop: '8px', color: '#475569' }}>Need a focused study strategy? Ask for a personalized weekly plan, concept summary, or interview prep checklist.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials & Social Proof */}
          <section className="card" style={{ marginTop: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>What students say</h3>
              <div className="pill">Real results</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div className="card" style={{ flex: 1, minWidth: '240px' }}>
                <strong>Priya R.</strong>
                <div className="small" style={{ marginTop: '6px' }}>"The adaptive roadmap made my preparation focused — I improved my mock scores by 40% in 6 weeks."</div>
              </div>
              <div className="card" style={{ flex: 1, minWidth: '240px' }}>
                <strong>Arjun K.</strong>
                <div className="small" style={{ marginTop: '6px' }}>"AI interview feedback helped me fix my communication gaps before the final round."</div>
              </div>
              <div className="card" style={{ flex: 1, minWidth: '240px' }}>
                <strong>Sana M.</strong>
                <div className="small" style={{ marginTop: '6px' }}>"Company-specific question sets were a game-changer for my placement drive."</div>
              </div>
            </div>
          </section>

          {/* Best Student Showcase */}
          <section className="card" style={{ marginTop: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Best Student Showcase</h3>
              <div className="pill">Top performers</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '12px', marginTop: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', borderRadius: '16px', background: 'linear-gradient(180deg,#fff,#f8fbff)', boxShadow: '0 10px 30px rgba(12,18,30,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(12,18,30,0.1)' }}></div>
                <div>
                  <strong>Neha R.</strong>
                  <div className="small">80% faster DSA progress with Java projects.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', borderRadius: '16px', background: 'linear-gradient(180deg,#fff,#f8fbff)', boxShadow: '0 10px 30px rgba(12,18,30,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(12,18,30,0.1)' }}></div>
                <div>
                  <strong>Arjun K.</strong>
                  <div className="small">Built a full-stack app and cleared campus placement.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', borderRadius: '16px', background: 'linear-gradient(180deg,#fff,#f8fbff)', boxShadow: '0 10px 30px rgba(12,18,30,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(12,18,30,0.1)' }}></div>
                <div>
                  <strong>Sana M.</strong>
                  <div className="small">Mastered interview communication and mock test success.</div>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Sidebar */}
        <aside>
          <div className="card">
            <h4>Get Started</h4>
            <p className="small" style={{ marginTop: '8px' }}>Create your free student profile and get a 7-day personalized roadmap.</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button className="ai-btn" style={{ flex: 1 }} onClick={() => navigate('/signup')}>Create Profile</button>
              <button className="btn-ghost" onClick={() => scrollToSection('modules')}>Learn More</button>
            </div>
          </div>

          <div className="card" style={{ marginTop: '14px' }}>
            <h4>Leaderboard</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '10px', background: 'linear-gradient(180deg,#fff,#fbfdff)' }}>
                <div><strong>1. Rohan</strong><div className="small">Aptitude champ</div></div><div>980 pts</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '10px', background: 'linear-gradient(180deg,#fff,#fbfdff)' }}>
                <div><strong>2. Meera</strong><div className="small">Coding streak</div></div><div>920 pts</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '10px', background: 'linear-gradient(180deg,#fff,#fbfdff)' }}>
                <div><strong>3. Vikram</strong><div className="small">Interview ace</div></div><div>880 pts</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '14px' }}>
            <h4>AI Tools</h4>
            <ol style={{ paddingLeft: '18px', marginTop: '8px', fontSize: '14px' }}>
              <li style={{ marginBottom: '6px' }}><strong>AI Mentor Chat</strong> — ask for study plans, summaries, or interview tips.</li>
              <li style={{ marginBottom: '6px' }}><strong>Quiz Generator</strong> — instant MCQs tailored to your roadmap.</li>
              <li style={{ marginBottom: '6px' }}><strong>Mock Interview</strong> — practice and get speech & answer feedback.</li>
              <li style={{ marginBottom: '6px' }}><strong>Company Interview Questions</strong> — role-specific questions for placement rounds.</li>
            </ol>
            <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
              <button className="ai-btn" style={{ width: '100%' }} onClick={() => setIsChatOpen(true)}>Open AI Mentor</button>
              <button className="ai-btn" style={{ width: '100%', background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} onClick={() => navigate('/company-questions')}>Interview Questions</button>
            </div>
            
            <div style={{ marginTop: '12px' }}>
              <div style={{ fontWeight: 700, marginBottom: '8px' }}>Sample Interview Questions</div>
              <ul style={{ paddingLeft: '18px', color: '#475569' }}>
                {interviewQuestions.slice(0,6).map((iq, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{iq}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <footer style={{ marginTop: '22px', padding: '18px', borderRadius: '12px', background: 'linear-gradient(180deg,#fff,#fbfdff)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong>Smart Student Learning & Placement Assistant</strong>
          <div className="small" style={{ marginTop: '6px' }}>AI-driven learning · Mock interviews · Placement readiness</div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-ghost" onClick={() => navigate('/contact')}>Contact</button>
          <button className="btn-ghost" onClick={() => navigate('/signup')}>Sign up</button>
        </div>
      </footer>

      {/* Chat widget */}
      <button className="chat-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>AI Mentor</button>
      
      <div className="chat-panel" style={{ display: isChatOpen ? 'flex' : 'none' }}>
        <div className="chat-header">AI Mentor</div>
        <div className="chat-body" id="chatBody">
          {messages.map((msg, idx) => (
            <div key={idx} style={{ margin: '8px 0', fontWeight: msg.sender === 'You' ? 700 : 400, color: msg.sender === 'AI' ? '#0b1220' : 'inherit' }}>
              {msg.sender}: {msg.text}
            </div>
          ))}
        </div>
        <div className="small" style={{ padding: '0 12px 12px', color: '#475569', lineHeight: 1.6 }}>
          Try: "Give me a 7-day study plan", "Prepare for Amazon interview", "Help me revise arrays", "What should I practice today?"
        </div>
        <div className="chat-input">
          <input 
            value={chatInput} 
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
            placeholder="Ask for a study plan, mock interview tips, or a quick quiz..." 
          />
          <button onClick={handleSendChat}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;