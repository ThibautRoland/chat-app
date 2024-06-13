import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty() // don't forget to use UsePipe in the controller to make the validation work
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}