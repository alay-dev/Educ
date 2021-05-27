

export const loader = (state= false, action) =>{
    console.log(action.payload) ;
    switch (action.type) {
        case 'SET_LOADER': 
            return state = true ;
        case 'UNSET_LOADER': 
            return state = false ;
        default: 
            return state ;
    }
}