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

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

// export default function App() {
//   return(
//       <main>
//         <ul>
//         <li><Link href="/"><a>Home</a></Link></li>
//         <li><Link href="/about_us"><a>About Us</a></Link></li>
//         <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
//         <li><Link href="/login"><a>Do not click</a></Link></li>
//         </ul>
//       <div>
//         (In development...)
//       </div>
//       </main>
        
//   );
// }

function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          Welcome!!!
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
