import React, { Fragment } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import Navbar from "../NavBar/index";
import API from "../../utils/API";
import axios from "axios";
import GameTable from "../Table";
import "../../components/searchbar.css"

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
    backgroundColor: fade(theme.palette.common.white, 0.5),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      textAlign: "-webkit-center",
      marginLeft: "500px",
      marginRight: "400px",
      width: "auto",
      marginTop: 150,
    },
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

export default function SearchBar() {
  const classes = useStyles();
  const btnStyle = { backgroundColor: "green", margin: "8px 0" };
  const NavStlye = {
    background: "darkgreen",
    color: "black",
    fontvariant: "all-petite-caps",
  };

  const login = [
    // { id: 1, cost: "Snow", Name: "Jon", platform: 35 },
    // { id: 2, cost: "Rain", Name: "Jess", platform: 50 },
  ];
  const gameInput = [{ id: 1, image: "Snow", name: "Jon", platform: 35 }];

  return (
    <div>
      {login.length ? (
        <Navbar />
      ) : (
        <AppBar position="static">
          <Toolbar style={NavStlye}>
            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="secondary"
              href="/login"
            >
              Login
            </Button>
            <h1 style={{textAlign: 'center', fontFamily: "Kaushan Script", marginLeft:"825px"}}> GameDex</h1>
          </Toolbar>
        </AppBar>
      )}

      <div className="form-group">
        <div className={classes.root}>
          <div className={classes.search}>
            <h1 style={{textAlign: 'center', background:"darkgreen", fontVariantCaps: "all-petite-caps"}}>          
            Search for a game</h1>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <button
              onClick={API.getGame}
              id="Searchy"
              className="btn btn-primary mt-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <br></br>

      {gameInput.length ? (
        <GameTable rows={gameInput} />
      ) : (
        <h1> What game you want? </h1>
      )}
    </div>
  );
}
