import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "43156df88e471b",
    pass: "32fed0e2b6faad",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feddget <oi@feedget.com>",
      to: "Natan Mário <natanmrios@gmail.com>",
      subject,
      html: body,
    });
  }
}
