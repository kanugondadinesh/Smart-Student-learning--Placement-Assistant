import fs from 'fs';
import path from 'path';

// Simple converter: wraps HTML body into a React component returning JSX
// Preserves inline scripts/styles by moving them into dangerouslySetInnerHTML

// Accept a source path (file or directory) as the first argument. If not provided,
// fall back to the Downloads list for backward compatibility.
let files = [];
const arg = process.argv[2];
if (arg) {
  const srcPath = path.resolve(arg);
  if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
    files = fs.readdirSync(srcPath)
      .filter((f) => f.toLowerCase().endsWith('.html'))
      .map((f) => path.join(srcPath, f));
  } else if (fs.existsSync(srcPath)) {
    files = [srcPath];
  } else {
    console.warn('Provided path not found:', srcPath);
  }
}

if (files.length === 0) {
  // Backwards-compatible default list (Downloads)
  files = [
    'C:/Users/K DINESH/Downloads/index.html',
    'C:/Users/K DINESH/Downloads/ai_interview_coach.html',
    'C:/Users/K DINESH/Downloads/concept_paths.html',
    'C:/Users/K DINESH/Downloads/leaderboard_rewards.html',
    'C:/Users/K DINESH/Downloads/personalized_roadmap.html',
    'C:/Users/K DINESH/Downloads/real_time_analytics.html',
    'C:/Users/K DINESH/Downloads/smart_mock_tests.html',
    'C:/Users/K DINESH/Downloads/company_interview_questions.html',
    'C:/Users/K DINESH/Downloads/contact.html',
    'C:/Users/K DINESH/Downloads/quiz.html',
    'C:/Users/K DINESH/Downloads/signup.html',
    'C:/Users/K DINESH/Downloads/gemini-code-1781848305920.html',
    'C:/Users/K DINESH/Downloads/Project.html',
  ];
}

const outDir = path.resolve(process.cwd(), 'src', 'converted');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function toComponentName(file) {
  const name = path.basename(file, path.extname(file));
  return name
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.warn('File not found:', file);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');

  const compName = toComponentName(file);
  const outPath = path.join(outDir, compName + '.jsx');

  const jsx = `import React from 'react';

export default function ${compName}() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ` + "`" + `<!doctype html>` + "`" + ` }} />
  );
}
`;

  // To preserve exact output, include full original HTML as innerHTML of a wrapper.
  const escapeForTemplate = (s) =>
    s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const fullHtml = escapeForTemplate(html);
  const final = `import React from 'react';

export default function ${compName}() {
  return (
    <div dangerouslySetInnerHTML={{ __html: ` + "`" + `${fullHtml}` + "`" + ` }} />
  );
}
`;

  fs.writeFileSync(outPath, final, 'utf8');
  console.log('Wrote', outPath);
}
