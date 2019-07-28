import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from '../actions';

const initialState = {
    smurfs: [],
    isGetting: false,
    isPosting: false,
    newSmurf: {
        name: '',
        age: null,
        height: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SMURFS_START:
            console.log('GET_SMURFS_START')
            return{
                ...state,
                isGetting: true
            }
        case GET_SMURFS_SUCCESS:
            console.log('GET_SMURFS_SUCCESS', action.payload)
            return{
                smurfs: action.payload,
                isGetting: false
            }
        case GET_SMURFS_FAIL:
            console.log('GET_SMURFS_FAIL', action.payload)
            return{
                ...state,
                isGetting: false
            }
        case ADD_SMURF_START:
            console.log('ADD_SMURF_START', action.payload)
            return{
                ...state,
                isPosting: true
            }
        case ADD_SMURF_SUCCESS:
            console.log('ADD_SMURF_SUCCESS', action.payload)
            return{
                smurfs: [...state.smurfs, action.payload],
                isPosting: false
            }
        case GET_SMURFS_FAIL:
            console.log('ADD_SMURF_FAIL', action.payload)
            return{
                ...state,
                isPosting: false
            }
        default:
            return state;
    }
}