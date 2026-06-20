import React from 'react';

export default function SmartMockTests() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
      <div style="margin-top:14px;color:#475569;line-height:1.7">Scoring Guide & Next Steps</div>
      <ul>
        <li><strong>Score &gt; 80%:</strong> Focus on advanced patterns and speed — try harder timed mocks.</li>
        <li><strong>50–80%:</strong> Identify weak topics from the report, do targeted practice, and re-run a focused mock.</li>
        <li><strong>&lt; 50%:</strong> Go back to micro-lessons for basics and solve easy problems until concepts are stable.</li>
        <li><strong>After each mock:</strong> Review mistakes immediately and add 3 targeted practice tasks to your roadmap.</li>
      </ul>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Smart Mock Tests — SSLP</title>
<style>
  :root{--bg:#071029;--card:#fff;--text:#0b1220;--muted:#475569;--grad-a:#7c3aed;--grad-b:#06b6d4;}
  *{box-sizing:border-box}
  body{margin:0;font-family:Inter,system-ui,Arial;background:linear-gradient(180deg,#071029,#041226);color:var(--text);min-height:100vh;}
  .page{max-width:980px;margin:28px auto;padding:28px;border-radius:24px;background:#fff;}
  .back{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:12px;border:1px solid rgba(11,16,32,0.08);background:#f8fafc;text-decoration:none;color:var(--text);font-weight:700;}
  h1{margin-top:18px;font-size:32px}
  .tag{color:var(--muted);margin-top:10px}
  .card{background:#f8fafc;border-radius:20px;padding:24px;box-shadow:0 18px 40px rgba(2,6,23,0.08);margin-top:24px;}
  .pill{display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(124,58,237,0.08);color:#4f46e5;font-size:0.9rem;margin-top:14px}
  ul{margin-top:18px;padding-left:20px;color:var(--muted)}
  li{margin-top:10px}
</style>
</head>
<body>
  <div class="page">
    <a class="back" href="mini_project.html">← Back to Dashboard</a>
    <h1>Smart Mock Tests</h1>
    <div class="tag">Practice tests designed to mirror placement tests, with instant feedback and solution breakdowns.</div>
    <div class="card">
      <p>This page explains how smart mock tests mirror real placement exams and help you learn from every practice session.</p>
      <p style="margin-top:14px;color:#475569;line-height:1.7">Each test is designed with time limits, detailed feedback, and follow-up learning tips so that you improve both speed and accuracy.</p>
      <div class="pill">Core Feature</div>
      <ul>
        <li>Timed section-based quizzes covering aptitude, reasoning, verbal, and technical concepts.</li>
        <li>Detailed answer explanations, concept summaries, and improvement suggestions.</li>
        <li>Adaptive difficulty that adjusts based on your recent scores.</li>
        <li>Performance analysis to identify high-impact learning gaps.</li>
        <li>Guidance on how to convert mock test results into better study plans.</li>
      </ul>
      <div style="margin-top:14px;color:#475569;line-height:1.7">Sample mock test items (short):</div>
      <ul>
        <li>Quantitative: "If the sum of three consecutive integers is 48, what are the integers?"</li>
        <li>Reasoning: "Find the next term in the pattern: 2, 6, 12, 20, ?"</li>
        <li>Technical: "Write a function to check if a string is a palindrome (ignore spaces and case)."</li>
        <li>Verbal: "Choose the sentence with correct subject-verb agreement."</li>
        <li>Mixed: "Given an array of integers, return indices of two numbers that add up to target."</li>
      </ul>
    </div>
  </div>
</body>
</html>
` }} />
  );
}
