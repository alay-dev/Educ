export const setLoader = () =>{
    return {
        type: 'SET_LOADER',
        payload: true,
    }
}

export const unsetLoader = () =>{
    return {
        type: 'UNSET_LOADER',
        payload: false,
    }
}