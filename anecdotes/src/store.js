import { create } from "zustand";
import { newAnecdote, voteAnecdote, deleteAnecdote } from "./anecdoteService";

const useAnecdoteStore = create((set) => ({
  anecdotes: [],
  filter: "",
  actions: {
    initialize: (anecdotes) => set({ anecdotes }),
    vote: async (anecdote) => {
      const data = await voteAnecdote(anecdote);

      set((state) => ({
        anecdotes: state.anecdotes.map((anecdote) =>
          anecdote.id == data.id ? data : anecdote,
        ),
      }));
    },
    addAnecdote: async (content) => {
      const data = await newAnecdote(content);

      set((state) => ({
        anecdotes: [...state.anecdotes, data],
      }));
    },
    deleteAnecdote: async (id) => {
      await deleteAnecdote(id);
      set((state) => {
        return {
          anecdotes: state.anecdotes.filter((anecdote) => anecdote.id !== id),
        };
      });
    },
    applyFilter: (filter) => set(() => ({ filter })),
  },
}));

export const useAnecdotes = () => useAnecdoteStore((state) => state);
export const useFilter = () => useAnecdoteStore((state) => state.filter);
