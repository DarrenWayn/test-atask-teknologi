import React, { useState } from "react";
import useGetRepos from "./hooks/useGetRepos";
import useGetUser from "./hooks/useGetUser";

import { BsFillStarFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { Owner, Repository } from "./types/repository";
import SearchForm from "./components/search-form";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchRes, setSearchRes] = useState<string>("");

  const [clicked, setClicked] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>("");

  const {
    data: users,
    isLoading: userLoading,
    isError,
  } = useGetUser(searchRes);

  const { data: repos, isLoading: reposLoading } = useGetRepos(currentUser);

  return (
    <div className="App">
      <div className="xl:w-[50%] sm:w-full mx-auto mt-10 border border-gray-200 bg-blend-soft-light p-7">
        <SearchForm
          search={search}
          setSearch={setSearch}
          setSearchRes={setSearchRes}
        />
        <div className="mt-4 text-xl">
          <p className="mb-6">Showing users for "{search}"</p>{" "}
          <div className="results">
            {userLoading && <p>Loading ...</p>}
            {isError && (
              <h2>Sorry there's a hit API Limit, Try again in later</h2>
            )}
            {users?.data?.items.map((item: Owner) => (
              <div
                className="bg-gray-200 border border-gray-200"
                key={item?.login}
                onClick={() => {
                  setCurrentUser(item?.login);
                  setClicked(!clicked);
                }}
              >
                <p className="p-3  bg-white flex justify-between cursor-pointer">
                  {item?.login}{" "}
                  {clicked && currentUser === item.login ? (
                    <BsChevronDown />
                  ) : (
                    <BsChevronUp />
                  )}
                </p>
                {reposLoading && clicked && currentUser === item.login && (
                  <p>Loading ...</p>
                )}
                {clicked && currentUser === item.login
                  ? repos?.data
                      .filter(
                        (repo: Repository) => repo.owner.login === currentUser
                      )
                      .slice(0, 3)
                      .map((repo: Repository) => (
                        <React.Fragment key={repo.id}>
                          <div className="p-3 pb-7 ml-5 my-3 flex justify-between bg-gray-300">
                            <div className="sub-repo">
                              <h1 className="font-bold mb-3 cursor-pointer">
                                <a href={repo.html_url}>{repo.full_name}</a>
                              </h1>
                              <h2>{repo.description}</h2>
                            </div>
                            <div className="flex gap-4">
                              <BsFillStarFill />
                              <p className="mt-[-3px]">
                                {repo.stargazers_count}
                              </p>
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
  );
}

export default App;
