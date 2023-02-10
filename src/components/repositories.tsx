import React from "react";
import { Repository } from "../types/repository";
import { BsFillStarFill } from "react-icons/bs";

type RepositoriesProps = {
  repos: Array<Repository>;
};

const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {
  return (
    <React.Fragment>
      {repos?.map((repo: Repository) => (
        <React.Fragment key={repo.id}>
          <div className="p-3 pb-7 ml-5 my-3 flex justify-between bg-gray-300">
            <div className="w-[75%]">
              <h1 className="font-bold mb-3 cursor-pointer">
                <a href={repo.html_url}>{repo.full_name}</a>
              </h1>
              <h2>{repo.description}</h2>
            </div>
            <div className="flex gap-4">
              <BsFillStarFill />
              <p className="mt-[-3px]">{repo.stargazers_count}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Repositories;
