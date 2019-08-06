import React, { Component } from 'react'
import Reimbursement from '../../models/reimbursement';
import { ReimbursementStatus } from '../../models/reimbursementStatus';
import { ReimbursementType } from '../../models/reimbursementType';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { environment } from '../../environment';
// import { type } from 'os';

interface IState {
    reimbursements: Reimbursement[],
    status: ReimbursementStatus[],
    statusDropdown: {
        isOpen: boolean,
        selection: string
    }
}

export default class ReimbursementComponent extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            reimbursements: [],
            status: [],
            statusDropdown: {
                isOpen: false,
                selection: 'All'
          
                
            }
        };            
    }

    async componentDidMount() {
        this.getReimbursements();
        this.getStatus();
    }

    getReimbursements = async () => {
        const resp = await fetch(environment.context +'/reimbursements', {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }

    getStatus = async () => {
        const resp = await fetch(environment.context +'/status', {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }

    getReimbursementsByAuthor = async () => {
        const resp = await fetch(environment.context +'/reimbursements', {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }

    getReimbursementsByStatusId = async (status: ReimbursementStatus) => {
        const resp = await fetch(environment.context +'/reimbursements/status/' + status.statusId, {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }

    getReimbursementsByTypeId = async (type: ReimbursementType) => {
        const resp = await fetch(environment.context +'/reimbursements/type/' + type.typeId, {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }

    toggleStatusDropdown = () => {
        this.setState({
            statusDropdown: {
                ...this.state.statusDropdown,
                isOpen: !this.state.statusDropdown.isOpen
            }
        });
    }
    render() {
        const reimbursements = this.state.reimbursements;
        return (
            <div id="reimbursement-table-container">
                <ButtonDropdown id="reimbursement-status-dropdown"
                        isOpen={this.state.statusDropdown.isOpen} 
                        toggle={this.toggleStatusDropdown}>

                    <DropdownToggle caret>
                        {this.state.statusDropdown.selection}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={this.getReimbursements}>Status</DropdownItem>
                        <DropdownItem onClick={this.getReimbursements}>Pendung</DropdownItem>
                        <DropdownItem onClick={this.getReimbursements}>Approved</DropdownItem>
                        <DropdownItem onClick={this.getReimbursements}>Denied</DropdownItem>



                        <DropdownItem divider />
                        {
                            this.state.status.map(status => (
                                <DropdownItem key={'status-dropdown-' + status.statusId} 
                                            onClick={() => this.getReimbursementsByStatusId(status)}>
                                 {status.status}
                                 </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </ButtonDropdown>
                {/* <ButtonDropdown id="reimbursement-type-dropdown"
                        isOpen={this.state.typeDropdown.isOpen} 
                        toggle={this.toggleTypeDropdown}>

                    <DropdownToggle caret>
                        {this.state.typeDropdown.selection}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={this.getReimbursements}>All</DropdownItem>
                        <DropdownItem divider />
                        {
                            this.state.type.map(status => (
                                <DropdownItem key={'status-dropdown-' + type.typeId} 
                                            onClick={() => this.getReimbursementsByTypeId(status)}>
                                 {type.type}
                                 </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </ButtonDropdown> */}
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Date Resolved</th>
                            <th scope="col">Description</th>
                            <th scope="col">Resolver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reimbursements.map(reimbursement =>
                                <tr key={'reimbursementId-' + reimbursement.reimbursementId}>
                                    <td>{reimbursement.author && reimbursement.author.username}</td>
                                    <td>{reimbursement.amount}</td>
                                    <td>{reimbursement.dateSubmitted}</td>
                                    <td>{reimbursement.dateResolved}</td>
                                    <td>{reimbursement.description}</td>
                                    <td>{reimbursement.resolver.username}</td>
                                    <td>{reimbursement.status.status}</td>
                                    <td>{reimbursement.type.type}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
