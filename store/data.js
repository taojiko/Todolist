export const state = () => ({
    dataList:[],
    loading:false,
})

const addList = function(state, todo) {
    state.dataList.push(todo);
}
const removeList = function(state, index) {
    state.dataList.splice(index, 1);
}
const fixList = function(state, item) {
    state.dataList = item;
}
const turnLoading = function(state, turn){
    state.loading = turn;
}

export const mutations = {
    addList,
    removeList,
    fixList,
    turnLoading,
}

const apiFix = function({commit}, text){
    setTimeout(()=>{  
        commit('fixList',text)
        commit('turnLoading',false)
    },1000)
}

const apiAdd = function({commit}, todo){
    setTimeout(()=>{  
        commit('addList',todo)
        commit('turnLoading',false)
    },1000)
}
const apiRemove = function({commit}, index){
    setTimeout(()=>{  
        commit('removeList',index)
        commit('turnLoading',false)
    },1000)
}
const delayLoading = function({commit}, turn){
    commit('turnLoading',turn)
}

export const actions = {
    apiAdd,
    apiRemove,
    apiFix,
    delayLoading,
}

const getData = function(state){
    return state.dataList;
}
const isLoading = function(state){
    return state.loading;
}

export const getters = {
    getData,
    isLoading,
}