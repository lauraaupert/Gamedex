import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import Result from "../../components/results";
import API from "../../utils/API";
import Find from "../../components/find";

const columns = [
  { field: "image", headerName: "Image", width: 130 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "platform", headerName: "Platform", width: 200 },
];

// const rows = [{ id: 1, cost: "Snow", Name: "Jon", platform: 35 }];

export default function GameTable(props) {
  const [library, setLibrary] = useState(null);

  const recover = function () {
    API.getGames().then(function (res) {
      setLibrary(res.data);
    });
  };
  useEffect(() => {
    if (!library) {
      recover();
    }
  }, [library]);

  const deletion = function deletion(id) {
    API.deleteGames(id).then(function (res) {
      recover();
    });
  };
  return (
    <div>
      library.map((games) ={" "}
      {
        <div
          style={{
            height: 400,
            width: "100%",
            backgroundColor: "white",
            opacity: "50%",
          }}
        >
          <DataGrid
            rows={props.rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            title={props.games.title}
            image={props.games.image}
            platform={props.games.platform}
          />
          <Find
            handleSubmit={props.handleSubmit}
            handleTyping={props.handleTyping}
          />
          <button
            className="btn deleteBtn"
            onClick={() => deletion(props.games._id)}
          >
            Delete
          </button>
        </div>
        // <div className="container">
        //   <div className="bookResult" key={games._id}>
        //     <div className="row">
        //       <div className="col-md-9">
        //         <p className="title">{games.title}</p>
        //         <p className="author">{games.authors}</p>
        //       </div>
        //       <div className="col-md-3">
        //         <a href={games.link}>
        //           {" "}
        //           <button
        //             className="btn viewBtn"
        //             href={games.link}
        //             target="_blank"
        //           >
        //             View
        //           </button>
        //         </a>

        //       </div>
        //     </div>
        //     <div className="row">
        //       <div className="col-md-3">
        //         <img
        //           src={
        //             games.image
        //               ? games.image
        //               : "https://i.imgur.com/lrPn7VM.jpeg"
        //           }
        //           alt={games.title}
        //         />
        //       </div>
        //       <div className="col-md-9">
        //         <p className="plot">{games.description}</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      }
      )
    </div>
  );
}
