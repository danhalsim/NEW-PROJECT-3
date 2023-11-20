function Form() {
  return (
    <form>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="New task"
        required
      ></input>

      <button type="submit">Create</button>
    </form>
  );
}

export default Form;
