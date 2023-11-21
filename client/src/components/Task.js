function Task({ task, deleteTask }) {
  return (
    <article>
      <nav>
        <ul>
          <li>{task.content}</li>
        </ul>
        <ul>
          <li>
            <a
              onClick={() => deleteTask(task.id)}
              href="#"
              role="button"
              class="secondary outline"
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Task;
