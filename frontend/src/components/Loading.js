import React from 'react' ;
import { Dimmer, Loader } from 'semantic-ui-react' ;

const Loading= () => {
    return (
        <div className="loader">
            <Dimmer active>
                <Loader size="medium">loading...</Loader>
            </Dimmer>
        </div>
    )
}

export default Loading ;
