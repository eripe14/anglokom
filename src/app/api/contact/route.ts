import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { name, email, phone, subject, message, service } = body

    // TODO TLS wywalić na produckji!!
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASSWORD!,
        },
        tls: {
            rejectUnauthorized: false,
        },
    })

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'eripe.workspace@gmail.com',
            subject: subject || 'Wiadomość z formularza kontaktowego',
            html: `
                <p><strong>Imię i nazwisko:</strong> ${name}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Wybrana usługa:</strong> ${service}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${message}</p>
            `,
        })

        return NextResponse.json({ message: 'Wiadomość została wysłana.' }, { status: 200 })
    } catch (error) {
        console.error('Błąd SMTP:', error)
        return NextResponse.json({ message: 'Wysyłka wiadomości nie powiodła się.' }, { status: 500 })
    }
}
