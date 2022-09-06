import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';



import Login from 'components/Login';
import Register from 'components/Register';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Edit from 'pages/Edit';

function App() {
    return (
        <>  
            <Switch> 
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path='/update/:id' component={Edit} />
                <Redirect from="*" to="/" />
            </Switch>  
        </>
    );
}

export default App;
