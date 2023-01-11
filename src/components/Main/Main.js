import React from 'react';
import './Main.css';
import background from '../../background.png';
import ZodiacCard from '../zodiac/Zodiac.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((Item) => (
        <ZodiacCard key={Item.id} {...Item} />
      ))}
    </main>
  );
}
