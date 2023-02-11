import React from "react";
import useSearchStore from "../stores/useSearchStore";

type SearchFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const { search, setSearch } = useSearchStore();

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <input
        placeholder="Enter username"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="p-3 mb-4 bg-gray-200 border border-gray-200"
      />
      <button type="submit" className="text-white bg-blue-400 p-3">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
