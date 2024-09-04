import { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import InputList from "../InputList/InputList";
import {
  selectError,
  selectFilters,
  selectLoading,
  selectUsers,
} from "../../redux/users/selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import { getUsers } from "../../redux/users/operations";
import { Loader } from "../Loader/Loader";
import { IUserValues } from "../../redux/users/types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const tableHeadData: Array<keyof IUserValues> = [
  "name",
  "username",
  "email",
  "phone",
];

const TableList: FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.includes(filters.phone)
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="users table">
        <TableHead>
          <TableRow>
            {tableHeadData.map((name, id) => (
              <StyledTableCell sx={{ textTransform: "capitalize" }} key={id}>
                {name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                {error}
              </TableCell>
            </TableRow>
          ) : (
            <>
              <TableRow>
                {!loading && users.length > 0 && (
                  <InputList items={tableHeadData} />
                )}
              </TableRow>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Loader />
                  </TableCell>
                </TableRow>
              ) : filteredUsers.length ? (
                filteredUsers.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.username}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.phone}</StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No found items with your filters
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
