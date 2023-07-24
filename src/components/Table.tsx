import { AgGridReact } from "ag-grid-react";
import { useMemo, useState, useCallback } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { TableData } from "../interfaces";
import moment from "moment";
import "ag-grid-enterprise";
import axios from "axios";

import {
  ColDef,
  GridReadyEvent,
  IServerSideDatasource,
  IServerSideGetRowsRequest,
} from "ag-grid-community";
import CustomLoading from "./CustomLoading";
const getServerSideDatasource: (server: any) => IServerSideDatasource = (
  server: any
) => {
  return {
    getRows: (params: any) => {
      setTimeout(() => {
        const response = server.getResponse(params.request);
        if (response.success) {
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow,
          });
        } else {
          params.fail();
        }
      }, 1000);
    },
  };
};
const getFakeServer: (allData: any[]) => any = (allData: any[]) => {
  return {
    getResponse: (request: IServerSideGetRowsRequest) => {
      console.log(
        "asking for rows: " + request.startRow + " to " + request.endRow
      );
      const rowsThisPage = allData.slice(request.startRow, request.endRow);
      const lastRow =
        allData.length <= (request.endRow || 0) ? allData.length : -1;
      return {
        success: true,
        rows: rowsThisPage,
        lastRow: lastRow,
      };
    },
  };
};

const Table = () => {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
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
  const loadingCellRenderer = useMemo(() => {
    return CustomLoading;
  }, []);
  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: "One moment please...",
    };
  }, []);

  const onGridReady = useCallback(async (params: GridReadyEvent) => {
    try {
      const response = await axios.get(
        "https://data.binance.com/api/v3/ticker/24hr"
      );
      const { data }: { data: TableData[] } = response;
      let idSequence = 0;
      console.log(data);
      data.forEach((item: any) => {
        item.id = idSequence++;
      });
      const server: any = getFakeServer(data);
      const datasource: IServerSideDatasource = getServerSideDatasource(server);
      params.api!.setServerSideDatasource(datasource);
    } catch (error) {
      console.error(error);
    }
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
          columnDefs={columnDefs}
          defaultColDef={columnConfig}
          rowData={rowData}
          loadingCellRenderer={loadingCellRenderer}
          loadingCellRendererParams={loadingCellRendererParams}
          cacheBlockSize={20}
          maxBlocksInCache={10}
          onGridReady={onGridReady}
          animateRows={true}
          pagination={true}
          rowModelType={"serverSide"}
        />
      </div>
    </div>
  );
};

export default Table;
