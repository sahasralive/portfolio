# EmailJS Setup Instructions

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Copy the Service ID

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**

```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Save the template and copy the Template ID

## Step 4: Get Public Key

1. Go to "Account" in your dashboard
2. Copy your Public Key

## Step 5: Configure Environment Variables

Create a `.env` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs and keys.

## Step 6: Test the Contact Form

1. Restart your development server
2. Fill out the contact form
3. Check if the email is sent successfully

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your email service is properly configured
- Verify the template variables match the form field names
- Check the browser console for any error messages
