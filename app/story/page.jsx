import React from 'react';

const highlights = [
  {
    title: 'The Pour Bar',
    description: 'Hand brewed single origins, signature pour overs, and curated tasting flights.',
  },
  {
    title: 'Morning Sips',
    description: 'Bright, balanced brews crafted to start the day light roasts, gentle blends, and smooth espresso profiles.',
  },
  {
    title: 'After-Dusk Live',
    description: 'Thursday acoustic sessions paired with soft lighting and cozy evening atmosphere.',
  },
];

export default function StoryPage() {
  return (
    <section className="card-grid">
      {highlights.map((item) => (
        <article key={item.title} className="info-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}

