import React from 'react';
import Money from '../../Images/icon-money.webp';
import Chat from '../../Images/icon-chat.webp';
import Security from '../../Images/icon-security.webp';

const Features = () => [
  {
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    src: Chat,
    alt: "Chat Icon"
  },
  {
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
    src: Money,
    alt: "Money Icon"
  },
  {
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
    src: Security,
    alt: "Security Icon"
  }
];

export const HomeFeatures = () => {
  const features = Features();
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <img src={feature.src} alt={feature.alt} className="feature-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
    </section>
  );
}