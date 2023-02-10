import React from "react";

type SearchFormProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  search,
  setSearch,
  onSubmit,
}) => {
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
