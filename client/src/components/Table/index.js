import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import Result from "../../components/result";
import API from "../../util/API";
import Find from "../../components/Search";

const columns = [
  { field: "image", headerName: "Image", width: 130 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "platform", headerName: "Platform", width: 200 },
];

// const rows = [{ id: 1, cost: "Snow", Name: "Jon", platform: 35 }];

export default function GameTable(props) {
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
