import { Injectable } from '@nestjs/common';
import { WelcomeService } from './welcome/welcome.service';

@Injectable()
export class AppService {

  constructor(private exService: WelcomeService) { }
  
  sendWelcomeMail() {
    return this.exService.welComeMail();
  }
}
