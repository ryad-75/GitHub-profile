import { FETCH_PROFILE, PROFILE_LOADING } from '../actions/types';

const initialState = {
    profile: null,
    loading: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false,
            };


        default:
            return state;
    }
};

export default profileReducer;
