export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Basic validation
    if (!firstName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Received contact submission:', { firstName, lastName, email, phone, subject, message });

    // TODO: In a production environment, you would integrate a mail service here.
    // Examples: Resend, SendGrid, or Nodemailer.
    // Example:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'admin@yourdomain.com',
    //   subject: `New Lead: ${subject}`,
    //   html: `<p>Message from ${firstName} ${lastName} (${email})</p><p>${message}</p>`
    // });

    // Return a success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you shortly!' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
