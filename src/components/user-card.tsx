import React from "react";

type UserCard = {
  id: number;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  children: React.ReactNode;
  user: string;
};

const UserCard: React.FC<UserCard> = ({
  id,
  setClicked,
  setCurrentUser,
  clicked,
  user,
  children,
}) => (
  <div
    className="bg-gray-200 border border-gray-200"
    key={id}
    onClick={() => {
      setCurrentUser(user);
      setClicked(!clicked);
    }}
  >
    {children}
  </div>
);

export default UserCard;
