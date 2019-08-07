import React, { Component } from 'react'
import { environment } from '../../environment';
import User from '../../models/user';
import Role from '../../models/role';

interface IState {
    users: User[],
    role: Role[],
}

export default class UserComponent extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            role: [],
        };            
    }

    async componentDidMount() {
        this.getRoles();
    }

    getRoles = async () => {
        const resp = await fetch(environment.context +'/users/role/' + 7, {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        this.setState({
            users: usersFromServer
        });
        console.log(usersFromServer);
    }

    render() {
        const users = this.state.users;
        return (
            <div id="reimbursement-table-container">
                
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={'userId-' + user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role.role}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}