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
  return(
      <main>
        <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about_us"><a>About Us</a></Link></li>
        <li><Link href="/interesting"><a>Interesting Facts</a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><a>Do not click</a></Link></li>
        </ul>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, ex a maximus vestibulum, sem erat commodo purus, sit amet ullamcorper mi tellus sit amet justo. Nam imperdiet pellentesque ex, non pulvinar est molestie vel. Maecenas malesuada mauris vel nulla dapibus posuere. Vestibulum quis libero condimentum tellus tempor fringilla. Pellentesque diam lectus, pellentesque quis pharetra ac, vulputate id urna. Quisque rhoncus ultrices augue, a aliquet libero. Nunc in tincidunt quam, sed facilisis nunc.
      Maecenas dapibus, metus vitae finibus vehicula, ligula nisl tincidunt purus, facilisis cursus nisl lectus in sem. Ut lobortis quam ut ante elementum, nec malesuada nunc porttitor. Nullam luctus elementum mauris, eu ultricies nisl venenatis a. Fusce vehicula gravida magna a semper. Nam elit enim, ullamcorper nec metus vel, sagittis eleifend lectus. Vivamus interdum, nunc quis auctor congue, sem arcu laoreet est, a congue purus mauris ac purus. Cras pretium sapien sem, vel maximus turpis blandit id. Nunc et sapien viverra, pellentesque ligula quis, vestibulum turpis. Vestibulum laoreet hendrerit nisl, nec volutpat arcu pellentesque et. Suspendisse eu lectus condimentum, posuere ex vitae, vehicula magna. Etiam elementum tristique elementum.
      Suspendisse commodo nibh vel risus aliquet condimentum. Praesent id ex erat. Nam euismod purus et eros rutrum, sit amet placerat felis maximus. In blandit consectetur ante, vel auctor mauris tincidunt vitae. Praesent blandit est a aliquet imperdiet. Mauris rutrum tellus gravida, congue sapien id, sagittis arcu. Quisque eget augue neque.
      Sed nisi enim, porta eget diam ut, tincidunt blandit purus. Aliquam finibus ullamcorper diam, scelerisque consectetur risus. Nam tristique laoreet scelerisque. Vivamus sit amet cursus dui. Vivamus ut mauris vitae nisl interdum blandit. Maecenas vel massa quam. Suspendisse ornare nisl et pretium eleifend.
      Morbi magna augue, facilisis nec <Link href=""><a>ullamcorper</a></Link> eu, sollicitudin eget nunc. Fusce bibendum neque sit amet ex imperdiet gravida. Morbi non lorem lacus. Vivamus tempor scelerisque velit eget interdum. Quisque feugiat dolor lacus, vel dictum ex accumsan sit amet. Quisque ultrices mollis risus, sit amet vehicula dolor vehicula ac. Aenean id orci varius, gravida sem a, congue massa. Donec at varius mi. Mauris pellentesque risus sed dui ullamcorper sodales. Proin sit amet nibh vitae arcu dictum auctor quis at velit.
      </div>
      </main>
  );
}
