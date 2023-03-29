import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { userColumns, userRows } from "../../databasesource";
import { Button } from "@mui/material";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Button variant="outlined" size="small">
              View
            </Button>
            <Button variant="outlined" color="error" size="small">
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableContainer">
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
