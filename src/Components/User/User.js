import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const User = () => {
const {userInfo} = useSelector(state => state.userLogin);
 
  if (!userInfo) return <Link to="/" className='main-nav-item'>Non connecté...</Link >;
  
  return (
    <>
      <div className="header">
        <h1>Welcome back<br />{userInfo.userName} !</h1>
        {/* petit link aussi  */}
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      </>
      // {user.accounts.map(account => (
      //   <section className="account" key={account.account}>
      //     <div className="account-content-wrapper">
      //       <h3 className="account-title">{account.name} ({account.id_account})</h3>
      //       <p className="account-amount">${account.balance.toFixed(2)}</p>
      //       <p className="account-amount-description">{account.description}</p>
      //     </div>
      //     <div className="account-content-wrapper cta">
      //       {/* petit link  */}
      //       <button className="transaction-button">View transactions</button>
      //     </div>
      //   </section>
      // ))}
  );
};