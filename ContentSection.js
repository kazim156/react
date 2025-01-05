import React, { useState } from "react";


function ContentSection() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({ name: "", qty: "", amount: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    setOrders([...orders, formData]);
    setFormData({ name: "", qty: "", amount: "" });
  };

  return (
    <div className="content-section">
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          value={formData.qty}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddOrder}>
          Add
        </button>
      </form>
      <table className="orders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContentSection;