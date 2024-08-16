"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
// import styles from "./all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Link from "next/link"
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <main>
      <Link href="/"><a>Home</a></Link>
      <Link href="/"><a>About Us</a></Link>
      <Link href="/"><a>Contact Us</a></Link>
      <Link href="/"><a>Interesting facts</a></Link>
      <Link href="/"><a>Don't click me</a></Link>
    </main>
  );
}
