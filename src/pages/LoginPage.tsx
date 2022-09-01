import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Alert,
  Checkbox,
  CheckboxContainer,
  Circle,
  LoginPageContainer,
  MyButton,
  MyInput,
  MyLabel,
  UserEmptyError,
  UserRequireError,
} from "../components/StyledComponents";
import "./LoginPage.scss";
import { FormData, ILogin } from "../types";
import { getUser, setToken, setUser } from "../utils";

export const LoginPage: React.FC<ILogin> = ({ isAuth, setIsAuth }) => {
  const [userName, setUserName] = useState("");
  const isLoadingRef = useRef({ loading: false });
  const navigate = useNavigate();
  const person = getUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: "all" });

  useEffect(() => {
    setUser();
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setUserName(data.userName);
    isLoadingRef.current.loading = true;

    if (
      person.userName === data.userName &&
      person.password === data.password
    ) {
      setToken();
      setIsAuth(true);
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } else {
      setIsAuth(false);
      setTimeout(() => {
        setIsAuth(null);
        isLoadingRef.current.loading = false;
        reset();
      }, 4000);
    }
  };

  return (
    <LoginPageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isAuth === false && (
          <Alert>
            <Circle>
              <img alt="icon" src="assets/icon.svg" />
            </Circle>
            <UserEmptyError>
              Пользователя {userName} не существует
            </UserEmptyError>
          </Alert>
        )}

        <MyLabel>Логин</MyLabel>
        <MyInput
          className={
            errors?.userName?.message ? "form-control focused" : "form-control"
          }
          style={{}}
          type="email"
          {...register("userName", {
            required: "Обязательное поле",
          })}
        />
        <UserRequireError>
          {errors?.userName && (
            <span>{errors?.userName?.message || "Error !"}</span>
          )}
        </UserRequireError>

        <MyLabel>Пароль</MyLabel>
        <MyInput
          className={
            errors?.password?.message ? "form-control focused" : "form-control"
          }
          type="password"
          {...register("password", {
            required: "Обязательное поле",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
        />
        <UserRequireError>
          {errors?.password && <span>{errors?.password?.message}</span>}
        </UserRequireError>

        <CheckboxContainer>
          <Checkbox type="checkbox" className="checkbox" id="myinput" />
          <MyLabel className="label-checkbox" htmlFor="myinput">
            Запомнить пароль
          </MyLabel>
        </CheckboxContainer>
        <div>
          <MyButton
            className="loading"
            type="submit"
            disabled={isLoadingRef.current.loading}
          >
            Войти
          </MyButton>
        </div>
      </form>
    </LoginPageContainer>
  );
};
