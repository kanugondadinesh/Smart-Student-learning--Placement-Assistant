import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    { q: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], answer: 1 },
    { q: 'Which data structure uses FIFO order?', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 1 },
    { q: 'Which HTTP method is typically used to update existing data?', options: ['GET', 'POST', 'PUT', 'DELETE'], answer: 2 },
    { q: 'Which algorithm is best for finding shortest paths in a graph with non-negative weights?', options: ['DFS', 'Dijkstra', 'Prim', 'Kruskal'], answer: 1 },
    { q: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query List', 'Server Query Language', 'Structured Queue Language'], answer: 0 },
    { q: 'Which sorting algorithm has average-case O(n log n) and is stable?', options: ['QuickSort', 'HeapSort', 'MergeSort', 'SelectionSort'], answer: 2 },
    { q: 'What is a correct way to declare a JavaScript arrow function?', options: ['function() => {}', '() => {}', '=> function() {}', 'function => () {}'], answer: 1 },
    { q: 'Which HTTP status code means "Not Found"?', options: ['200', '301', '404', '500'], answer: 2 },
    { q: 'Which data structure is best for LRU cache implementation?', options: ['Array', 'LinkedList + HashMap', 'Queue', 'Stack'], answer: 1 },
    { q: 'QuickSort average-case time complexity is:', options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(log n)'], answer: 1 },
    { q: 'Which traversal algorithm uses a FIFO queue?', options: ['DFS', 'BFS', 'Inorder', 'Postorder'], answer: 1 },
    { q: 'What is a closure in JavaScript?', options: ['A function with preserved lexical scope', 'A private class method', 'A DOM event handler', 'A CSS scoping rule'], answer: 0 },
    { q: 'Which concept allows objects to take many forms (OOP)?', options: ['Polymorphism', 'Encapsulation', 'Abstraction', 'Inheritance'], answer: 0 },
    { q: 'Which HTTP status code means "Created"?', options: ['200', '201', '400', '500'], answer: 1 },
    { q: 'Which sorting algorithm is stable and uses divide-and-conquer?', options: ['QuickSort', 'HeapSort', 'MergeSort', 'SelectionSort'], answer: 2 },
    { q: 'Which data structure stores key-value pairs?', options: ['Hash table', 'Stack', 'Tree', 'Array'], answer: 0 },
    { q: 'Average-case time to insert into a hash table (with good hashing):', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], answer: 0 },
    { q: 'Which database is relational?', options: ['MySQL', 'MongoDB', 'Redis', 'Cassandra'], answer: 0 },
    { q: 'Which SQL clause filters rows?', options: ['SELECT', 'WHERE', 'GROUP BY', 'ORDER BY'], answer: 1 },
    { q: 'Which CSS selector targets an element ID?', options: ['.', '#', '*', ':'], answer: 1 },
    { q: 'Which of these is a frontend framework?', options: ['Django', 'React', 'Laravel', 'Spring'], answer: 1 },
    { q: 'REST stands for:', options: ['Representational State Transfer', 'Remote Execution Service Tool', 'Resource Exchange Transport', 'Reactive State Transfer'], answer: 0 },
    { q: 'Which array method adds an element to the end in JavaScript?', options: ['pop', 'push', 'shift', 'unshift'], answer: 1 },
    { q: 'Which operator checks value and type equality in JavaScript?', options: ['==', '=', '===', '!='], answer: 2 },
    { q: 'DOM stands for:', options: ['Document Object Model', 'Data Object Model', 'Document Order Map', 'Direct Object Module'], answer: 0 },
    { q: 'Which tool is used for version control?', options: ['Git', 'Jenkins', 'Docker', 'Kubernetes'], answer: 0 },
    { q: 'What does "ignore constants" mean in Big-O?', options: ['Drop constant factors for asymptotic analysis', 'Keep constants for precise runtime', 'Focus on memory usage only', 'Use exact operation counts'], answer: 0 },
    { q: 'What is memoization?', options: ['Caching function results to avoid recomputation', 'A sorting technique', 'A database indexing strategy', 'A testing methodology'], answer: 0 },
    { q: 'Which is NOT a JavaScript primitive type?', options: ['string', 'number', 'object', 'boolean'], answer: 2 },
    { q: 'Command to create a new Git branch locally:', options: ['git branch <name>', 'git new <name>', 'git create-branch <name>', 'git checkout -b'], answer: 0 },
    { q: 'Which HTTP method is used to retrieve data?', options: ['GET', 'POST', 'PUT', 'DELETE'], answer: 0 },
    { q: 'Which SQL operation combines rows from two tables based on related columns?', options: ['UNION', 'JOIN', 'GROUP BY', 'ORDER BY'], answer: 1 },
    { q: 'Which algorithm finds the Minimum Spanning Tree?', options: ['Dijkstra', 'Bellman-Ford', 'Floyd-Warshall', 'Kruskal'], answer: 3 },
    { q: 'Which HTML tag defines a table row?', options: ['tr', 'td', 'th', 'table'], answer: 0 }
  ];

  const handleOptionChange = (qIndex, optIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optIndex });
  };

  const submitQuiz = () => {
    let currentScore = 0;
    questions.forEach((item, idx) => {
      if (selectedAnswers[idx] === item.answer) currentScore += 1;
    });
    setScore(currentScore);
  };

  const explanations = [
    'Binary search divides the search interval in half — O(log n).',
    'Queue follows First-In-First-Out ordering.',
    'PUT is typically used to update existing resources.',
    "Dijkstra's algorithm finds shortest paths with non-negative weights.",
    'SQL stands for Structured Query Language.',
    'MergeSort is stable and has average-case O(n log n).',
    "Arrow functions use the '() => {}' syntax in JS.",
    '404 is the HTTP status code for Not Found.',
    'LRU caches are commonly implemented with a doubly-linked list + hash map.',
    'QuickSort average-case is O(n log n).',
    'BFS uses a FIFO queue to traverse breadth-first.',
    'A closure preserves lexical scope so inner functions access outer variables.',
    'Polymorphism allows objects to be treated as instances of their parent types.',
    '201 Created indicates successful resource creation.',
    'MergeSort uses divide-and-conquer and is stable.',
    'Hash tables store key-value pairs with fast lookup.',
    'With good hashing, insert is generally O(1) average-case.',
    'MySQL is a relational database (uses tables and SQL).',
    'WHERE filters rows in SQL queries.',
    'ID selector uses # in CSS (e.g., #main).',
    'React is a frontend library/framework for building UIs.',
    'REST is Representational State Transfer — an architectural style for APIs.',
    'push adds an element to the end of a JavaScript array.',
    "'===' checks value and type equality in JS.",
    'DOM means Document Object Model, the HTML representation in browsers.',
    'Git is a distributed version control system.',
    'Ignore constants means drop constant factors when expressing asymptotic growth.',
    'Memoization caches function results to avoid repeated work.',
    'object is not a primitive — primitives include string, number, boolean, null, undefined, symbol.',
    'Use git branch <name> to create a branch locally.',
    'GET is used to retrieve data in HTTP.',
    'JOIN combines rows from multiple tables based on related columns.',
    'Kruskal is a Minimum Spanning Tree algorithm.',
    'tr defines a table row in HTML.'
  ];

  return (
    <div className="page page-small">
      <Link to="/" className="back">← Back to Dashboard</Link>
      <h1>Quiz Practice</h1>
      <div className="card-light">
        {questions.map((item, idx) => (
          <div key={idx} className="card" style={{ marginBottom: 14 }}>
            <strong>{idx + 1}. {item.q}</strong>
            <div style={{ marginTop: 10 }}>
              {item.options.map((opt, optIndex) => (
                <label key={optIndex} style={{ display: 'block', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '8px', marginTop: '6px', cursor: 'pointer', fontWeight: 400 }}>
                  <input type="radio" name={`q${idx}`} value={optIndex} onChange={() => handleOptionChange(idx, optIndex)} style={{ width: 'auto', marginRight: '8px' }} />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="ai-btn" onClick={submitQuiz}>Submit Answers</button>
      
      {score !== null && (
        <div className="success">
          Your score: {score} / {questions.length}. {score === questions.length ? 'Excellent work!' : 'Review the concepts and try again.'}
        </div>
      )}

      {score !== null && (
        <div style={{ marginTop: 12 }}>
          <h4>Review & Explanations</h4>
          <div>
            {questions.map((item, idx) => (
              <div key={idx} style={{ padding: '10px 0', borderBottom: '1px solid #eef2ff' }}>
                <div style={{ fontWeight: 700 }}>{idx + 1}. {item.q}</div>
                <div style={{ marginTop: 6 }}>
                  <div>Correct answer: <strong>{item.options[item.answer]}</strong></div>
                  <div style={{ marginTop: 6, color: '#475569' }}>{explanations[idx] || ''}</div>
                  {selectedAnswers[idx] !== item.answer && (
                    <div style={{ marginTop: 6, color: '#b91c1c' }}>Your answer: {selectedAnswers[idx] != null ? item.options[selectedAnswers[idx]] : 'No answer'}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;