import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', college: '', field: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) setIsSubmitted(true);
  };

  return (
    <div className="page page-mini">
      <Link to="/" className="back">← Back to Dashboard</Link>
      <h1>Create your student profile</h1>
      <div className="card-light">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Enter your name" required onChange={e => setFormData({...formData, name: e.target.value})} />
          
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" required onChange={e => setFormData({...formData, email: e.target.value})} />
          
          <label htmlFor="college">College / University</label>
          <input id="college" type="text" placeholder="Enter your institution" required onChange={e => setFormData({...formData, college: e.target.value})} />
          
          <label htmlFor="field">Field of Study</label>
          <select id="field" required onChange={e => setFormData({...formData, field: e.target.value})}>
            <option value="">Select your field</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Business</option>
            <option>Other</option>
          </select>
          
          <button className="ai-btn" type="submit">Save Profile</button>
        </form>
        {isSubmitted && <div className="success">Thanks {formData.name}! Your profile is saved.</div>}
      </div>
    </div>
  );
};

export default Signup;