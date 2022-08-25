const days = 4
export const initialState =(city)=> ({
  city: city ?? 'London,UK',
  isLoading: false,
  list: [],
  getNext:days * (24/3) + 1 //get next 3 days from 3hr data plus current
});

export const weatherReducer = ( state = {}, action )=>{
  switch ( action.type ) {
    case 'find':
      return { ...state, ...action.payload, isLoading: true };
    case 'success':
      return { ...state, ...action.payload, isLoading: false };
    case 'fail':
      return { ...state, isLoading: false };
    case 'change':
      return { ...state, ...action.payload};
    default:
      return state;
  }
};