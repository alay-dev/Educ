export const setMessage = () =>{
    return {
        type: 'SET_MESSAGE',
        payload: true,
    }
}

export const unsetMessage = () =>{
    return {
        type: 'UNSET_MESSAGE',
        payload: false,
    }
}