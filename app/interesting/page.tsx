"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';

// for the routing function;
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import about_us from '../about_us/page';

Amplify.configure(outputs);

function App() {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/about_us'); // Redirect upon successful login
    }
  }, [user, navigate]);
  
  return (
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="/login"><a>Do not click</a></Link></li>
        </ul>
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {user ? (
            <div>
              <h1>Welcome, {user.username}!</h1>
              <button onClick={signOut}>Sign out</button>
            </div>
          ) : (
            <div>Loading...</div> // This part will be handled by Authenticator
          )}
        </div>
      )}
    </Authenticator>
      </main>
  );
}

export default App;
