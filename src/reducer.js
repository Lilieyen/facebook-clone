// how the data layer looks like initially
export const initialState = {
    user: null,
};

// we dispatch actions into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER: // here in the reducer we listen to what action has been passed
                                   // here we're basically saying, return to me the current state of how the data layer looks like, but change the user based on the user we passed in as a user payload inside of the action we passed
            return {
                ...state,
                user: action.user, 
            };

        default:
            return state;
    }
};

export default reducer;