import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUsers } from "../../redux/users/operations";
import { selectUsers } from "../../redux/users/selectors";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
