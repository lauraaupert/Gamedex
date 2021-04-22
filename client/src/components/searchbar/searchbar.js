import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import NavBar from "../navbar/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    backgroundColor: fade(theme.palette.common.white, .50),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, .50),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      marginTop: 400,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const login = [
  //   { id: 1, cost: "Snow", Name: "Jon", platform: 35 },
  //   { id: 2, cost: "Rain", Name: "Jess", platform: 50 },
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
              href="/login"
              mergin="right"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      )}
      <br></br>

      <div className="form-group">
        <div className={classes.root}>
          <div className={classes.search}>
            <h1>Search for a game</h1>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <button
              //   onClick={props.handleFormSubmit}
              className="btn btn-primary mt-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
