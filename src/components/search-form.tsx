import React from "react";

type SearchFormProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchRes: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm: React.FC<SearchFormProps> = ({
  search,
  setSearch,
  setSearchRes,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchRes(search);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
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
