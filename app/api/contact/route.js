import nodemailer from "nodemailer";

export async function POST(req, res) {
    try {
        let body = await new Response(req.body).text();
        body = JSON.parse(body);

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: "rshah107@asu.edu",
        };

        await transporter.sendMail({
            ...mailOptions,
            text: body.text,
            subject: "Portfolio Contact",
            html: `<h2>Email: ${body.email}</h2>
            <h3>Message: ${body.message}</h3>
      `,
        });
        return Response.json({ success: true });
    } catch (error) {
        console.log(error);
        return Response.json({ message: "Something went wrong" });
    }
}
