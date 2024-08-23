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

Amplify.configure(outputs);

function App() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showQR, setShowQR] = useState(false);
    
    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password == "deeploveofGod") {
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  };
  
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="https://shattereddisk.github.io/rickroll/rickroll.mp4"><a>Do not click</a></Link></li>
        </ul>
        
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            <p>{error}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {showQR && (
        <div style={{ marginTop: '20px' }}>
          Using group leader's phone, enter the bot...
          <a href="https://t.me/andy_GG_2023_bot">Press this link for bot</a>:)))
        
          Congrats, Puzzle 4 is done!!!
        </div>
      )}

      </main>
  );
}

export default App;
