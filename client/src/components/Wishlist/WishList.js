import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";
import GameTable from "../Table/Table";
// import useStyles from "./stylesW.css";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 800,
    opacity: "20%",
  },
  root2: {
    minWidth: 700,
    height: 700,
    opacity: "20%",
  },
  media: {
    height: 0,
    paddingcenter: "100%", // 16:9
  },
}));

export default function Wishlist() {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Card className={classes.root}>
          <Box>
            <CardHeader title="WistList" subheader="Choose Your Game" />
          </Box>
        </Card>
      </Box>
      <br></br>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Card className={classes.root2}>
          <Box>
            <CardHeader title="Game list" subheader="" />

            <GameTable />
          </Box>
        </Card>
      </Box>
    </div>
  );
}
