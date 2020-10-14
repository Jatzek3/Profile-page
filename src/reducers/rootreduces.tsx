const initialState: object = {
    posts: []
}

const rootReducer = (state = initialState, action: any) => {
    return state + action
}

export default rootReducer