import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

type StoreType = {
  afterSignIn: boolean;
  setAfterSignIn: (isAfterSignIn: boolean) => void;
  afterSignOut: boolean;
  setAfterSignOut: (isAfterSignOut: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  showSlideNotification: boolean;
  setShowSlideNotification: (isShowing: boolean) => void;
};

export const notificationStore = create<StoreType>()(persist(
  (set, get) => ({
    afterSignIn: false,
    afterSignOut: false,
    showSlideNotification: false,
    message: "Message here",
    setShowSlideNotification: (isShowing: boolean) =>
      set(() => ({ showSlideNotification: isShowing })),
    setMessage: (message) => set(() => ({ message: message })),
    setAfterSignIn: (isAfterSignIn) =>
      set(() => ({ afterSignIn: isAfterSignIn })),
    setAfterSignOut: (isAfterSignOut) =>
      set(() => ({ afterSignOut: isAfterSignOut })),
  }),
  {
    name: 'notification-store', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  },
))
