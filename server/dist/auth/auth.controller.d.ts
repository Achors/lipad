import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(registerDto: {
        username: string;
        password: string;
    }): Promise<import("../users/user.entity").User>;
    getProfile(req: any): any;
}
