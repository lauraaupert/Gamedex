import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 800,
    // height: 2000,
  },
  root2: {
    minWidth: 700,
    height: 700,
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
      <Box display="flex" justifyContent="center">
        <Card className={classes.root}>
          <Box>
            <CardHeader title="WistList" subheader="Choose Your Game" />
          </Box>
        </Card>
      </Box>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1} bgcolor="grey.300"></Box>

        <Card className={classes.root2}>
          <Box>
            <CardHeader title="list" subheader="" />
          </Box>
        </Card>
      </Box>
    </div>
  );
}
