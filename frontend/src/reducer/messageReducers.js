export const message = (state= false, action) =>{
    console.log(action.payload) ;
    switch (action.type) {
        case 'SET_MESSAGE': 
            return state = true ;
        case 'UNSET_MESSAGE': 
            return state = false ;
        default: 
            return state ;
    }
}