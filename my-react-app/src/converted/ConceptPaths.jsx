import React from 'react';

export default function ConceptPaths() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
      <div style="margin-top:14px;color:#475569;line-height:1.7">Resources & Example Problems</div>
      <ul>
        <li><strong>Resources:</strong> Recommended reads — "Introduction to Algorithms" chapters, online tutorials (freeCodeCamp, GeeksforGeeks), and problem sets on LeetCode.</li>
        <li><strong>Example problem (Arrays):</strong> Given an array, find the first repeating element — practice scanning and hash-based detection.</li>
        <li><strong>Example problem (Trees):</strong> Given a binary tree, return its level order traversal — practice BFS with a queue.</li>
        <li><strong>Next steps:</strong> After solving 5 problems in a path, take a short mock to test retention and speed.</li>
      </ul>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Concept Paths — SSLP</title>
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
    <h1>Concept Paths</h1>
    <div class="tag">Learn core concepts step-by-step with focused micro-lessons and quick quizzes.</div>
    <div class="card">
      <p>This page explains the concept path experience, where learning is organized into clear, progressive topics aligned to placement skills.</p>
      <p style="margin-top:14px;color:#475569;line-height:1.7">Each path helps you master one idea at a time, then apply it with short quizzes and example problems to strengthen your understanding.</p>
      <div class="pill">Core Feature</div>
      <ul>
        <li>Concept sequences that start with fundamentals and move toward real-world application.</li>
        <li>Micro-lessons with concise explanations for faster learning.</li>
        <li>Knowledge checks after each concept so you can verify retention instantly.</li>
        <li>Practice problems that reinforce the exact skill you just learned.</li>
        <li>Recommended next topics based on your progress and readiness.</li>
      </ul>
      <div style="margin-top:14px;color:#475569;line-height:1.7">Example concept paths:</div>
      <ul>
        <li><strong>Arrays → Two-pointer Patterns → Sliding Window</strong>: learn traversal basics, then apply to subarray and window problems with worked examples.</li>
        <li><strong>Trees → DFS/BFS → Tree DP</strong>: start with traversal, practice common problems, then progress to dynamic programming on trees.</li>
        <li><strong>Dynamic Programming</strong>: build from recursion and memoization to tabulation and common patterns (knapsack, LIS, DP on strings).</li>
      </ul>
    </div>
  </div>
</body>
</html>
` }} />
  );
}
