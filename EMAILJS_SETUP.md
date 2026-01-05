# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account (`mdmobinmiah1998@gmail.com`)
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Mobin,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## Step 5: Update Contact Component
Replace these placeholders in `src/components/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## Step 6: Install Dependencies
Run this command in your project:
```bash
npm install emailjs-com
```

## Step 7: Test the Form
1. Start your development server: `npm start`
2. Fill out the contact form
3. Check your Gmail inbox for the message

## Alternative Options

### Option 2: Formspree (Simpler Setup)
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get form endpoint
3. Update form action to point to Formspree endpoint

### Option 3: Netlify Forms (If deploying on Netlify)
1. Add `netlify` attribute to form
2. Add hidden input with form name
3. Netlify automatically handles form submissions

### Option 4: Backend Solution
Create your own backend with:
- Node.js + Express
- Nodemailer for sending emails
- Deploy on Vercel/Railway/Render

## Security Notes
- EmailJS public key is safe to expose in frontend
- Consider adding reCAPTCHA for spam protection
- Set up rate limiting in EmailJS dashboard

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct
- Ensure Gmail service is properly connected
- Check EmailJS dashboard for delivery status