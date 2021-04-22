import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import { Button, AppBar, Toolbar } from "@material-ui/core";
import NavBar from "../NavBar";
// import GameTable from "../Table/Table";
// import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  inputRoot: {
    color: "inherit",
  },
}));

const login = [
  { id: 1, cost: "Snow", Name: "Jon", platform: 35 },
  { id: 2, cost: "Rain", Name: "Jess", platform: 50 },
];

export default function SearchBar() {
  const classes = useStyles();
  const btnStyle = { backgroundColor: "#00801c", margin: "8px 0" };
  const NavStlye = {
    background: "darkgreen",
    color: "black",
    fontvariant: "all-petite-caps",
  };

  return (
    <div>
      {login.length ? (
        <NavBar />
      ) : (
        <AppBar position="static">
          <Toolbar style={NavStlye}>
            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="secondary"
              halfWidth
              href="/login"
              mergin="right"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      )}
      <br></br>
      <div style={classes}>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Game Choice</span>
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="header-search"
            placeholder="Search Games"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* <GameTable /> */}
    </div>
  );
}
