import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const Table = () => {
  const [columnDefs, setColumnDefs] = useState([
    { field: "symbol" },
    { field: "priceChange" },
    { field: "priceChangePercent" },
    { field: "weightedAvgPrice" },
    { field: "prevClosePrice" },
    { field: "lastPrice" },
    { field: "lastQty" },
    { field: "bidPrice" },
    { field: "bidQty" },
    { field: "askPrice" },
    { field: "askQty" },
    { field: "openPrice" },
    { field: "highPrice" },
    { field: "lowPrice" },
    { field: "volume" },
    { field: "quoteVolume" },
    { field: "openTime" },
    { field: "closeTime" },
    { field: "firstId" },
    { field: "lastId" },
    { field: "count" },
  ]);
  const columnConfig = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "100vh" }),
    []
  );
  const gridStyle = useMemo(
    () => ({
      height: "100%",
      width: "100%",
    }),
    []
  );
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://data.binance.com/api/v3/ticker/24hr"
        );
        console.log(response.data);
        setRowData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine-dark" style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={columnConfig}
          animateRows={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Table;
