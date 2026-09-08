import { useEffect } from "react";
import { useAnecdotes } from "../store";
import { getAll } from "../anecdoteService";
import { useNotification } from "../notificationStore";

const AnecdoteList = () => {
  const anecdotes = useAnecdotes().anecdotes;
  const actions = useAnecdotes().actions;
  const filter = useAnecdotes().filter;
  const filteredAnecdotes = anecdotes
    .filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase()),
    )
    .sort((a, b) => b.votes - a.votes);
  const notificationActions = useNotification().actions;

  const handleDelete = async (anecdote) => {
    await actions.deleteAnecdote(anecdote.id);
    notificationActions.handleNotification(
      `you deleted anecdote '${anecdote.content}'`,
    );
  };
  const handleVote = (anecdote) => {
    actions.vote(anecdote);
    notificationActions.handleNotification(`you voted '${anecdote.content}'`);
  };

  useEffect(() => {
    getAll().then((anecdotes) => actions.initialize(anecdotes));
  }, [actions.initialize]);

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
            {anecdote.votes == 0 && (
              <button onClick={() => handleDelete(anecdote)}>delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
