import React from 'react';

const userInfo = [
    {
        name: "Tony Stark",
        accounts: [
            {
                id_account: "x8349",
                name: "Argent Bank Checking",
                balance: 2082.79,
                description: "Available Balance"
            },
            {
                id_account: "x8349",
                name: "Argent Bank Savings",
                balance: 10928.42,
                description: "Available Balance"
            },
            {
                id_account: "x8349",
                name: "Argent Bank Credit Card",
                balance: 184,
                description: "Current Balance"
            }
        ]
    }
];

export const User = () => {

  const user = userInfo[0];
  
  return (
    <>
      <div className="header">
        <h1>Welcome back<br />{user.name}!</h1>
        {/* petit link aussi  */}
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {user.accounts.map(account => (
        <section className="account" key={account.id_account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.name} ({account.id_account})</h3>
            <p className="account-amount">${account.balance.toFixed(2)}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            {/* petit link  */}
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
};