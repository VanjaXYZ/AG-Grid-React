import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { TableData } from "../interfaces";
import moment from "moment";

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
    {
      field: "openTime",
      valueFormatter: (params: any) =>
        moment(params.value).format("DD MMM, YYYY"),
    },
    {
      field: "closeTime",
      valueFormatter: (params: any) =>
        moment(params.value).format("DD MMM, YYYY"),
    },
    { field: "firstId" },
    { field: "lastId" },
    { field: "count" },
  ]);

  const [rowData, setRowData] = useState<TableData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://data.binance.com/api/v3/ticker/24hr"
        );
        const { data }: { data: TableData[] } = response;

        console.log(data);
        setRowData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

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

  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine-dark" style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={columnConfig}
          animateRows={true}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
    </div>
  );
};

export default Table;
