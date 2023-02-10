import React from "react";

type UserCard = {
  key: number;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  children: React.ReactNode;
  user: string;
};

const UserCard: React.FC<UserCard> = ({
  key,
  setClicked,
  setCurrentUser,
  clicked,
  user,
  children,
}) => (
  <div
    className="bg-gray-200 border border-gray-200"
    key={key}
    onClick={() => {
      setCurrentUser(user);
      setClicked(!clicked);
    }}
  >
    {children}
  </div>
);

export default UserCard;
