import React, { useState } from "react";
import useGetRepos from "./hooks/useGetRepos";
import useGetUser from "./hooks/useGetUser";

import { BsFillStarFill } from "react-icons/bs";

function App() {
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState<string>("");

  const [clicked, setClicked] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState("");

  const { data: users } = useGetUser(searchRes);
  const { data: repos } = useGetRepos(currentUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchRes(search);
  };

  const handleShowRepos = (user: any) => {
    setCurrentUser(user.login);
    setClicked(!clicked);
  };

  console.log(repos);

  return (
    <div className="App">
      <div className="xl:w-[50%] sm:w-full mx-auto mt-10 border border-gray-200 bg-blend-soft-light p-7">
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
                  onClick={handleShowRepos.bind(this, item)}
                >
                  <p className="p-3  bg-white">{item?.login}</p>
                  {clicked && currentUser === item.login
                    ? repos?.data
                        .filter((repo: any) => repo.owner.login === currentUser)
                        .slice(0, 3)
                        .map((repo: any) => (
                          <React.Fragment key={repo.id}>
                            <div className="p-3 pb-7 ml-5 mb-3  flex justify-between">
                              <div className="sub-repo">
                                <h1>{repo.full_name}</h1>
                                <h2>{repo.description}</h2>
                              </div>
                              <div className="flex gap-4">
                                <p>{repo.stargazers_count}</p>
                                <BsFillStarFill />
                              </div>
                            </div>
                          </React.Fragment>
                        ))
                    : null}
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
