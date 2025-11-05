import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('Team')),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))

