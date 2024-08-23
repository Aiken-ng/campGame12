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
import about_us from '../about_us/page';

Amplify.configure(outputs);

function App() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    
    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password == "Hi") {
      setError("wrong password");
    } else {
      setError(null);
      // Proceed with form submission or further processing
      alert('Password is valid!');
    }
  };
  
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="/login"><a>Do not click</a></Link></li>
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

      </main>
  );
}

export default App;
