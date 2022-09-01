import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Checkbox,
  CheckboxContainer,
  LoginPageContainer,
  MyButton,
  MyInput,
  MyLabel,
  UserRequireError,
} from "../components/StyledComponents";
import { IFormData, ILoginPage } from "../types";
import { getUser, setToken, setUser } from "../utils";
import styles from "../style/LoginPage.module.scss";
import { AlertModal } from "../components/AlertModal";

export const LoginPage: React.FC<ILoginPage> = ({ setIsAuth }) => {
  const [userName, setUserName] = useState("");
  const [modalError, setModalError] = useState<boolean>(false);
  const isLoadingRef = useRef({ loading: false });
  const navigate = useNavigate();
  const { userName: dataName, password: dataPassword } = getUser();

  useEffect(() => {
    setUser();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>({ mode: "all" });

  const handleSuccess = () => {
    setToken();
    setIsAuth(true);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  const handleError = () => {
    setModalError(true);
    setTimeout(() => {
      setModalError(false);
      isLoadingRef.current.loading = false;
      reset();
    }, 3000);
  };

  const addErrorClass = (isValid: boolean) => {
    return isValid ? `form-control ${styles.focused}` : "form-control";
  };

  const onSubmit: SubmitHandler<IFormData> = ({ userName, password }) => {
    setUserName(userName);
    const isValidUser = dataName === userName && dataPassword === password;
    isLoadingRef.current.loading = true;
    if (isValidUser) {
      handleSuccess();
    } else {
      handleError();
    }
  };

  return (
    <LoginPageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {modalError && <AlertModal userName={userName} />}

        <MyLabel>Логин</MyLabel>
        <MyInput
          className={addErrorClass(!!errors?.userName?.message)}
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
          className={addErrorClass(!!errors?.password?.message)}
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
          <Checkbox type="checkbox" className={styles.checkbox} id="myinput" />
          <MyLabel className={styles.labelCheckbox} htmlFor="myinput">
            Запомнить пароль
          </MyLabel>
        </CheckboxContainer>
        <div>
          <MyButton
            className={styles.loading}
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
