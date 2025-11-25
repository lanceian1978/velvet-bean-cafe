import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#2E8B57', color: '#FFF' }}>
      <h1>Leanillo Recipes</h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/recipe/create">Add Recipe</Link>
      </nav>
      <SearchBar />
    </header>
  );
}
