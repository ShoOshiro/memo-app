import {createStore} from 'redux';

const initialData = {
    memoInfo: {
        title: null,
        category: null,
        createdDate: null,
        updateDate: null
    }
}

// define reducer
export function memoReducer(state = initialData, action){
    switch(action.type){
        case 'ADD':
            return addReduce(state, action);
        default:
            return state
    }
}

// define reduce action
function addReduce(state, action){
    let memoInfo = {
        title: action.memoInfo.title,
        category: action.memoInfo.category,
        createDate: new Date()
    };
    let newMemoInfo = state.memoInfo.slice();
    newMemoInfo.unshift(memoInfo);
    return newMemoInfo;
}

// define action creater
export function addMemo(memoInfo){
    return{
        type: 'ADD',
        memoInfo: memoInfo
    };
}

// create store
export default createStore(memoReducer)