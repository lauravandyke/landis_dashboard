import axios from 'axios';
import history from '../history';

// ACTION TYPES
const GET_CLIENTS = 'GET_CLIENTS';
const DELETE_CLIENT = 'REMOVE_CLIENT';
const CREATE_CLIENT = 'CREATE_CLIENT';

// ACTION CREATORS
const getClients = (clients) => ({
  type: GET_CLIENTS,
  clients,
});

const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  id,
});

const createClient = (client) => ({
  type: CREATE_CLIENT,
  client,
});

// THUNK CREATORS
export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/clients');
      dispatch(getClients(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeClient = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/clients/${id}`);
      dispatch(deleteClient(id));
      history.push('/clients');
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewClient = (client) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/clients', client);
      dispatch(createClient(data));
      history.push(`/clients/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const clientsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.clients;
    case DELETE_CLIENT:
      return state.filter((client) => client.id !== action.id);
    case CREATE_CLIENT:
      return [...state, action.client];
    default:
      return state;
  }
};

export default clientsReducer;
