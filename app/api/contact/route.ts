import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'NextPixel <onboarding@resend.dev>',
      to: process.env.EMAIL_TO || 'nextpixelwld@gmail.com',
      subject: `🚀 Новая заявка от ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #A86CF5 0%, #4EF0C1 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">NextPixel</h1>
            <p style="color: white; margin: 10px 0 0 0;">Новая заявка с сайта</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Имя клиента:</strong></p>
              <p style="margin: 0; font-size: 18px; color: #333;">${name}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Email / Telegram:</strong></p>
              <p style="margin: 0; font-size: 18px; color: #A86CF5;">${email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #666;"><strong>Сообщение:</strong></p>
              <p style="margin: 0; font-size: 16px; color: #333; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="margin: 0; color: #999; font-size: 12px;">
                Отправлено: ${new Date().toLocaleString('ru-RU', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
