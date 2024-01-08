// auth/jwt-auth.guard.ts
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your logic for token validation and handling here
    const request = context.switchToHttp().getRequest();

    // Perform additional checks, token validation, or extraction logic if needed
    // For instance, extract token from headers, validate against secret/key, etc.
    const token = this.extractTokenFromHeaders(request);

    if (!token) {
      return false; // Deny access if no token is present
    }

    // Your token validation or verification logic
    // Example: Validate token using a service or library
    const isValid = this.validateToken(token);

    return isValid; // Return true to grant access, false to deny
  }

  private extractTokenFromHeaders(request: Request): string | null {
    // Extract token from headers, modify this based on how tokens are passed
    const authHeader = request.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.slice(7); // Extract token after 'Bearer ' prefix
    }
    return null;
  }

  private validateToken(token: string): boolean {
    // Perform validation using your chosen JWT library or method
    // Example: Verify token using a service or library
    try {
      // Your validation logic here, e.g., verify token using a library
      // Example using jsonwebtoken library:
      // const decoded = jwt.verify(token, 'your_secret_key');
      // Perform additional checks as needed
      return true; // Return true if token is valid
    } catch (error) {
      return false; // Return false if token is invalid or expired
    }
  }
}
