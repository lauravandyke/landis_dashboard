import axios from 'axios';

// ACTION TYPES
const GET_CLIENT = 'GET_CLIENT';

// ACTION CREATORS
const getClient = (client) => ({
  type: GET_CLIENT,
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

// REDUCER
const clientReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return action.client;
    default:
      return state;
  }
};

export default clientReducer;
