import React from 'react';

const menuItems = [
  { name: 'Velvet Latte', notes: 'Smooth espresso blended with oat milk and a touch of natural sweetness.', price: 190 },
  { name: 'Midnight Cold Brew', notes: '18-hour slow-steeped brew with deep cocoa notes and a fresh orange twist.', price: 150 },
  { name: 'Spanish Latte', notes: 'Rich espresso balanced with creamy milk and a caramelized sugar sweetness.', price: 250 },
  { name: 'Caramel Macchiato', notes: 'Layered espresso with steamed milk and vanilla, topped with buttery caramel.', price: 220 },
];

export default function MenuPage() {
  return (
    <section className="menu-panel">
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
  );
}

