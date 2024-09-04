import { Bars } from "react-loader-spinner";
import scss from "./Loader.module.scss";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <Bars
      height="40"
      width="80"
      color="#3f51b5"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass={scss.loader}
      visible={true}
    />
  );
};
