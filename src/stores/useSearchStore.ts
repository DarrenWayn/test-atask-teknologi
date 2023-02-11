import create from "zustand";

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
  searchRes: string;
  setSearchRes: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (value: string) => set(() => ({ search: value })),
  searchRes: "",
  setSearchRes: (value: string) => set(() => ({ search: value })),
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    set((state) => ({ searchRes: state.search }));
    set(() => ({ search: "" }));
  },
}));

export default useSearchStore;
