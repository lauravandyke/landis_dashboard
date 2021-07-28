import React from 'react';
import { Link } from 'react-router-dom';
import { formatPhone, formatReadiness } from './helperFormatters';

function ClientCard(props) {
  const {
    id,
    name_first,
    name_last,
    balance,
    credit,
    email,
    phone,
    picture,
    readiness,
  } = props.client;
  let phoneNumber = phone ? formatPhone(phone) : '';
  let readinessColor = readiness ? formatReadiness(readiness) : '';
  let cardClass = 'card' + ' ' + readinessColor;

  return (
    <div className={cardClass}>
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
