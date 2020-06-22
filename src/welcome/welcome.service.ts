import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class WelcomeService {
    constructor(private readonly mailerService: MailerService) { }

    public welComeMail(): void {
        this
        .mailerService
        .sendMail({
            to: 'ashxyz1@gmail.com',
            from: 'abcd@gmail.com',
            subject: 'Testing Nest mailer Module',
            text: 'Welcome',
            html: '<b>Welcome to Nest Mailer Module...</b>'
        })
        .then(() => {})
        .catch(() => {});
    }
}
