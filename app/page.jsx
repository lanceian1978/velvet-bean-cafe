import React from 'react';
import Image from 'next/image';

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

const menuItems = [
  { name: 'Velvet Latte', notes: 'Smooth espresso blended with oat milk and a touch of natural sweetness.', price: 190 },
  { name: 'Midnight Cold Brew', notes: '18-hour slow-steeped brew with deep cocoa notes and a fresh orange twist.', price: 150 },
  { name: 'Spanish Latte', notes: 'Rich espresso balanced with creamy milk and a caramelized sugar sweetness.', price: 250 },
  { name: 'Caramel Macchiato', notes: 'Layered espresso with steamed milk and vanilla, topped with buttery caramel.', price: 220 },
];

const testimonials = [
  { quote: 'Feels like a warm hug with strong taste.', author: 'Lance I.' },
  { quote: 'Coffee with soul. Their playlists are as good as the pours.', author: 'Ryan L.' },
];

const featuredPhotos = [
  { src: '/images/velvet_latte.jpg', caption: 'Velvet Latte - crema in full bloom' },
  { src: '/images/spanish_latte.JPG', caption: 'Spanish Latte - golden drizzle delight' },
  { src: '/images/caramel_macchiato.jpg', caption: 'Caramel Macchiato - sweet caramel hug' },
  { src: '/images/cold-brew.jpg', caption: 'Cold Brew - deep, smooth, slow-steeped' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Artful coffee, kind people.</p>
          <h2 className="hero-title">Welcome to Velvet Bean, where every cup feels like home.</h2>
          <p className="hero-copy">
            From farm to cup, we carefully select our beans, roast them with heart, and serve them with love.
            Slide into a sunlit booth, linger by the slow bar, and savor pours made just for you.
          </p>
        </div>
        <div className="hero-media">
          <Image
            src="/images/velvet_latte.jpg"
            alt="Freshly poured velvet latte"
            width={520}
            height={520}
            className="hero-image"
            priority
          />
          <span className="hero-media-caption">Velvet latte with raw panela and oat milk</span>
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
              <span className="menu-price">₱{item.price.toLocaleString('en-PH')}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="featured-images">
        {featuredPhotos.map((photo) => (
          <figure key={photo.src} className="featured-card">
            <Image src={photo.src} alt={photo.caption} width={520} height={380} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
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
