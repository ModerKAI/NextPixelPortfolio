import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { description, projectType, budget } = body;

		if (!description || typeof description !== "string" || description.trim().length < 10) {
			return NextResponse.json(
				{ error: "Project description must be at least 10 characters" },
				{ status: 400 }
			);
		}

		const { data, error } = await resend.emails.send({
			from: "NextPixel Projects <onboarding@resend.dev>",
			to: "nextpixelwld@gmail.com",
			subject: `New Project Inquiry: ${projectType} — $${budget}`,
			html: `
				<div style="font-family: 'Space Grotesk', sans-serif; max-width: 600px; margin: 0 auto;">
					<h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; border-bottom: 3px solid #000; padding-bottom: 16px;">
						New Project Inquiry
					</h1>
					<table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
						<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280; width: 140px;">Project Type</td>
							<td style="padding: 12px 0; font-size: 16px;">${projectType}</td>
						</tr>
						<tr style="border-bottom: 1px solid #e5e7eb;">
							<td style="padding: 12px 0; font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280;">Budget</td>
							<td style="padding: 12px 0; font-size: 16px;">$${budget}</td>
						</tr>
					</table>
					<div style="margin-top: 24px; padding: 24px; background: #ffffff; border: 3px solid #000;">
						<p style="font-weight: 700; text-transform: uppercase; font-size: 11px; color: #6b7280; margin: 0 0 12px 0;">Description</p>
						<p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
					</div>
					<div style="margin-top: 32px; padding: 16px; background: #f6f6f8; border: 2px solid #000;">
						<p style="font-size: 10px; text-transform: uppercase; font-weight: 700; color: #6b7280; margin: 0;">
							Sent via NextPixel Project Inquiry Form
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
