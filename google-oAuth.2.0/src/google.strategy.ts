import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from 'passport-google-oauth20'


@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: "262532078867-dtsfri2iu14ksftjphj2rc8mulul7ng6.apps.googleusercontent.com",
            clientSecret: "qWK1yQS4W7zGaiac9T24zz8l",
            callbackURL: "http://localhost:4545/auth/google/callback",
            scope: ['email', 'profile']
        })
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback)
        : Promise<any> {
        const { name, emails, photos } = profile
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user)
    }
}