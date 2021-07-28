import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClient, updateClient } from '../store/client';
import { removeClient } from '../store/clients';
import { formatPhone, formatAddress } from './helperFormatters';

class SingleClient extends React.Component {
  componentDidMount() {
    try {
      this.props.getClient(this.props.id);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { client } = this.props;
    const {
      balance,
      credit,
      picture,
      name_first,
      name_last,
      employer,
      email,
      phone,
      address,
      comments,
      id,
    } = client;

    let phoneNumber = phone ? formatPhone(phone) : '';
    let addressLines = address ? formatAddress(address) : '';

    return (
      <div>
        <div className="client-box">
          <img src={picture} />
          <div className="client-info">
            <h2 className="no-bottom">
              {name_first} {name_last}
            </h2>
            <h3 className="id no-top">{id}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{email}</h3>
            <div>
              <h3 className="no-bottom">{addressLines[0]}</h3>
              <h3 className="no-top">{addressLines[1]}</h3>
            </div>
          </div>
          <div className="client-buttons">
            <Link to={`/clients/${client.id}/edit`}>
              <button type="button">Edit Record</button>
            </Link>
            <button
              type="button"
              onClick={() => this.props.deleteClient(client.id)}
            >
              Delete Record
            </button>
          </div>
        </div>
        <div className="client-detail">
          <h2>
            Savings Balance:{' '}
            <span style={{ fontWeight: 'bold' }}>${balance}</span>
          </h2>
          <h2>
            Credit Score: <span style={{ fontWeight: 'bold' }}>{credit}</span>
          </h2>
          <h2>Employer: {employer}</h2>
          <h2>Comments: {comments}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  client: state.client,
});

const mapDispatchToProps = (dispatch) => ({
  getClient: (id) => dispatch(fetchClient(id)),
  editClient: (id) => dispatch(updateClient(id)),
  deleteClient: (id) => dispatch(removeClient(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleClient);
