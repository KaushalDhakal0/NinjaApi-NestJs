import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    name: string;
    username:string;
    password:string;
}



@Injectable()
export class UsersService {
    private readonly users:User[] = [
        {
            id:1,
            name:"Kaushal",
            username:"KD_LOST",
            password:"KDmyPassword",
        },
        {
            id:2,
            name:"Marius",
            username:"Marius_LOST",
            password:"MLmyPassword",
        },
        {
            id:3,
            name:"Net Ninjs",
            username:"NINJA",
            password:"NNmyPassword",
        },
    ]

    async findOneUser(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
