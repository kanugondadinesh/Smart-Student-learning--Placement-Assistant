import React from 'react';

export default function LeaderboardRewards() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Leaderboard & Rewards — SSLP</title>
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
    <h1>Leaderboard & Rewards</h1>
    <div class="tag">Stay motivated with points, streaks, and leaderboards that reward progress.</div>
    <div class="card">
      <p>This page explains how leaderboard tracking and rewards motivate consistent learning and help you build stronger placement habits.</p>
      <p style="margin-top:14px;color:#475569;line-height:1.7">Earning points, streaks, and badges encourages daily practice, and leaderboard feedback makes your progress easier to understand.</p>
      <div class="pill">Core Feature</div>
      <ul>
        <li>Points for completing quizzes, mock interviews, and learning milestones.</li>
        <li>Leaderboard position to compare progress against peers.</li>
        <li>Badges for streaks, topic mastery, and interview readiness.</li>
        <li>Reward guidance that shows the most effective next study actions.</li>
        <li>Improvement incentives that keep you focused on long-term preparation.</li>
      </ul>
      <div style="margin-top:14px;color:#475569;line-height:1.7">Badge examples:</div>
      <ul>
        <li><strong>Consistency Badge:</strong> 7-day practice streak.</li>
        <li><strong>DSA Master:</strong> Solve 50 DSA problems.</li>
        <li><strong>Interview Ready:</strong> Score &gt; 85% across two mock interviews.</li>
        <li><strong>Community Helper:</strong> Answer 10 peer questions on the forum.</li>
      </ul>
    </div>
  </div>
</body>
</html>
` }} />
  );
}
