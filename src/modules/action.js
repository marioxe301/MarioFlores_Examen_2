// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  const createItem = (mon,day,max,min) => ({
    type: Types.CREATE_ITEM,
    payload: {mon,day,max,min}
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const weatherItem = (mon,day) =>({
    type: Types.WHEATHER_ITEM,
    payload : {mon,day}
  })
  
  export default {
    createItem,
    deleteItem,
    weatherItem,
    Types
  };