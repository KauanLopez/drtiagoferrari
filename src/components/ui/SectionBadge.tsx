import React from 'react';
import './SectionBadge.css';

interface SectionBadgeProps {
  label: string;
  icon?: React.ReactNode;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label, icon }) => {
  return (
    <div className="section-badge">
      {icon ? icon : <span className="badge-dot" />}
      <span className="label-text">{label}</span>
    </div>
  );
};
