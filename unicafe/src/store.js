import { create } from "zustand";

export const useFeedbackStore = create((set) => ({
  stats: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
  actions: {
    incrGood: () =>
      set((state) => ({
        stats: { ...state.stats, good: state.stats.good + 1 },
      })),
    incrNeutral: () =>
      set((state) => ({
        stats: { ...state.stats, neutral: state.stats.neutral + 1 },
      })),
    incrBad: () =>
      set((state) => ({ stats: { ...state.stats, bad: state.stats.bad + 1 } })),
  },
}));
