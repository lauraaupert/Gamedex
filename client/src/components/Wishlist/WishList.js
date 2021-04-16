import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";
import GameTable from "../Table/Table";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 800,
  },
  root2: {
    minWidth: 700,
    height: 700,
  },
  media: {
    height: 0,
    paddingcenter: "100%", // 16:9
  },
  // body: {
  //   background: rgb(34,193,195),
  //   background: linear-gradient(
  //     0deg
  //     rgba(34,193,195,1) 0%
  //     rgba(4,62,25,0.9724264705882353) 36%
  //     );
  // }
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
