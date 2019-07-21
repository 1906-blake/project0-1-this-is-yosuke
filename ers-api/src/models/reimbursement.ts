import { ReimbursementStatus } from '../models/reimbursementStatus';
import { ReimbursementType } from '../models/reimbursementType';

export default class Reimbursement {
    constructor(
    public reimbursementId = 0, //: number, // primary key
    public author = 0,          //: number,  // foreign key -> User, not null
    public amount = 0,          //: number,  // not null
    public dateSubmitted = 0,   //: number, // not null
    public dateResolved = 0,    //: number,
    public description: '',     //string, // not null
    public resolver = 0,        //: number, // foreign key -> User
    public status : ReimbursementStatus,          //: number, // foreign ey -> ReimbursementStatus, not null
    public type : ReimbursementType,            //: number // foreign key -> ReimbursementType
    ){}
}