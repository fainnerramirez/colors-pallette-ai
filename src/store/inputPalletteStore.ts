import { create } from 'zustand';

export const useInputPalletteStore = create((set) => ({
  inputSearchPallette: "",
  onChangeInputSearch: () => set((state: any) => ({ inputSearchPallette: state.inputSearchPallette })),
}));