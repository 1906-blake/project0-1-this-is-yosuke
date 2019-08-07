import React from 'react';
import { Link } from 'react-router-dom';
// import RevLogo from '../../ers-assets/ers-bank.png';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            {/* <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" /> */}
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
             <li className="nav-item active">
              <Link to="/reimbursements" className="unset-anchor nav-link">View Reimbursements</Link>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Find By Status</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/pending" className="unset-anchor nav-link active">Pending Reimbursements</Link></div>
                <div className="dropdown-item"><Link to="/resolved" className="unset-anchor nav-link active">Resolved Reimbursements</Link></div>
                <div className="dropdown-item"><Link to="/denied" className="unset-anchor nav-link active">Denied Reimbursements</Link></div>
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/users" className="unset-anchor nav-link">View Users</Link>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Find By Role</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/employee" className="unset-anchor nav-link active">Employees</Link></div>
                <div className="dropdown-item"><Link to="/manager" className="unset-anchor nav-link active">Managers</Link></div>
                <div className="dropdown-item"><Link to="/admin" className="unset-anchor nav-link active">Administrators</Link></div>
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/submission" className="unset-anchor nav-link">Submit Reimbursements</Link>
            </li>
            <li className="nav-item active">
              <Link to="/updateUser" className="unset-anchor nav-link">Update user</Link>
            </li>
            {/* <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">Movies</Link></div>
                <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div>
                <div className="dropdown-item"><Link to="/tic-tac-toe" className="unset-anchor nav-link active">Tic Tac Toe Game</Link></div>
                <div className="dropdown-item"><Link to="/chuck-norris" className="unset-anchor nav-link active">Chuck Norris Jokes</Link></div>
                <div className="dropdown-item"><Link to="/pokemon" className="unset-anchor nav-link active">Pokemon</Link></div>
              </div>
            </li> */}
            {/* <li className="nav-item active">
              <Link to="/nested" className="unset-anchor nav-link">Nested</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}