import React, { Component } from 'react'
import { environment } from '../../environment';
import User from '../../models/user';
import Role from '../../models/role';

interface IState {
    users: User[],
    role: Role[],
    // roleDropdown: {
    //     isOpen: boolean,
    //     selection: string
    //}
}

export default class UserComponent extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            role: [],
            // roleDropdown: {
            //     isOpen: false,
            //     selection: 'All'
          
            // }
        };            
    }

    async componentDidMount() {
        this.getUsers();
        this.getRoles();
    }

    getUsers = async () => {
        const resp = await fetch(environment.context +'/users', {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        this.setState({
            users: usersFromServer
        });
        console.log(usersFromServer);
    }

    getRoles = async () => {
        const resp = await fetch(environment.context +'/roles', {
            credentials: 'include'
        });
        const rolesFromServer = await resp.json();
        this.setState({
            users: rolesFromServer
        });
        console.log(rolesFromServer);
    }

    // toggleStatusDropdown = () => {
    //     this.setState({
    //         roleDropdown: {
    //             ...this.state.roleDropdown,
    //             isOpen: !this.state.roleDropdown.isOpen
    //         }
    //     });
    // }
    render() {
        const users = this.state.users;
        return (
            <div id="reimbursement-table-container">
                
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            {/* <th scope="col">Password</th> */}
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
                                    {/* <td>{user.password}</td> */}
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

