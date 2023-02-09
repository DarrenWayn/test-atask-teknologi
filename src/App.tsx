import React, { useState } from "react";
import useGetUser from "./hooks/useGetUser";

function App() {
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState("");
  const [clicked, setClicked] = useState(false);

  const { data: users } = useGetUser(searchRes);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchRes(search);
  };

  return (
    <div className="App">
      <div className="w-[50%] mx-auto mt-10 border border-gray-200 bg-blend-soft-light p-7">
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
        <div className="mt-4 text-xl">
          <p className="mb-6">Showing users for "{search}"</p>
          <div className="users cursor-pointer">
            <div className="results">
              {users?.data?.items.map((item: any) => (
                <div
                  className="bg-gray-200 border border-gray-200"
                  key={item?.login}
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
