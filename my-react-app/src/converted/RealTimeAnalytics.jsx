import React from 'react';

export default function RealTimeAnalytics() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
      <div style="margin-top:14px;color:#475569;line-height:1.7">What to do with analytics:</div>
      <ul>
        <li><strong>Low skill score:</strong> add targeted micro-lessons and repeat relevant quizzes until accuracy improves.</li>
        <li><strong>Declining velocity:</strong> reduce daily scope and focus on high-impact topics for short bursts.</li>
        <li><strong>Error patterns:</strong> create focused drills for recurring mistake types (edge cases, off-by-one, input parsing).</li>
        <li><strong>Interview readiness low:</strong> schedule mock interviews and prioritize communication & problem explanation practice.</li>
      </ul>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Real-time Analytics — SSLP</title>
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
    <h1>Real-time Analytics</h1>
    <div class="tag">Track progress with interactive dashboards, skill heatmaps, and placement readiness insights.</div>
    <div class="card">
      <p>This analytics page shows how the platform monitors your preparation in real time and turns your practice into clear next-step guidance.</p>
      <p style="margin-top:14px;color:#475569;line-height:1.7">Use analytics to identify which topics need review, which skills are improving fastest, and how your readiness score changes as you complete practice sessions.</p>
      <div class="pill">Core Feature</div>
      <ul>
        <li>Skill heatmaps that highlight strengths and gaps across aptitude, reasoning, and coding.</li>
        <li>Performance graphs for quizzes, coding practice, and mock interview rounds.</li>
        <li>Roadmap completion rates and trend lines to show your progress pace.</li>
        <li>Actionable suggestions for focused study and review.</li>
        <li>Insights into skill growth, confidence, and placement readiness.</li>
      </ul>
      <div style="margin-top:14px;color:#475569;line-height:1.7">Example metrics you will see:</div>
      <ul>
        <li><strong>Skill Score:</strong> a normalized score (0–100) computed from quiz accuracy, mock test performance, and practice frequency.</li>
        <li><strong>Weekly Velocity:</strong> topics completed per week to track momentum and adjust the roadmap.</li>
        <li><strong>Error Patterns:</strong> common mistake categories (off-by-one, edge cases) to prioritize targeted practice.</li>
        <li><strong>Interview Readiness:</strong> combined indicator using mock interviews, communication score, and coding accuracy.</li>
      </ul>
    </div>
  </div>
</body>
</html>
` }} />
  );
}
