import { FC, useEffect } from "react";
import TableList from "./TableList/TableList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectUsers } from "../redux/users/selectors";
import { getUsers } from "../redux/users/operations";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <TableList users={users} />
    </>
  );
};

export default App;
