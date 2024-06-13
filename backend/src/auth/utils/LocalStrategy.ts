import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

export class LocalStragey extends PassportStrategy(Strategy) {
    constructor() {
        super();
    }
}