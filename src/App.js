/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Custormer";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  withStyles,
  Paper,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "이미지url",
    name: "홍길동",
    birthday: "990091",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "이미지url2",
    name: "나나나",
    birthday: "250020",
    gender: "남자",
    job: "중딩",
  },
  {
    id: 3,
    image: "이미지url3",
    name: "너너너",
    birthday: "220020",
    gender: "여자",
    job: "고딩",
  },
];
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table classesName={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
