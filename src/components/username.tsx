import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

type Username = {
  user: string;
  currentUser: string;
  clicked: boolean;
};
const Username: React.FC<Username> = ({ user, currentUser, clicked }) => (
  <p className="p-3 bg-white flex justify-between cursor-pointer">
    {user}
    {clicked && currentUser === user ? <BsChevronDown /> : <BsChevronUp />}
  </p>
);

export default Username;
