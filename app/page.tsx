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

export default function App() {
  return (
    <main>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/"><a>About Us</a></Link></li>
        <li><Link href="/"><a>Interesting Facts</a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><a>Do not click</a></Link></li>
      </ul>
    </main>
  );
}
