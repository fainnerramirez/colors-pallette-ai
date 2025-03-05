import { create } from 'zustand';

export const useColorPalletteStore = create((set) => ({
  palletteColors: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));