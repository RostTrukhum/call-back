import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'b24259488@gmail.com',
    pass: 'dvmomvovnjpyywow',
  },
});

router.post('/sendCallBack', async (req, res) => {
	try {
	  transporter.sendMail({
		from: `Зворотній дзвінок від ${req?.body?.phoneNumber}`,
		to: 'gospodar.kovka@gmail.com',
		subject: `Зворотній дзвінок від ${req?.body?.phoneNumber}`,
		html: `<p>Зворотній дзвінок від <a href=tel:+${req?.body?.phoneNumber}>
		+${req?.body?.phoneNumber}
	  </a></p>`,
	  });
  
	  res.status(200).send('Success has send call back');
	} catch (e) {
	  res.status(400).send(e);
	}
  });

export default router;