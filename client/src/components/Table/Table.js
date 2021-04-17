import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "image", headerName: "Image", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },

  {
    field: "platform",
    headerName: "Plaform",

    sortable: true,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue("firstName") || ""} ${
    //     params.getValue("lastName") || ""
    //   }`,
  },
];

const rows = [{ id: 1, cost: "Snow", Name: "Jon", platform: 35 }];

export default (GameTable) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};
