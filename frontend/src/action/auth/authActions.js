import { setLoader, unsetLoader } from "../loader/loaderActions";
import { setMessage, unsetMessage } from "../message/messageActions";

export const login = (email, password) =>{
    console.log(email, password) ;
    return (dispatch) => {
        dispatch(setLoader()) ;
        return fetch('https://educapi12.herokuapp.com/' + 'api/users/login',{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((res) => res.json())
        .then((resJson)=> {
            console.log(resJson) ;
            if(resJson.status === 'success') {

                dispatch(do_login(resJson.data))
                // dispatch({type: 'SET_LOGIN', payload:resJson.data}) ;
            }

            dispatch(unsetLoader()) ;

            if(resJson.status === 'failed') {
                dispatch(setMessage()) ;
                setTimeout(()=>{
                    dispatch(unsetMessage()) ;
                }, 5000);
            }
        }) 
        .catch(error =>{
            console.log(error) ;

        }) ;
    }
}

export const do_login = (payload) =>{
    console.log(payload) ;
    sessionStorage.setItem('token', payload.token) ;
    return {
        type: 'SET_LOGIN',
        payload: payload
    }
}