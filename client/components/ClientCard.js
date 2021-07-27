import React from 'react';
import { Link } from 'react-router-dom';

function ClientCard(props) {
  const { id, name_first, name_last, balance, credit, email, phone, picture } =
    props.client;
  let phoneAreaCode = phone.substr(0, 3);
  let phonePrefix = phone.substr(3, 3);
  let phoneLine = phone.substr(6);
  return (
    <Link className="card" to={`/clients/${id}`}>
      <div>
        <div className="container">
          <h4>
            <b>
              {name_first} {name_last}
            </b>
          </h4>
          <ul className="cardList">
            <li>Balance: ${balance}</li>
            <li>Credit Score: {credit}</li>
            <li>
              ({phoneAreaCode}) {phonePrefix}-{phoneLine}
            </li>
            <li>{email}</li>
          </ul>
        </div>
        {/* <img src={picture} style={{ width: '100%' }} /> */}
      </div>
    </Link>
  );
}

export default ClientCard;
