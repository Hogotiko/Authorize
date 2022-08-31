export interface ILogin {
    isAuth?: boolean | null;
    setIsAuth: (isAuth: boolean | null) => void;
  }

export  type FormData = {
    userName: string;
    password: string;
  };