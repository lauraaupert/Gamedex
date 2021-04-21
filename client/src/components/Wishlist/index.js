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
    opacity: "50%",
  },
  root2: {
    minWidth: 700,
    height: 700,
    opacity: "50%",
  },
  media: {
    height: 0,
    paddingcenter: "100%", // 16:9
  },
}));
// Add api here with this.state
const rows = [
  { id: 1, cost: "Snow", Name: "Jon", platform: 35 },
  { id: 2, cost: "Rain", Name: "Jess", platform: 50 },
];

function Wishlist() {
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
      {rows.length ? (
        <Box display="flex" justifyContent="center" textAlign="center">
          <Card className={classes.root2}>
            <Box>
              <CardHeader title="Game list" subheader="" />

              <GameTable rows={rows} />
            </Box>
          </Card>
        </Box>
      ) : (
        <h1>Nothing is in here go away</h1>
      )}
    </div>
  );
}
export default Wishlist;
