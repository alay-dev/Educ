import React from 'react' ;
import  { Message} from 'semantic-ui-react' ;

const style = {
    position: 'absolute',
    zIndex: '10',
    top: '2rem',
    left: '50% ',
    transform: 'translateX(-50%)'
}

const SnackBar = () => {
    return (
        <div style={style} className="snackBar">
            <Message floating color="red">
                <p>Login Failed!! Try again</p>
            </Message>
        </div>
    )
}

export default SnackBar ;