import React from 'react';
import { Link } from 'react-router-dom';
import { formatPhone } from './helperFormatters';

function ClientCard(props) {
  const { id, name_first, name_last, balance, credit, email, phone, picture } =
    props.client;
  let phoneNumber = phone ? formatPhone(phone) : '';
  return (
    <div className="card">
      <div>
        <div className="container">
          <Link to={`/clients/${id}`}>
            <h4>
              <b>
                {name_first} {name_last}
              </b>
            </h4>
          </Link>
          <ul className="cardList">
            <li>Savings: ${balance}</li>
            <li>Credit Score: {credit}</li>
            <li>{phoneNumber}</li>
            <li>
              <a href={`mailto: ${email}`}>{email}</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <img src={picture} style={{ width: '100%' }} /> */}
    </div>
  );
}

export default ClientCard;
