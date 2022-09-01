import { Alert, Circle, UserEmptyError } from "./StyledComponents";
import img from "../assets/icon.svg";
import { IAlertModal } from "../types";

export const AlertModal: React.FC<IAlertModal> = ({ userName }) => (
  <Alert>
    <Circle>
      <img alt="icon" src={img} />
    </Circle>
    <UserEmptyError>Пользователя {userName} не существует</UserEmptyError>
  </Alert>
);
