import create from 'zustand';

export const useStore = create(set => ({
    wishList: [],
    add: (id) => set(state => ({wishList: [...state.wishList, id]}))    
}));