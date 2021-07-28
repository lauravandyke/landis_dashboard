import axios from 'axios';
import history from '../history';

// ACTION TYPES
const GET_CLIENT = 'GET_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';

// ACTION CREATORS
const getClient = (client) => ({
  type: GET_CLIENT,
  client,
});

const editClient = (client) => ({
  type: EDIT_CLIENT,
  client,
});

// THUNK CREATORS
export const fetchClient = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/clients/${id}`);
      dispatch(getClient(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateClient = (client) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/clients/${client.id}`, client);
      dispatch(editClient(data));
      history.push(`/clients/${client.id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
const clientReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return action.client;
    case EDIT_CLIENT:
      return { ...action.client, tags: [...action.client.tags] };
    default:
      return state;
  }
};

export default clientReducer;
