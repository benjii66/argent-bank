import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const userInfoTemp = [
    {
        name: "Tony Stark",
        accounts: [
            {
                account: "x8349",
                name: "Argent Bank Checking",
                balance: 2082.79,
                description: "Available Balance"
            },
            {
                account: "x8350",
                name: "Argent Bank Savings",
                balance: 10928.42,
                description: "Available Balance"
            },
            {
                account: "x8351",
                name: "Argent Bank Credit Card",
                balance: 184,
                description: "Current Balance"
            }
        ]
    }
];



export const User = () => {

  const {userInfo} = useSelector(state => state.userLogin);
 
  if (!userInfo || !userInfoTemp) return <Link to="/" className='main-nav-item'>Non connecté...</Link >;

  const user = userInfoTemp[0];
  
  return (
    <>
      <div className="header">
        {/* pour l'instant j'affiche le nom temporaire car je n'ai pas encore trouvé comment récupérer de la bdd  */}
        <h1>Welcome back<br />{userInfo.name} {user.name}!</h1>
        {/* petit link aussi  */}
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {user.accounts.map(account => (
        <section className="account" key={account.account}>
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