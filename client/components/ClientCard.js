import React from 'react';
import { Link } from 'react-router-dom';

function ClientCard(props) {
  const { id, name_first, name_last, balance, credit, email, phone, picture } =
    props.client;
  return (
    <Link className="card" to={`/clients/${id}`}>
      <div>
        <div className="container">
          <h4>
            <b>
              {name_first} {name_last}
            </b>
          </h4>
          <p>Balance: ${balance}</p>
          <p>Credit Score: {credit}</p>
        </div>
        <img src={picture} style={{ width: '100%' }} />
      </div>
    </Link>
  );
}

export default ClientCard;
