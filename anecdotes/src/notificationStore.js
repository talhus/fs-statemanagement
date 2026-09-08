import { create } from "zustand";

const notificationStore = create((set) => ({
  show: false,
  message: "",
  actions: {
    handleNotification: (message, duration = 5000) => {
      set({ show: true, message });
      setTimeout(() => set({ show: false, message: "" }), duration);
    },
  },
}));

export const useNotification = () => notificationStore((state) => state);
