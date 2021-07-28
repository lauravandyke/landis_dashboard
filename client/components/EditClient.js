import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClient, updateClient } from '../store/client';
import { removeClient } from '../store/clients';

class EditClient extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: '',
      credit: 0,
      picture: '',
      name_first: '',
      name_last: '',
      employer: '',
      email: '',
      phone: '',
      address: '',
      comments: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    try {
      this.props.getClient(this.props.id);
      let { client } = this.props;
      this.setState({
        balance: client.balance || '',
        credit: client.credit || '',
        picture: client.picture || '',
        name_first: client.name_first || '',
        name_last: client.name_last || '',
        employer: client.employer || '',
        email: client.email || '',
        phone: client.phone || '',
        address: client.address || '',
        comments: client.comments || '',
        id: client.id || '',
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.editClient({ ...this.props.client, ...this.state });
  }

  render() {
    console.log('STATE ON EDIT', this.state);

    return (
      <div className="edit-form">
        <h2>Edit Client Record</h2>
        <form id="edit-client-form" onSubmit={this.handleSubmit}>
          <button type="submit">Save Changes</button>
          <Link to={`/clients/${this.props.id}`}>
            <button>Cancel</button>
          </Link>
          <h3 className="no-bottom">ID</h3>
          <input
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
          ></input>
          <h3 className="no-bottom">First Name</h3>
          <input
            name="name_first"
            onChange={this.handleChange}
            value={this.state.name_first}
          ></input>
          <h3 className="no-bottom">Last Name</h3>
          <input
            name="name_last"
            onChange={this.handleChange}
            value={this.state.name_last}
          ></input>
          <h3 className="no-bottom">Savings Balance</h3>
          <input
            name="balance"
            onChange={this.handleChange}
            value={this.state.balance}
          ></input>
          <h3 className="no-bottom">Credit Score</h3>
          <input
            name="credit"
            onChange={this.handleChange}
            value={this.state.credit}
          ></input>
          <h3 className="no-bottom">Phone Number</h3>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          ></input>
          <h3 className="no-bottom">Email</h3>
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <h3 className="no-bottom">Address</h3>
          <input
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          ></input>
          <h3 className="no-bottom">Employer</h3>
          <input
            name="employer"
            onChange={this.handleChange}
            value={this.state.employer}
          ></input>
          <h3 className="no-bottom">Comments</h3>
          <input
            name="comments"
            onChange={this.handleChange}
            value={this.state.comments}
          ></input>
          <h3 className="no-bottom">Photo URL</h3>
          <input
            name="picture"
            onChange={this.handleChange}
            value={this.state.picture}
          ></input>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditClient);
