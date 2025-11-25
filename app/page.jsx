import React from 'react';

const highlights = [
  {
    title: 'Slow Bar Rituals',
    description: 'Single-origin pours and tasting flights guided by our baristas.',
  },
  {
    title: 'Morning Bakery',
    description: 'Cardamom buns, burnt-honey croissants, and gluten-free bites.',
  },
  {
    title: 'Evening Groove',
    description: 'Live acoustic sets every Thursday with candle-lit seating.',
  },
];

const menuItems = [
  { name: 'Velvet Latte', notes: 'Smooth espresso blended with oat milk and a touch of natural sweetness.', price: 190 },
  { name: 'Midnight Cold Brew', notes: '18-hour slow-steeped brew with deep cocoa notes with a fresh orange twist.t', price: 150 },
  { name: 'Spanish Latte', notes: 'Rich espresso balanced with creamy milk and a caramelized sugar sweetness.', price: 250 },
  { name: 'Caramel Macchiato', notes: 'Layered espresso with steamed milk and vanilla, topped with buttery caramel.', price:220 },
];

const testimonials = [
  { quote: 'Feels like a warm hug with impeccable taste.', author: 'Lance I.' },
  { quote: 'Coffee with soul. Their playlists are as good as the pours.', author: 'Ian L.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-tag">Artful coffee, kind people.</p>
        <h2 className="hero-title">Welcome to VELVET BEAN,  where every cup feels like home</h2>
        <p className="hero-copy">
        From farm to cup, we carefully select our beans, roast them with heart, and serve them with love.
        </p>
        <div className="hero-actions">
          <button className="cta-button" type="button">
            Order Ahead
          </button>
          <button className="ghost-button" type="button">
            View Seasonal Menu
          </button>
        </div>
      </section>

      <section id="story" className="card-grid">
        {highlights.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section id="menu" className="menu-panel">
        <div>
          <p className="section-label">Signature Sips</p>
          <h3>Curated coffee with a culinary touch.</h3>
        </div>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.name} className="menu-item">
              <div>
                <p className="menu-name">{item.name}</p>
                <p className="menu-notes">{item.notes}</p>
              </div>
              <span className="menu-price">${item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        {testimonials.map((entry) => (
          <blockquote key={entry.author}>
            <p>“{entry.quote}”</p>
            <cite>— {entry.author}</cite>
          </blockquote>
        ))}
        <div id="visit" className="visit-panel">
          <p className="section-label">Visit</p>
          <h3>Lopez Jaena Street, Iloilo City</h3>
          <p>Daily · 7am - 10pm</p>
          <p>Walk-ins welcome · Limited reservations for groups of 4+</p>
        </div>
      </section>
    </>
  );
}
