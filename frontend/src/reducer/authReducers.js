const initial_state = {
    login: {}
} ;

export const login = (state= initial_state.login, action) =>{
    console.log(action.payload) ;
    switch (action.type) {
        case 'SET_LOGIN': 
            return state = {...action.payload, isAdmin: true} ;
        default: 
            return state ;
    }
}