import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileButton,
  ProfileContainer,
  ProfileText,
  UserText,
} from "../components/StyledComponents";
import { ILogin } from "../types";
import { deleteToken, deleteUser, getUser } from "../utils";

export const ProfilePage: React.FC<ILogin> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const { userName } = getUser();

  const handleClick = () => {
    deleteUser();
    deleteToken();
    setIsAuth(null);
    navigate("/");
  };

  return (
    <ProfileContainer>
      <ProfileText>
        Здравствуйте, <UserText>{userName}</UserText>
      </ProfileText>
      <ProfileButton onClick={handleClick}>Выйти</ProfileButton>
    </ProfileContainer>
  );
};
