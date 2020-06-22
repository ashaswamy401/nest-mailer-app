import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { WelcomeService } from './welcome/welcome.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: "smtps://email:pass@smtp.domain.com",
      defaults: {
        from: '"No Reply" <anoreply@gmail.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter,
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WelcomeService],
})
export class AppModule {}
