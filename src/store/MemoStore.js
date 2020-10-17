import {createStore} from 'redux';

const initialData = {
    mode: 'default',
    memoInfo: [{
        title: null,
        category: null,
        detail: null,
        createdDate: null,
        updateDate: null
    }],
    selectedMemo:null
}

// define reducer
export function memoReducer(state = initialData, action){
    switch(action.type){
        case 'ADD':
            return addReduce(state, action);
        case 'NEWINPUT':
            return displayNewInputReduce(state, action);
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
    return {
        mode: 'default',
        memoInfo: newMemoInfo
    }
}

function displayNewInputReduce(state, action){
    return{mode: 'default'};
}

// define action creater
export function addMemo(memoInfo){
    return{
        type: 'ADD',
        memoInfo: memoInfo
    };
}

export function displayNewInput(){
    return {type: 'NEWINPUT'};
}

// create store
export default createStore(memoReducer)