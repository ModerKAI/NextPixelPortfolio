import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { name, email, discipline, portfolioLink, fileName, fileBase64 } = body;

		if (!name || typeof name !== "string" || name.trim().length < 2) {
			return NextResponse.json(
				{ error: "Name must be at least 2 characters" },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Please enter a valid email" },
				{ status: 400 }
			);
		}

		if (
			portfolioLink &&
			portfolioLink.trim() !== "" &&
			!/^https?:\/\/.+\..+/.test(portfolioLink)
		) {
			return NextResponse.json(
				{ error: "Link must start with http:// or https://" },
				{ status: 400 }
			);
		}

		const attachments: { filename: string; content: Buffer }[] = [];
		if (fileBase64 && fileName) {
			attachments.push({
				filename: fileName,
				content: Buffer.from(fileBase64, "base64"),
			});
		}

		const { data, error } = await resend.emails.send({
			from: "NextPixel Careers <onboarding@resend.dev>",
			to: "nextpixelwld@gmail.com",
			subject: `New Application: ${name} — ${discipline}`,
			attachments,
			html: `
				<div style="font-family: 'Space Grotesk', sans-serif; max-width: 600px; margin: 0 auto;">
					<h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; border-bottom: 3px solid #000; padding-bottom: 16px;">
						New Career Application
					</h1>
					<table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
						<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280; width: 140px;">Name</td>
							<td style="padding: 12px 0; font-size: 16px;">${name}</td>
						</tr>
						<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280;">Email</td>
							<td style="padding: 12px 0; font-size: 16px;"><a href="mailto:${email}" style="color: #135bec;">${email}</a></td>
						</tr>
						<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280;">Discipline</td>
							<td style="padding: 12px 0; font-size: 16px;">${discipline}</td>
						</tr>
						${portfolioLink ? `<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280;">Portfolio</td>
							<td style="padding: 12px 0; font-size: 16px;"><a href="${portfolioLink}" style="color: #135bec;">${portfolioLink}</a></td>
						</tr>` : ""}
						${fileName ? `<tr>
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280;">Attachment</td>
							<td style="padding: 12px 0; font-size: 16px;">📎 ${fileName}</td>
						</tr>` : ""}
					</table>
					<div style="margin-top: 32px; padding: 16px; background: #f6f6f8; border: 2px solid #000;">
						<p style="font-size: 10px; text-transform: uppercase; font-weight: 700; color: #6b7280; margin: 0;">
							Sent via NextPixel Careers Form
						</p>
					</div>
				</div>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json(
				{ error: "Failed to send email" },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true, id: data?.id });
	} catch (err) {
		console.error("API error:", err);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
