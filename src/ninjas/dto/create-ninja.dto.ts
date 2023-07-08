import {  MinLength, Length, IsEnum } from "class-validator";
export class CreateNinjaDto {
    id:number;
    @Length(15,25)
    name: string;
    @IsEnum(['space', 'stars', 'water'],{message: "Use valid Weapon....."})
    weapon:string;
}

export class User {
    id:number;
    name: string;
    weapon: string;
  
    constructor(data: { name: string; weapon: string }) {
      this.name = data.name;
      this.weapon = data.weapon;
    }
  }
  