import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    //Below line of code is an example of dependency injection.
    constructor(private usersService: UsersService){}

    async validateUser(username:string, password:string):Promise<any>{
        const user =await this.usersService.findOneUser(username);

        if(user && user.password === password){
            const { username, password , ...rest} = user;
            return rest ;
        }
    }
}
