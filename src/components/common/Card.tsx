import React from 'react';

interface CardProps {
    title: string;
    description: string;
    extra?: React.ReactNode; 
  }
  
  const Card: React.FC<CardProps> = ({ title, description, extra }) => (
    <div className="bg-white p-4 rounded shadow-md text-black">
      <h3 className="font-bold text-lg text-black">{title}</h3>
      <p>{description}</p>
      <div className="mt-2">{extra}</div>
    </div>
  );
  
export default Card
