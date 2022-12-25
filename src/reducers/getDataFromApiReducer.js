function getDataFromApiReducer(state = [], action){
    switch(action.type){
        case "ADD_DATA_TO_STORE":
            return action.payload
        default:
            return state;
    }
}

export default getDataFromApiReducer;