import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verificationEmailTemplate } from "@/components/VerificationEmailTemplate";

export const sendEmail = async (userEmail: string, subject: string, message: string, verificationLink: string) => {
    try {
        var transporter = nodemailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            port: 2525,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            }
        });

        let message = verificationEmailTemplate(verificationLink);

        const mailOptions = {
            from: 'info@demomailtrap.com',
            to: userEmail,
            subject: subject,
            html: message
        };


        let info = await transporter.sendMail(mailOptions);
        console.log('Email Sent: %s', info.messageId);

        return NextResponse.json({
            message:"User Created Successfully"
        }, {
            status:201
        })


    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong " + error
        }, {
            status: 500
        })
    }
}