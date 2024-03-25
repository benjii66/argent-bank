import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';

const accountsData = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ];

export const Accounts = () => {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account, index) => (
        <section className="account" key={index} aria-labelledby={`account-title-${index}`}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to="/transactions">
              <Button
                title = "View transactions"
                style = "transaction-button"
              />
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};
