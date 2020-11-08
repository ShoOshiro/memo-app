import {createStore} from 'redux';

const initialData = {
    mode: 'default',
    memoInfo: [
        {id: 2,
        title: 'title2',
        category: 'category',
        detail: 'detail2',
        createdDate: null,
        updateDate: null},
        {id: 1,
        title: 'title1',
        category: 'category',
        detail: 'detail1',
        createdDate: null,
        updateDate: null},
        {id: 0,
        title: 'title0',
        category: 'category',
        detail: 'detail0',
        createdDate: null,
        updateDate: null},

    ],
    selectedMemo:null,
    searchedMemo:null,
}

// define reducer
export function memoReducer(state = initialData, action){
    switch(action.type){
        case 'ADD':
            return addReduce(state, action);
        case 'SELECT':
            return selectMemoReduce(state, action);
        case 'DELETE':
            return deleteMemoReduce(state, action);
        case 'UPDATE':
            return updateMemoReduce(state, action);
        case 'SEARCH':
            return searchMemoReduce(state, action);
        default:
            return state
    }
}

// define reduce action
function addReduce(state, action){
    const newMemoInfo = state.memoInfo.slice();
    const id = newMemoInfo.length;
    const memoInfo = {
        id: id,
        title: action.memoInfo.title,
        category: action.memoInfo.category,
        detail: action.memoInfo.detail,
        createDate: new Date()
    };
    newMemoInfo.unshift(memoInfo);
    return {
        mode: 'default',
        memoInfo: newMemoInfo,
        selectedMemo: null,
        searchedMemo: null
    }
}

function selectMemoReduce(state, action){
    return{
        mode: 'select',
        memoInfo: state.memoInfo,
        selectedMemo: action.selectedMemo,
        searchedMemo: null
    };
}

function deleteMemoReduce(state, action){
    const newMemoInfo = state.memoInfo.slice();
    newMemoInfo.splice(action.id, 1);
    const numOfMemo = newMemoInfo.length;
    newMemoInfo.map((memo, index) =>{
        memo.id = (numOfMemo - 1) - index;
    })
    console.log('--delete--');
    console.log(newMemoInfo);
    return{
        mode: 'default',
        memoInfo: newMemoInfo,
        selectedMemo: null,
        searchedMemo: null
    }
}

function updateMemoReduce(state, action){
    const newMemoInfo = state.memoInfo.slice();
    console.log(action);
    const updateMemoIndex = (newMemoInfo.length - 1) - action.id;
    newMemoInfo[updateMemoIndex] = action.updateMemo;
    return{
        mode: 'default',
        memoInfo: newMemoInfo,
        selectedMemo: null,
        searchedMemo: null
    }
}

function searchMemoReduce(state, action){
    const memoInfo = state.memoInfo;
    const searchedMemo = memoInfo.filter(memo => memo.title == action.searchWord || memo.category == action.searchWord);
    console.log('---search---');
    console.log(searchedMemo);
    return{
        mode: 'search',
        memoInfo: memoInfo,
        selectedMemo: null,
        searchedMemo: searchedMemo
    }
}

// define action creater
export function addMemo(memoInfo){
    return{
        type: 'ADD',
        memoInfo: memoInfo
    };
}

export function selectMemo(selectedMemo){
    return {
        type: 'SELECT',
        selectedMemo: selectedMemo
    };
}

export function deleteMemo(id){
    return {
        type:'DELETE',
        id: id
    }
}

export function updateMemo(updateMemo, id){
    return {
        type: 'UPDATE',
        updateMemo: updateMemo,
        id: id
    }
}

export function searchMemo(searchWord){
    return {
        type: 'SEARCH',
        searchWord: searchWord
    }
}

// create store
export default createStore(memoReducer)