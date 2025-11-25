import React from 'react';
import Image from 'next/image';


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
