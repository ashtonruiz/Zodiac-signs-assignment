import React from 'react';
import './Main.css';
import background from '../../background.png';
import Zodiacs from '../Zodiac/Zodiac.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <p>hello</p>
    </main>
  );
}
