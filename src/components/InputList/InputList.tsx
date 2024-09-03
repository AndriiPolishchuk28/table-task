import { FC, ChangeEvent } from "react";
import { TextField, InputAdornment, TableCell } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { clearFilter, setFilter } from "../../redux/users/usersSlice";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/users/selectors";
import { IUserValues } from "../../redux/users/types";

interface InputListProps {
  items: Array<keyof IUserValues>;
}

const InputList: FC<InputListProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    dispatch(setFilter({ name, value }));
  };

  const handleRemoveInput = (name: string): void => {
    dispatch(clearFilter(name));
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
            value={filters[item]}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon
                      onClick={() => handleRemoveInput(item)}
                      sx={{ cursor: "pointer" }}
                      data-name={item.toLowerCase()}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </TableCell>
      ))}
    </>
  );
};

export default InputList;
