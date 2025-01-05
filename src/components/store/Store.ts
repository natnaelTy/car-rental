
import { create } from "zustand";


export interface Fav{
    id: number,
    image: string,
    categorie: string,
    model: string,
    airConditioning: string,
    seats: number,
    doors: number,
    transmission: string,
    scooter: string,
    rentalPrice: string,
}

export interface FavStore {
    favList: Fav[];
    setFavList: (faList: Fav[]) => void;
    addToFav: (favList: Fav) => void;
    removeFromFav: (id: number) => void;
}

export const useFavStore = create<FavStore>((set) => ({
    favList: [],
    setFavList: (favList: Fav[]) => set(() => ({favList})),
    addToFav: (favList: Fav) => set((state) => ({favList: [...state.favList, favList]})),
    removeFromFav: (id : number) => set((state) => ({favList: state.favList.filter((carid) => carid.id !== id)})),
}));


export default useFavStore;