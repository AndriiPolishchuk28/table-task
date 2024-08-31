import { FC, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import { useAppDispatch } from "../../hooks/hooks";
import { setFilter } from "../../redux/users/usersSlice";

interface InputListProps {
  items: string[];
}

const InputList: FC<InputListProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setFilter({ name, value }));
  };
  return (
    <>
      {items.map((item) => (
        <TableCell key={item}>
          <TextField
            onChange={handleChange}
            name={item.toLowerCase()}
            label={`Filter by ${item}`}
            variant="standard"
          />
        </TableCell>
      ))}
    </>
  );
};

export default InputList;
