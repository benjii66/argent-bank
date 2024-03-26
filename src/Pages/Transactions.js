import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const transactionData = [
  {
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    details: {
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem Ipsum',
    },
  },
  {
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    details: {
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem Ipsum',
    },
  },
  {
    date: '27/02/20',
    description: 'Golden Sun Bakery',
    amount: '$8.00',
    balance: '$298.00',
    details: {
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem Ipsum',
    },
  }
];

export const Transactions = () => {

  // State to know which transaction is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to open/close transaction details
  const handleDetails = (index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="transaction-wrapper">
      <div className="transaction-label-wrapper">
        <p className="transaction-label">Date:</p>
        <p className="transaction-label">Description:</p>
        <p className="transaction-label">Amount:</p>
        <p className="transaction-label">Balance:</p>
      </div>

      {transactionData.map((transaction, index) => (
        <section className="transaction" key={index}>
          <div className="transaction-content-wrapper">
            <div className="transaction-label-value">
              <p className="transaction-value">{transaction.date}</p>
            </div>
            <div className="transaction-label-value">
              <p className="transaction-value">{transaction.description}</p>
            </div>
            <div className="transaction-label-value">
              <p className="transaction-value">{transaction.amount}</p>
            </div>
            <div className="transaction-label-value">
              <p className="transaction-value">{transaction.balance}</p>
            </div>
            <p className="arrow-icon" onClick={() => handleDetails(index)}  aria-expanded={openIndex === index}>
              {openIndex === index ? '▲' : '▼'}
            </p>
          </div>
          {openIndex === index && (
            <div className="transaction-details">
              <div className="details-container">
                <div className="transaction-details-label">
                  <p>Type:</p>
                  <p>Category:</p>
                  <p>Note:</p>
                </div>
                <div className="transaction-details-value">
                  <p>{transaction.details.transactionType}</p>
                  
                  {/* fake links to edit the category and note  */}
                  <Link to="/" aria-label={`Edit ${transaction.details.category} category`}>
                    <p className="edit-icon">{transaction.details.category}&#9998;</p>
                  </Link>
                  <Link to="/" aria-label={`Edit ${transaction.details.category} category`}>
                    <p className="edit-icon">{transaction.details.note}&#9998;</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};