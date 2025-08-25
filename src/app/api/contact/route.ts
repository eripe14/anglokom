import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

// WAŻNE: pracujemy na Node.js runtime (Buffer, nodemailer)
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const form = await req.formData();

        const name = String(form.get('name') ?? '');
        const email = String(form.get('email') ?? '');
        const phone = String(form.get('phone') ?? '');
        const subject = 'Wiadomość z formularza kontaktowego - ' + String(form.get('subject'));
        const message = String(form.get('message') ?? '');
        const service = String(form.get('service') ?? '');

        const files = form.getAll('attachments') as File[];

        // mapujemy pliki do nodemailera
        const attachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                return {
                    filename: file.name,
                    content: buffer,
                    contentType: file.type || undefined,
                };
            })
        );

        // transporter — produkcyjnie lepiej: secure: true i port 465
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
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'idronia@anglokom.pl',
            subject,
            html: `
                <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
                <p><strong>Wybrana usługa:</strong> ${escapeHtml(service)}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
              `,
            attachments,
            replyTo: email || undefined,
        });

        return NextResponse.json({message: 'Wiadomość została wysłana.'}, {status: 200});
    } catch (error) {
        console.error('Błąd SMTP:', error);
        return NextResponse.json(
            {message: 'Wysyłka wiadomości nie powiodła się.'},
            {status: 500}
        );
    }
}

// prosta funkcja do ucieczki HTML
function escapeHtml(input: string) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
