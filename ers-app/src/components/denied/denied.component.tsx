import React, { Component } from 'react'
import Reimbursement from '../../models/reimbursement';
import { ReimbursementStatus } from '../../models/reimbursementStatus';
import { environment } from '../../environment';

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
        this.getReimbursementsByStatusId();
    }

    getReimbursementsByStatusId = async () => {
        const resp = await fetch(environment.context +'/reimbursements/status/' + 9, {
            credentials: 'include'
        });
        const reimbursementsFromServer = await resp.json();
        this.setState({
            reimbursements: reimbursementsFromServer
        });
        console.log(reimbursementsFromServer);
    }
    render() {
        const reimbursements = this.state.reimbursements;
        return (
            <div id="reimbursement-table-container">
                
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
