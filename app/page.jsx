import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


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

const storyHighlights = [
  {
    title: 'The Pour Bar',
    description: 'Hand brewed single origins, signature pour overs, and curated tasting flights.',
  },
  {
    title: 'Morning Sips',
    description: 'Bright, balanced brews crafted to start the day light roasts, gentle blends, and smooth espresso profiles.',
  },
];

const menuPreview = [
  { name: 'Velvet Latte', price: 190 },
  { name: 'Spanish Latte', price: 250 },
  { name: 'Caramel Macchiato', price: 220 },
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

      <section className="home-story-preview">
        <div className="preview-header">
          <p className="section-label">Our Story</p>
          <h3>What makes us special</h3>
        </div>
        <div className="card-grid">
          {storyHighlights.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="preview-footer">
          <Link href="/story" className="ghost-button">View Full Story</Link>
        </div>
      </section>

      <section className="home-menu-preview">
        <div className="preview-header">
          <p className="section-label">Signature Sips</p>
          <h3>Curated coffee with a culinary touch</h3>
        </div>
        <ul className="menu-preview-list">
          {menuPreview.map((item) => (
            <li key={item.name} className="menu-preview-item">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">₱{item.price.toLocaleString('en-PH')}</span>
            </li>
          ))}
        </ul>
        <div className="preview-footer">
          <Link href="/menu" className="ghost-button">View Full Menu</Link>
        </div>
      </section>

      <section className="home-visit-preview">
        <div className="visit-panel">
          <p className="section-label">Visit</p>
          <h3>Lopez Jaena Street, Iloilo City</h3>
          <p>Daily · 7am - 10pm</p>
          <p>Walk-ins welcome · Limited reservations for groups of 4+</p>
        </div>
        <div className="preview-footer">
          <Link href="/visit" className="ghost-button">Get Directions</Link>
        </div>
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
      </section>
    </>
  );
}
