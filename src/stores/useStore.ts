import { create } from "zustand";

type Theme = {
  id: string;
  src: string;
};

type Action = {
  id: string;
  src: string;
  message: string[];
};

export type LottieType = {
  theme: Theme;
  action: Action;
};



const useStore = create(set => {
  loadTheme: '',
  loadAction: '',
  loadMessage: '',
  setLoadTheme: () =>  set(state => loadTheme = state.loadTheme),
  setLoadAction: () => set(state => loadAction = state.loacAction),
  setLoadMessage: () => set(state => loadMessage = state.loadMessage)
})

