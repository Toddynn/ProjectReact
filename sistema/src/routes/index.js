import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Customers from '../pages/Customers';
import New from '../pages/New';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}></Route>
            <Route exact path="/register" component={SignUp}></Route>
            <Route exact path="/dashboard" component={Dashboard} isPrivate></Route>
            <Route exact path="/profile" component={Profile} isPrivate></Route>
            <Route exact path="/customers" component={Customers} isPrivate></Route>
            <Route exact path="/new" component={New} isPrivate></Route>
        </Switch>
    )
}