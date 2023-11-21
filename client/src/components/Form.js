import React, { useState } from 'react';

function Form({createTask}) {
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    createTask(content);
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
