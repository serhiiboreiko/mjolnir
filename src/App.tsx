import { useState } from "preact/hooks";
import styled from 'styled-components';
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

const Title = styled.h1`
  color: white;
`;

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main class="container">
      <Title>Welcome to Mjolnir</Title>

      <div class="row">
        <img src="/logo.svg" class="logo" alt="Mjolnir logo" />
      </div>

      <form
        class="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onInput={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
