import { FC } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { User } from "../../redux/users/types";
import InputList from "../InputList/InputList";
import { useAppSelector } from "../../hooks/hooks";
import { selectFilters } from "../../redux/users/selectors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const tableHeadData: string[] = ["Name", "Username", "Email", "Phone"];

interface TableListProps {
  users: User[];
}

const TableList: FC<TableListProps> = ({ users }) => {
  const filters = useAppSelector(selectFilters);

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
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadData.map((name, id) => (
              <StyledTableCell key={id}>{name}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <InputList items={tableHeadData} />
          </TableRow>
          {filteredUsers.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.username}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
