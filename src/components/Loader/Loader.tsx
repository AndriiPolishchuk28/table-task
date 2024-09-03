import { Bars } from "react-loader-spinner";
import scss from "./Loader.module.scss";

export const Loader = () => {
  return (
    <>
      <Bars
        height="40"
        width="80"
        color="#3f51b5"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass={scss.loader}
        visible={true}
      />
    </>
  );
};
