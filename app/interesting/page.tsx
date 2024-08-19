"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"
import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><a>Do not click</a></Link></li>
        </ul>
    </main>
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <Component {...pageProps} />
        </main>
      )}
    </Authenticator>
  );
};
