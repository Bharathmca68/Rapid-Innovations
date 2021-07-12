import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googlelogin(req) {
    if (!req) {
      return "no user from google"
    }
    return {
      message: "User information found....!",
      User: req.user
    }
  }
}
