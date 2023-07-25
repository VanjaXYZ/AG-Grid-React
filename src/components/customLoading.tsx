import { ILoadingCellRendererParams } from "ag-grid-community";
import "./customLoading.css";

export default (
  props: ILoadingCellRendererParams & { loadingMessage: string }
) => {
  return (
    <div className="ag-custom-loading-cell loader">
      <i className="fas fa-spinner fa-pulse"></i>{" "}
      <span> {props.loadingMessage}</span>
    </div>
  );
};
