import Reimbursement from '../models/reimbursement';
import { ReimbursementStatus } from '../models/reimbursementStatus';
import { ReimbursementType } from '../models/reimbursementType';
import User from '../models/user';
import { Role } from '../models/role';

export function reimbursementConverter(row) {
    return new Reimbursement(row.reimbursement_reimbursementId, row.reimbursement_author, 
        row.reimbursement_amount, row.reimbursement_dateSubmitted, row.reimbursement_dateResolved, 
        row.reimbursement_description, row.reimbursement_resolver,
        new ReimbursementStatus(row.reimbursementStatus_statusId, row.reimbursementStatus_status),
        new ReimbursementType(row.reimbursementType_typeId, row.reimbursementType_type));

        
        //row.user_userId && new User(row.user_userId, row.username, '', row.first_name, row.last_name, row.email, 
        //new Role(row.role_roleId, row.role_role)));
}