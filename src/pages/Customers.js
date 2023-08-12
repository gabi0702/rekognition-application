import { Link } from "react-router-dom";
import { React, useState } from "react";
import "./Customers.css";
import Appbar from "../widgets/Appbar";

const Customers = () => {
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
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
      name: customerName,
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
  return (
    <>
      <Appbar />

      <div className="customers">
        <div className="customers-content">
          <div className="customers-header">
            <h2>Our Customers</h2>
            <div className="add-customer">
              <button className="btn" onClick={openModal}>
                Add New Customer
              </button>
            </div>
          </div>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Customer Photo</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>
                    <img src={customer.photo} alt={customer.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="popup">
            <div className="popup-content">
              <h2>Add New Customer</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="customerName">Customer Name:</label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <label htmlFor="customerPhoto">Customer Photo:</label>
                <input
                  type="file"
                  id="customerPhoto"
                  onChange={(e) =>
                    setCustomerPhoto(URL.createObjectURL(e.target.files[0]))
                  }
                  accept="image/*"
                  required
                />
                <button type="submit" className="btn">
                  Add Customer
                </button>
              </form>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Customers;
