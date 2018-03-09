import { createStore } from "redux";

// types
 const CHANGE_COLOR = 'CHANGE_COLOR';


// actions
const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        value: color
    }
})



// initial state 
const initialStore = {
   color: '#ffffff'
}
// reducer

const reducer = (state=initialState, action) => {
    return state; 

}
// creation of store
const store = createStore(reducer);


// export
export default store; 