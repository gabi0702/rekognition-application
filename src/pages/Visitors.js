import { React, useEffect } from "react";
import AppBar from "../widgets/Appbar";
import App from "../App";
import * as XLSX from "xlsx";

const Visitors = () => {
  useEffect(() => {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const row = this.closest("tr");
        row.remove();
      });
    });

    const exportButton = document.getElementById("export-btn");
    const dataTable = document.getElementById("customer-table");

    exportButton.addEventListener("click", function () {
      const tableData = [];

      // Get table headers
      const headers = [];
      dataTable.querySelectorAll("thead th").forEach((header) => {
        headers.push(header.textContent);
      });
      tableData.push(headers);

      // Get table rows
      dataTable.querySelectorAll("tbody tr").forEach((row) => {
        const rowData = [];
        row.querySelectorAll("td").forEach((cell) => {
          rowData.push(cell.textContent);
        });
        tableData.push(rowData);
      });

      // Create a new workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.aoa_to_sheet(tableData);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

      // Generate and download the Excel file
      XLSX.writeFile(workbook, "table_data.xlsx");
    });
  }, []);

  return (
    <div>
      <AppBar />
      <div className="customers-content">
        <div className="dv-cont">
          <h2>Our Visitors Entering</h2>
          <button id="export-btn">Export to Excel</button>
        </div>
        <table className="customer-table" id="customer-table">
          <tr>
            <th>Photo</th>
            <th>date and time</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="John Doe's picture"
              />
            </td>
            <td>08/08/2023 12:35:31</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="Jane Doe's picture"
              />
            </td>
            <td>08/08/2023 12:34:05</td>
          </tr>
          <tr>
            <td>
              <img
                src="https://picsum.photos/200/200"
                alt="Peter Smith's picture"
              />
            </td>
            <td>08/08/2023 12:33:33</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Visitors;
