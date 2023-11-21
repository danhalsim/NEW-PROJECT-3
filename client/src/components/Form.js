import React, { useState } from 'react';

function Form({createTask}) {
  // initialize content as as empty string
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // call the createTask function in App.js
    createTask(content);

    // reset the input field to empty
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>

      <button type="submit">Create</button>
    </form>
  );
}

export default Form;
