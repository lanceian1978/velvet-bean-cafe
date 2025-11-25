import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({ placeholder = 'Search…', onSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(event.target.value);
  };

  return (
    <input
      type="search"
      aria-label="Search"
      className="header-search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

