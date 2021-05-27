import { setLoader, unsetLoader } from "../loader/loaderActions"

export const add_inquery = (fName, lName, phone, email, message) =>{

    return (dispatch) =>{
        dispatch(setLoader()) ;
        return fetch('https://educapi12.herokuapp.com/' + 'api/inquery',{
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                first_name: fName,
                last_name: lName,
                contact_no: phone,
                email: email,
                message: message,
                date: Date.now()
            })
        })
        .then((res) => res.json())
        .then((resJson)=> {
            if(resJson.status === 'success') {
                dispatch({type: 'ADD_INQUERY', payload: {}})
            }
            dispatch(get_all_inquery()) ;

            dispatch(unsetLoader()) ;
        }) 
        .catch(error =>{
            console.log(error) ;
        })
    }
}

export const get_all_inquery = (token) =>{
    console.log('GGGGG') ;
    return dispatch =>{
        dispatch(setLoader()) ;
        return fetch('https://educapi12.herokuapp.com/' + 'api/inquery',{
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                token: token
            }
        })
        .then((res) => res.json())
        .then((resJson)=> {
            if(resJson.status === 'success') {
                dispatch({type: 'SET_ALL_INQUERY', payload: resJson.data.inqueries})
            }

            dispatch(unsetLoader()) ;
        }) 
        .catch(error =>{
            console.log(error) ;
        })
    }
}