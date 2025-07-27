import React from 'react';

import Sidebar from './Sidebar';
import CandidateCard from './CandidateCard';
import '../styles/Dashboard.scss';

 const  Dashboard=() =>{
  const stages = ['New Candidates', 'Interview', 'Test', 'Offer Sent', 'Offer Accepted'];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
       
        <div className="job-header">
          <h2>Junior Developer</h2>
          <p>📍 Nigeria | 💰 $500/month | 📅 Posted on 25 Nov 2023</p>
        </div>
        <div className="candidate-columns">
          {stages.map((stage, index) => (
            <div className="column" key={index}>
              <h3>{stage} (23)</h3>
              <CandidateCard stage={stage} />
              <CandidateCard stage={stage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard