import {Route, Redirect} from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

    const loading = false;
    const signed = false;

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){
        return <Redirect to="/"></Redirect>
    }

    if(signed && !isPrivate){
        return <Redirect to="/Dashboard"></Redirect>
    }

    return(
        <Route {...rest} render = { props => (
                <Component {...props}></Component>
            )}>
        </Route>
    )
}