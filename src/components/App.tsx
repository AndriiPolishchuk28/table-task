import { FC, useEffect } from "react";
import TableList from "./TableList/TableList";
import { useAppDispatch } from "../hooks/hooks";
import { selectUsers } from "../redux/users/selectors";
import { getUsers } from "../redux/users/operations";
import { useSelector } from "react-redux";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);

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
