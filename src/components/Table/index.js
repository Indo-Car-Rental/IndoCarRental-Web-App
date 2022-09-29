import React, { useEffect, useState } from "react";
import moment from "moment";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Ripple } from "primereact/ripple";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import "primeicons/primeicons.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/action/dataAction";

const Table = () => {
  const { dataOrder } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  );

  useEffect(() => {
    dispatch(getData());

    // eslint-disable-next-line
  }, []);

  const onCustomPage1 = (event) => {
    setFirst1(event.first);
    setRows1(event.rows);
    setCurrentPage(event.page + 1);
  };

  const onPageInputKeyDown = (event, options) => {
    if (event.key === "Enter") {
      const page = parseInt(currentPage);
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        );
      } else {
        const first = currentPage ? options.rows * (page - 1) : 0;

        setFirst1(first);
        setPageInputTooltip("Press 'Enter' key to go to this page.");
      }
    }
  };

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "IDR",
    });
  };

  const formatDates = (value) => {
    return moment(value).format("DD MMMM YYYY");
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.total_price);
  };

  const datesBodyTemplateFinish = (rowData) => {
    return formatDates(rowData.finish_rent_at);
  };

  const datesBodyTemplateStart = (rowData) => {
    return formatDates(rowData.start_rent_at);
  };

  const template1 = {
    layout:
      "RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink ",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ];

      const limitStyle = {
        margin: "0px",
        marginLeft: "10px",
        padding: "0px",
      };

      return (
        <div>
          <p style={limitStyle}>Limit</p>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </div>
      );
    },
    CurrentPageReport: (options) => {
      const jumpToStyle = {
        margin: "0px",
        marginLeft: "5px",
        padding: "0px",
      };

      return (
        <span
          className="mx-3"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          <p style={jumpToStyle}>Jump to page</p>
          <InputText
            size="2"
            className="ml-1"
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      );
    },
  };

  return (
    <div>
      <div className="card">
        <DataTable
          value={dataOrder.data}
          paginator
          paginatorTemplate={template1}
          first={first1}
          rows={rows1}
          onPage={onCustomPage1}
          responsiveLayout="scroll"
        >
          <Column field="id" header="No" sortable></Column>
          <Column field="User.email" header="User Email" sortable></Column>
          <Column field="CarId" header="Car" sortable></Column>
          <Column
            field="start_rent_at"
            header="Start Rent"
            body={datesBodyTemplateStart}
            sortable
          ></Column>
          <Column
            field="finish_rent_at"
            header="Finish Rent"
            body={datesBodyTemplateFinish}
            sortable
          ></Column>
          <Column
            field="total_price"
            header="Price"
            body={priceBodyTemplate}
            sortable
          ></Column>
          <Column field="User.role" header="Category" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Table;
