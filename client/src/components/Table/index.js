import { DataGrid } from "@material-ui/data-grid";
import React from "react";
// import Result from "../../components/result";
// import API from "../../util/API";
// import Find from "../../components/Search";

const columns = [
  { field: "image", headerName: "Image", width: 130 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "platform", headerName: "Platform", width: 200 },
];

// const rows = [{ id: 1, cost: "Snow", Name: "Jon", platform: 35 }];

export default function GameTable(props) {
  // const [games, setGames] = useState({
  //   gameList: [],
  // });
  // const [saveGames, setSaveGames] = useState({
  //   saveGames: [],
  // });
  // const [typing, setTyping] = useState({
  //   searchTerm: "",
  // });
  // const handleSave = function handleSave(gameData) {
  //   API.saveGame(gameData);
  //   setSaveGames({
  //     ...saveGames,
  //     savedGames: gameData,
  //   });
  // };
  // const handleTyping = function handleTyping(event) {
  //   event.preventDefault();
  //   setTyping({
  //     ...typing,
  //     searchTerm: event.target.value,
  //   });
  // };
  // const handleSubmit = function handleSubmit() {
  //   API.googleSearch(typing.searchTerm).then(function (results) {
  //     setGames({
  //       ...games,
  //       gameList: results.data.items,
  //     });
  //   });
  // };
  // return (
  //   <div>
  //     <Find handleSubmit={handleSubmit} handleTyping={handleTyping} />

  //     {games.gameList.length > 0 ? (
  //       <Result game={games.gameList} handleSave={handleSave} />
  //     ) : (
  //       ""
  //     )}
  //   </div>
  // );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
