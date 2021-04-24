import React from "react";
import Api from "../../utils/API";

function Games(props) {
  const handleSave = (yourgame) => {
    Api.saveGame(yourgame);
  };
  return props.game.map(function (gameData) {
    return (
      <div className="gameResult" key={props.gameData.id}>
        <div className="row">
          <div className="col-md-9">
            <p className="title">{props.gameData.title}</p>
            <p className="platform">{props.gameData.platforms}</p>
            <p className="image">{props.gameData.images}</p>
          </div>

          <br />

          <div className="col-md-3">
            <a href={props.gameData.saleInfo.buyLink}>
              {" "}
              <button className="btn viewBtn">
                <span className="btnSpan">View</span>
              </button>
            </a>
            <button
              className="btn saveBtn"
              onClick={() =>
                handleSave({
                  title: gameData.title,
                  platform: gameData.platforms,
                  image: gameData.imageLinks.thumbnail,
                  link: gameData.saleInfo.buyLink,
                })
              }
            >
              <span className="btnSpan">Save</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              src={
                props.gameData.imageLinks
                  ? props.gameData.imageLinks.thumbnail
                  : ""
              }
              alt={props.gameData.title}
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  });
}

export default Games;
