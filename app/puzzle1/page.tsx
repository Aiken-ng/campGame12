"use client";

import { useState, useEffect } from "react";
import React from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';

// for the routing function;
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Snakegame from '../snakegame'

Amplify.configure(outputs);

function App() {
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle1"><a>puzzle1</a></Link></li>
        <li><Link href="/puzzle1_clue"><a>Puzzle1_clue</a></Link></li>
        <li><Link href="https://shattereddisk.github.io/rickroll/rickroll.mp4"><a>Do not click</a></Link></li>
        </ul>
        <div className="App">
            It was a time unlike any other in the world of vast, intertwining narratives, where stories spun themselves into webs of infinite complexity. Within these tales, some found themselves lost in the endless passages of time, while others were guided by subtle hints, clues left by those who had ventured before. There was a certain word, a <Link href="/secret"><a>here</a></Link> and now, or perhaps a whispered suggestion, that seemed to draw attention amidst the noise.
      Amongst the random letters and meaningless words, a pattern began to emerge, a pattern that suggested there was more to this text than initially met the eye. Hidden in plain sight, the letters formed words that beckoned to the reader, calling them to explore further, to delve deeper into the narrative maze. The journey was not easy, and many became lost, wandering through the labyrinth of sentences that seemed to lead nowhere. But for those who persisted, there was always a faint glimmer of hope, a promise that the end was near if they could just find the right path.
      Every sentence was a challenge, a puzzle designed to test the reader's resolve. Some words seemed to shine brighter than others, their letters glowing faintly as if infused with some hidden energy. Among them, one word stood out, <Link href="/secret"><a>here</a></Link>, though it was not immediately obvious why. It was just a word among many, yet it seemed to pulse with potential, as if it held the key to unlocking the mysteries of the text.
      Those who dared to follow the clues found themselves drawn to this word, <Link href="/secret"><a>here</a></Link>, as if by some invisible force. It was the culmination of their efforts, the moment when everything fell into place. The reader's attention was captured, their curiosity piqued, and they could not resist the urge to explore further. The word was simple, yet it carried with it the weight of the entire narrative, the promise of something more.
      In the end, it was not the complexity of the story that mattered, but the discovery of that one word, <Link href="/secret"><a>here</a></Link>, that brought everything into focus. The rest of the text faded into the background, its meaning irrelevant compared to the power of that single word. It was a moment of clarity, a realization that all the reader had been searching for was right there, hidden in plain sight.
      As the reader's eyes settled on the word, <Link href="/secret"><a>here</a></Link>, they knew they had reached the end of their journey. The story had been long and winding, filled with distractions and dead ends, but in the end, it was all worth it. The word stood as a beacon, guiding them to the conclusion they had been seeking all along. And with that, the journey was complete.
      please click <Link href="/"><a>here</a></Link>
        </div>
      </main>
  );
}

export default App;
