# Watch Passport Claim Request SDK

## Overview
This SDK provides an easy-to-integrate solution for watch manufacturers and retailers to embed a passport claim form directly into their websites. This enables customers to easily claim their watch passport by entering their serial number, optional claim code, and email. The form interacts with HORAE API to verify details and register the passport on the blockchain.

## Features
- **User-Friendly Form**: Simple and responsive form for claiming watch certificates.
- **Light**: This simple SDK uses only one HTML, CSS, and JS file, allowing it to adapt to all web technologies
- **Customizable UI**: Easy to customize the look and feel of the form to match your branding.

## Integration  
Before integrating this form, it will be necessary to create the API route dedicated to your brand in accordance with your expectations and the practices of the HORAE team. There are several security points to consider:  
1. **Claim Request Workflow**
   To obtain their watch passport, the user must at least provide the serial number of the watch they have just purchased, as well as an email to register on the platform. To increase security and limit brute force attacks, it could be beneficial to associate a "claim secret" with the serial number, which only the customer would possess following their purchase.  
2. **Securing and Limiting API Requests**
   The endpoint for the claim request will be created and unique for your brand. Several options are available depending on your security expectations:
   - **Securing your API endpoint with an API key**: For this, you will need to handle the call to the HORAE API from your own backend server, which will incorporate the HORAE API key into the request. This is the most secure version and will allow you to customize API responses in your frontend and add request limits.
   - **Direct call to the Horae API from your frontend**: This is the simplest but least secure solution. Horae already manages request limits to prevent DDOS, but it does not prevent brute force attacks.

## Customization

The customization possibilities are endless, and we would be delighted to assist you. Here are some examples:  
- **Invitation Email to Join HORAE and Claim Your Brand's Passport**: Customize the email with your own design, structure, and text.
- **Form Design**
- **Workflow and Security Tailored to Your Needs**

