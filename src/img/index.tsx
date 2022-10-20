import logo from "./logo.jpg";
import home from "./icons/home.svg";
import arrow from "./icons/arrow.svg";
import salary from "./icons/salary.svg";
import dateOfBirth from "./icons/dateOfBirth.svg";

export interface Types {
  [key: string]: string;
}

const img: Types = {
  logo,
  home,
  arrow,
  salary,
  dateOfBirth
};

export default img;
