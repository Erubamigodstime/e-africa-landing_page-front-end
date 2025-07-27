import React from 'react';
import '../styles/CandidateCard.scss';

export default function CandidateCard({ stage }) {
  return (
    <div className={`candidate-card ${stage.replace(/\s+/g, '-').toLowerCase()}`}>
      <img src="https://via.placeholder.com/40" alt="Candidate" />
      <div className="info">
        <h4>Sade Adesuwa</h4>
        <p>Product Designer</p>
        <span className="status">{stage === 'Offer Accepted' ? 'Active/Employed' : stage}</span>
      </div>
    </div>
  );
}
