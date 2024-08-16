"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/all_pages.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
   <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
      <link href="{{ url_for('static', filename='index.css') }}" rel="stylesheet" />
      <script defer src="{{ url_for('static', filename='daynight.js') }}"></script>
      <script defer src="{{ url_for('static', filename='lightbox.js') }}"></script>
      <link href="pre-poly.html" rel="search" />
      <link href="working.html" rel="search" />
      <link href="number.html" rel="search" />
      <title>Home</title>
    </Head>
    <body>
      {/* Rest of the component */}
    </body>
  </>
  );
}
