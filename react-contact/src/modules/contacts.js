import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const CREATE = 'contact/CREATE';
const MODIFY = 'contact/MODIFY';
const REMOVE = 'contact/REMOVE';
const TOGGLE_FAVORITE = 'contact/TOGGLE_FAVORITE';

export const create = createAction(CREATE); // { id, name, phone, color }
export const modify = createAction(MODIFY); // { id, contact: { name, phone } }
export const remove = createAction(REMOVE); // id
export const toggleFavorite = createAction(TOGGLE_FAVORITE);  // id

const initialState = List([
  Map({
    "id": "gkll0DGJ",
    "name": "Lauren",
    "phone": "213-814-8834",
    "color": "#40c057",
    "favorite": true
  }),
  Map({
    "id": "rH3SDAG",
    "name": "John",
    "phone": "700-714-9922",
    "color": "#12b886",
    "favorite": true
  }),
  Map({
    "id": "QJFL4HHA",
    "name": "Mike",
    "phone": "312-488-1239",
    "color": "#fd7214",
    "favorite": false
  }),
  Map({
    "id": "sasdfj322",
    "name": "Linda",
    "phone": "910-439-3062",
    "color": "#15aabf",
    "favorite": false
  }),
  Map({
    "id": "sdsgI8S",
    "name": "May",
    "phone": "213-500-5337",
    "color": "#364980",
    "favorite": false
  }),
  Map({
    "id": "sadgagl;",
    "name": "Jay",
    "phone": "213-123-1234",
    "color": "#40c057",
    "favorite": true
  })
]);

export default handleActions({
  [CREATE]: (state, action) => {
    return state.push(Map(action.payload));
  },
  [MODIFY]: (state, action) => {
    const index = state.findIndex(contact => contact.get('id') === action.payload.id);
    return state.mergeIn([index], action.payload.contact);
  },
  [REMOVE]: (state, action) => {
    const index = state.findIndex(contact => contact.get('id') === action.payload);
    return state.delete(index);
  },
  [TOGGLE_FAVORITE]: (state, action) => {
    const index = state.findIndex(contact => contact.get('id') === action.payload);
    return state.update(index, contact => contact.set('favorite', !contact.get('favorite')));
  }
}, initialState);