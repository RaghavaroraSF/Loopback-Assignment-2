import { User, Customer } from '../models';
import { UserRepository } from '../repositories';
export declare class UserCustomerController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    getCustomer(id: typeof User.prototype.id): Promise<Customer>;
}
