import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Types } from "./Types";
import "./PriceTableList.css";

const PriceTableList = (props: IPriceTableListProps) => {
  return (
    <TableContainer className="maxHeight: 400" component={Paper}>
      <Table className="minWidth: 650" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              className="priceTableListTableCellHead"
              style={{ color: props.textColor }}
            >
              Day
            </TableCell>
            <TableCell
              className="priceTableListTableCellHead"
              style={{ color: props.textColor }}
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((d: Types.Data, index: number) => (
            <TableRow key={d.price}>
              <TableCell
                className="priceTableListTableCell"
                style={{ color: props.textColor }}
                component="th"
                scope="row"
              >
                {index + 1}
              </TableCell>
              <TableCell
                className="priceTableListTableCell"
                style={{ color: props.textColor }}
                component="th"
                scope="row"
              >
                ${parseFloat(d.price as unknown as string).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTableList;

interface IPriceTableListProps {
  data: Types.Data[];
  textColor: string;
}
