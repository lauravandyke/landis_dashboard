import axios from 'axios';

// ACTION TYPES
const GET_CLIENTS = 'GET_CLIENTS';

// ACTION CREATORS
const getClients = (clients) => ({
  type: GET_CLIENTS,
  clients,
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

// REDUCER
const clientsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.clients;
    default:
      return state;
  }
};

export default clientsReducer;
