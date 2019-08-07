import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/not-found/not-found.component';
import { NavComponent } from './components/app-nav/app-nav-component';
import { Home } from './components/home/home.component';
import { Clicker } from './components/clicker/clicker.component';
import { TicTacToe } from './components/tic-tac/tic-tac.component';
import { Norris } from './components/norris/norris.component';
import { Pokemon } from './components/pokemon/pokemon.component';
import { Nested } from './components/nested/nested.component';
import { SignIn } from './components/sign-in/sign-in.component';
import ReimbursementComponent from './components/reimbursements/reimbursement.component';
import Denied from './components/denied/denied.component';
import Resolved from './components/resolved/resolved.component';
import Pending from './components/pending/pending.component';
import UserComponent from './components/users/users.component';
import Admin from './components/admin/admin.component';
import Manager from './components/manager/manager.component';
import Employee from './components/employee/employee.component';
import { UpdateUser} from './components/update-user/update-user.component';
import CreateReimbursementComponent from './components/submit-reimbursement/submit-reimbursement.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        {/* The switch will only render the first route to match */}
        <Switch>
          <Route path="/chuck-norris" component={Norris} />
          <Route path="/clicker" component={Clicker} />
          <Route path="/home" component={Home} />
          <Route path="/nested" component={Nested} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/reimbursements" component={ReimbursementComponent} />
          <Route path="/denied" component={Denied} />
          <Route path="/pending" component={Pending} />
          <Route path="/resolved" component={Resolved} />
          <Route path="/submission" component={CreateReimbursementComponent} />
          <Route path="/users" component={UserComponent} />
          <Route path="/admin" component={Admin} />
          <Route path="/manager" component={Manager} />
          <Route path="/employee" component={Employee} />
          <Route path="/updateUser" component={UpdateUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;