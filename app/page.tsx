"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const TypingEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <div style={{
      fontFamily: 'Courier New, Courier, monospace',
      fontSize: '20px',
      borderRight: '3px solid #000',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: 'fit-content',
      animation: 'blink-caret 0.75s step-end infinite',
    }}>
      {displayedText}
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: black; }
        }
      `}</style>
    </div>
  );
};

export default function App() {
  return(
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/puzzle1"><a>puzzle1</a></Link></li>
        <li><Link href="/puzzle1_clue"><a>Puzzle1_clue</a></Link></li>
        <li><Link href="https://shattereddisk.github.io/rickroll/rickroll.mp4"><a>Do not click</a></Link></li>
        </ul>
      <div>
        <h1>Typing Effect Example</h1>
        <TypingEffect text="Hello, Welcome home!" speed={50} />
      </div>
      </main>
  );
}
