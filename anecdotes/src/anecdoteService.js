const baseUrl = "http://localhost:3001/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);
const getAll = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

const newAnecdote = async (content) => {
  const object = { content, id: getId(), votes: 0 };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  const response = await fetch(baseUrl, options);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

const voteAnecdote = async (anecdote) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...anecdote, votes: anecdote.votes + 1 }),
  };
  const response = await fetch(`${baseUrl}/${anecdote.id}`, options);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

const deleteAnecdote = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseUrl}/${id}`, options);
  if (!response.ok) {
    throw new Error("Failed to delete anecdote");
  }
  return response.json();
};
export { getAll, newAnecdote, voteAnecdote, deleteAnecdote };
