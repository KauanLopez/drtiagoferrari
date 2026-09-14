import React from 'react';
import './ServiceCardArched.css';

interface ServiceCardArchedProps {
  imageSrc?: string;
  videoSrc?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  solidAccent?: boolean;
  imageClassName?: string;
}

export const ServiceCardArched: React.FC<ServiceCardArchedProps> = ({ imageSrc, videoSrc, title, description, icon, solidAccent, imageClassName }) => {
  return (
    <div className="service-card-arched">
      <div className={`service-card-media ${solidAccent ? 'solid-accent' : ''}`}>
        {videoSrc ? (
          <video src={videoSrc} className="service-card-img" autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        ) : imageSrc ? (
          <img src={imageSrc} alt={title} className={`service-card-img ${imageClassName || ''}`} />
        ) : (
          <div className="service-card-icon-container">
            {icon}
          </div>
        )}
      </div>
      <div className="service-card-content">
        <h4 className="h4">{title}</h4>
        <p className="caption">{description}</p>
      </div>
    </div>
  );
};
