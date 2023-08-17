import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import deleteIcon from "../img/delete-icon.png";

import "./Customers.css";
import Appbar from "../widgets/Appbar";
import GuestbookComponent from "../widgets/GuestbookComponent";
import AddCustomerPopUp from "../widgets/AddCustomerPopUp";
import GetDynamo from "../widgets/GetDynamo";

const Customers = () => {
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerPhoto, setCustomerPhoto] = useState("");
  const [customers, setCustomers] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new customer object
    const newCustomer = {
      name: customerFirstName.concat(" ").concat(customerLastName),
      photo: customerPhoto,
    };

    // Update the customers state with the new customer
    setCustomers([...customers, newCustomer]);

    // Clear form fields
    setCustomerName("");
    setCustomerPhoto("");

    // Close the modal
    closeModal();
  };

  const handleDeleteCustomer = (index) => {
    const newData = [...customers]; // Create a new array using the spread operator
    newData.splice(index, 1); // Remove the element at the specified index
    setCustomers(newData);
  };

  useEffect(() => {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const row = this.closest("tr");
        row.remove();
      });
    });

    const exportButton = document.getElementById("export-btn");
    const dataTable = document.getElementById("data-table");

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
    <>
      <Appbar />
      <div className="customers">
        <div className="customers-content">
          <div className="customers-header">
            <h2>Our Customers</h2>
            <div className="add-customer">
              <button id="export-btn">Export to Excel</button>
              <button className="btn-add-cust" onClick={openModal}>
                Add New Customer
              </button>
            </div>
          </div>
          <GetDynamo />
          <div>
            <table className="customer-table" id="data-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Customer Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.name}</td>
                    <td>
                      <img src={customer.photo} alt={customer.name} />
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteCustomer(index)}
                      >
                        <img
                          src={deleteIcon}
                          alt=""
                          width="50px"
                          height="50px"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <GuestbookComponent />
        </div>
        {showModal && (
          <AddCustomerPopUp
            handleSubmit={handleSubmit}
            setCustomerFirstName={setCustomerFirstName}
            setCustomerLastName={setCustomerLastName}
            setCustomerPhoto={setCustomerPhoto}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default Customers;
