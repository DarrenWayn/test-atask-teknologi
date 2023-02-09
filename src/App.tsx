import React, { useState } from "react";
import { SearchResult } from "./types/search-results";
import { User } from "./types/User";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [clicked, setClicked] = useState(false);

  const onNow = result?.users.map((item: User) => item?.repos_url);
  console.log(onNow);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchResult = {
            search: search,
            users: users,
          };
          setResult(searchRes);
          setSearch("");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const showReponsitory = () => {
    if (clicked) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users/${onNow}/repo`)
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchResult = {
            search: search,
            users: users,
          };
          setResult(searchRes);
          setSearch("");
          setClicked(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="App">
      <div className="w-[50%] mx-auto mt-10 border border-gray-200 bg-blend-soft-light p-7">
        <form className="flex flex-col" onSubmit={onSearchSubmit}>
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
        <div className="mt-4 text-xl">
          <p className="mb-6">Showing users for "{search}"</p>
          <div className="users cursor-pointer">
            <div className="results">
              {result?.users.map((item: User) => (
                <div
                  className="bg-gray-200 border border-gray-200"
                  onClick={() => setClicked(!clicked)}
                >
                  <p className="p-3 mb-3 bg-white">{item?.login}</p>
                  {clicked ? (
                    <div className="bg-red-200 p-3 pb-7 ml-5 mt-3 flex justify-between">
                      <div className="sub-repo">
                        <h1>Title Repo</h1>
                        <h2>Desc Repo</h2>
                      </div>
                      <div className="flex gap-4">
                        <p>12</p>
                        <p>S</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
