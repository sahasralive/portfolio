# Update Environment Variables

## Current Configuration:

```
VITE_EMAILJS_SERVICE_ID=service_kvkkg3u
VITE_EMAILJS_TEMPLATE_ID=template_te8oy1x  ← This is incorrect
VITE_EMAILJS_PUBLIC_KEY=RCZKA-KIoftE32Ht4
```

## Steps to Fix:

### 1. Find Your Correct Template ID

- Go to https://dashboard.emailjs.com/admin/templates
- Look for your template or create a new one
- Copy the correct template ID

### 2. Update the .env file

Replace `template_te8oy1x` with your actual template ID:

```bash
# Update the template ID in your .env file
sed -i '' 's/template_te8oy1x/YOUR_ACTUAL_TEMPLATE_ID/g' .env
```

Or manually edit the .env file and replace `template_te8oy1x` with your correct template ID.

### 3. Restart the Development Server

```bash
npm run dev
```

### 4. Test Again

- Go to http://localhost:5177/emailjs-direct-test.html
- Try sending a test email
- Check if it works now

## Template Requirements:

Your template must use these exact variables:

- {{from_name}}
- {{from_email}}
- {{message}}
- {{to_name}}
