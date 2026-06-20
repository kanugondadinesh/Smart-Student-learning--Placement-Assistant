import React from 'react';

export default function AiInterviewCoach() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>AI Interview Coach — SSLP</title>
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
    <h1>AI Interview Coach</h1>
    <div class="tag">Practice mock interviews, receive answer guidance, and improve communication skills.</div>
    <div class="card">
      <p>This page describes the AI interview coach and how it prepares you for both HR and technical rounds.</p>
      <p style="margin-top:14px;color:#475569;line-height:1.7">Practice answers, get feedback on your response structure, and learn what to say for common placement interview questions.</p>
      <div class="pill">Core Feature</div>
      <ul>
        <li>Mock interview scenarios for HR conversations, behavioral questions, and technical problem-solving.</li>
        <li>Answer evaluation with clear suggestions for improvement and stronger phrasing.</li>
        <li>Communication guidance for clarity, confidence, and effective delivery.</li>
        <li>Company-specific preparation for common placement interview patterns.</li>
        <li>Tips for following up on answers and handling tricky behavioral prompts.</li>
      </ul>
      <div style="margin-top:14px;color:#475569;line-height:1.7">Below are sample prompts and tips you can practice with the AI Interview Coach.</div>
      <ul>
        <li><strong>Behavioral prompt:</strong> "Describe a time you faced a tight deadline and how you managed it." — Tip: structure answers with Situation, Task, Action, Result (STAR).</li>
        <li><strong>Technical prompt:</strong> "Explain how you would reverse a linked list in place." — Tip: walk through the approach, edge cases, and complexity.</li>
        <li><strong>Communication tip:</strong> Keep answers concise (60–90 seconds for behavioral), emphasize impact, and summarise takeaways at the end.</li>
        <li><strong>Follow-up practice:</strong> Ask the coach to critique your recorded answer and provide three concrete improvements.</li>
      </ul>
      <div class="card" style="margin-top:18px">
        <h3>FAQ & Practice Schedule</h3>
        <ul>
          <li><strong>How often should I practice?</strong> Short daily practice (20–30 mins) with two focused mock interviews per week works well.</li>
          <li><strong>How to measure improvement?</strong> Track feedback trends: clarity score, structure score, and content accuracy over time.</li>
          <li><strong>Sample 2-week practice plan:</strong> Week 1 - 6 behavioral + 4 technical prompts; Week 2 - 8 technical + 4 mock interviews with feedback.</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
` }} />
  );
}
