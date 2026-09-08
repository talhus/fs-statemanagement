import { useNotification } from "../notificationStore";
import { useAnecdotes } from "../store";
import { useState } from "react";
const AnecdoteForm = () => {
  const actions = useAnecdotes().actions;
  const notificationActions = useNotification().actions;
  const [content, setContent] = useState("");

  const handleAnecdote = async (e) => {
    e.preventDefault();
    if (!content) return;
    actions.addAnecdote(content);
    notificationActions.handleNotification(`you added '${content}'`);
    setContent("");
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleAnecdote}>
        <div>
          <input
            name="anecdote"
            data-testid="new"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
