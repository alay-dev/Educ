const initial_state = {
    all_inquery: []
} ;

export const inquery = (state= initial_state.all_inquery, action) =>{
    switch (action.type) {
        case 'SET_ALL_INQUERY': 
            return state = action.payload ;
        case 'ADD_INQUERY':
            return state = [...state, action.payload] ;
        default: 
            return state ;
    }
}