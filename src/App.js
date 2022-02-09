import React from "react";
// ThiS eslint-disable line is important...
/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!babel-loader!mdx-loader!./content.mdx";
import "./App.css";
import "@reach/dialog/styles.css";

function App() {
  return (
    <main>
      <header>
        <h1>Accessibility in React</h1>
      </header>
      <hr />
      <Content />
    </main>
  );
}

export default App;
