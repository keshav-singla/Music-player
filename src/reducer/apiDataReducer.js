const apiDataReducer = (state = 0, action) => {
    switch(action.type){
        case 'apiFetch':
        return state + 1
    }
}

export default apiDataReducer;