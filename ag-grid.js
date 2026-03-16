const localeText = {
  rowGroupColumnsEmptyMessage: "Drag here to set rows",
  rowGroupColumns: "Rows",
  pivotColumns: "Columns"
};

<AgGridReact
  localeText={localeText}
/>

    useEffect(() => {
  setTimeout(() => {
    const rowGroups = document.querySelector(
      ".ag-column-drop-row-group .ag-column-drop-title span"
    );

    const columnLabels = document.querySelector(
      ".ag-column-drop-pivot .ag-column-drop-title span"
    );

    if (rowGroups) rowGroups.textContent = "Rows";
    if (columnLabels) columnLabels.textContent = "Columns";
  }, 0);
}, []);
