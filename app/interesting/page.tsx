"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';

// for the routing function;
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import interesting from '../interesting';
import about_us from '../about_us';
import home from '../'

Amplify.configure(outputs);

function App() {
    useEffect(() => {
    // Check if the user is authenticated after rendering
    const checkAuth = async () => {
      const { user } = await Authenticator.useAuthenticator();
      if (user) {
        navigate('/about_us');
      }
    };
    checkAuth();
  }, [navigate]);
  
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="/login"><a>Do not click</a></Link></li>
        </ul>
    <Authenticator>
      {({ signOut }) => (
        <Router>
          <Routes>
            <Route path="/about_us" element={<about_us />} />
          </Routes>
          {user && (
            <div>
              <h1>Welcome {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Router>
      )}
    </Authenticator>
      </main>
  );
}

export default App;
