import React, { useState } from "react";
import useGetRepos from "./hooks/useGetRepos";
import useGetUser from "./hooks/useGetUser";

import { Owner, Repository } from "./types/repository";
import SearchForm from "./components/search-form";
import Repositories from "./components/repositories";
import Username from "./components/username";
import UserCard from "./components/user-card";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchRes(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="xl:w-[50%] sm:w-full mx-auto mt-10 border border-gray-200 bg-blend-soft-light p-7">
        <SearchForm
          search={search}
          setSearch={setSearch}
          onSubmit={handleSubmit}
        />
        <div className="mt-4 text-xl">
          <p className="mb-6">Showing users for "{searchRes}"</p>
          <div className="results">
            {userLoading && <p>Loading ...</p>}
            {isError && (
              <h2>Sorry there's a hit API Limit, Try again in later</h2>
            )}
            {users?.data?.items.map((item: Owner, index: number) => (
              <UserCard
                key={index}
                setCurrentUser={setCurrentUser}
                user={item?.login}
                setClicked={setClicked}
                clicked={clicked}
              >
                <Username
                  user={item?.login}
                  clicked={clicked}
                  currentUser={currentUser}
                />
                {reposLoading && clicked && currentUser === item.login && (
                  <p>Loading ...</p>
                )}
                {clicked && currentUser === item.login ? (
                  <Repositories
                    repos={repos?.data
                      .filter(
                        (repo: Repository) => repo.owner.login === currentUser
                      )
                      .slice(0, 3)}
                  />
                ) : null}
              </UserCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
