import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientCard from './ClientCard';
import { fetchClients } from '../store/clients';

class Clients extends React.Component {
  componentDidMount() {
    try {
      this.props.getClients();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { clients } = this.props;
    return (
      <>
        <Link to="/new">
          <button>Create New Client Record</button>
        </Link>
        <div className="clients-container">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clients,
});

const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(fetchClients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
