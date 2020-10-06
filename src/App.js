import React, { useEffect, useState } from 'react';
import marked from 'marked';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [markdown, setMarkdown] = useState('');

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
  });

  useEffect(() => {
    setText(text.replace(/\n/, '<br />'));
    setMarkdown(marked(text));
  }, [text]);

  return (
    <div id="app">
      <h1>Markdown Editor</h1>
      <div>
        <section>
          <h2>Editor</h2>
          <textarea
            id="editor"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </section>
        <section>
          <h2>Previewer</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </section>
      </div>
      <footer>&copy; Asidipta Chaudhuri</footer>
    </div>
  );
}

export default App;
