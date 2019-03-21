import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [{id:1, month:'March', day:'20', max: '38', min: '18'}, 
  {id:2,month:'March', day:'21', max: '30', min: '20'}, 
  {id:3,month:'March', day:'22', max: '33', min: '17'}, 
  {id:4,month:'March', day:'23', max: '31', min: '19'}]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, month : item.month , day: item.day, max: item.day, min: item.min };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;