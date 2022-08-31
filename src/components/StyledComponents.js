import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: #fff;
  width: 100%;
  text-align: center;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #000000;
`;

export const MyLabel = styled.label`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  cursor: pointer;
`;

export const MyButton = styled.button`
  margin-top: 40px;
  background: #4a67ff;
  border-radius: 8px;
  border: none;
  width: 640px;
  height: 60px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const MyInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  background: #f5f5f5;
  border: none;
  width: 640px;
  height: 60px;
  caret-color: #e26f6f;
`;

export const Checkbox = styled.input`
  margin-right: 15px;
  width: 14px;
  height: 14px;
  border-radius: 2px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffc8c8;
`;

export const Alert = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  width: 640px;
  height: 60px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
`;

export const UserEmptyError = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const UserRequireError = styled.div`
  color: #e26f6f;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.7px;
  margin: -9px 0 20px 0;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const ProfileText = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

export const UserText = styled.span`
  font-weight: 700;
`;

export const ProfileButton = styled.button`
  margin-top: 50px;
  width: 200px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
