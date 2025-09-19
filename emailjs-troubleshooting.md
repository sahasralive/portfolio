# EmailJS Troubleshooting Guide

## Current Error: 400 Bad Request

This error typically means there's a mismatch between the template variables and the data being sent.

## Step 1: Verify Template Configuration

1. Go to your EmailJS dashboard: https://www.emailjs.com/
2. Navigate to "Email Templates"
3. Find template ID: `template_te8oy1x`
4. Check that the template uses these EXACT variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}` (optional but recommended)

## Step 2: Verify Service Configuration

1. Go to "Email Services" in your dashboard
2. Find service ID: `service_kvkkg3u`
3. Make sure the service is:
   - Active (not suspended)
   - Properly connected to your email provider
   - Has the correct email address configured

## Step 3: Check Template Content

Your template should look like this:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**

```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Portfolio Contact Form
```

## Step 4: Test with Simple Template

If the above doesn't work, try creating a new template with this minimal content:

**Subject:** Test Message

**Content:**

```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

## Step 5: Check Service Limits

- Free accounts have sending limits
- Check if you've exceeded the monthly limit
- Verify your account is not suspended

## Step 6: Test with EmailJS Dashboard

1. Go to your EmailJS dashboard
2. Use the "Test" feature in your template
3. Send a test email directly from the dashboard
4. If this works, the issue is in the code
5. If this fails, the issue is with the template/service configuration

## Common Issues:

1. **Template Variables Mismatch**: Most common cause of 400 errors
2. **Service Not Active**: Check service status
3. **Template Not Published**: Make sure template is saved and published
4. **Rate Limits**: Check if you've exceeded sending limits
5. **Email Provider Issues**: Gmail/Outlook might have restrictions

## Next Steps:

1. Check the console output for detailed error information
2. Verify template configuration in EmailJS dashboard
3. Test with the simple template above
4. Check service status and limits
