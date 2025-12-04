# Inquiry Form Setup - Kafe Barako

## ✅ **Inquiry Functionality Implemented!**

I've successfully integrated the inquiry form with Web3Forms email service and Facebook Messenger fallback, matching the Deliciosa implementation.

---

## 🔧 **Environment Variables Required**

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
NEXT_PUBLIC_TO_EMAIL=kafebarako@gmail.com
```

### **How to Get Web3Forms Access Key:**

1. Go to https://web3forms.com/
2. Sign up for a free account
3. Create a new form
4. Copy your Access Key
5. Paste it in `.env.local`

---

## 📧 **Email Configuration**

**Recipient Email:** `kafebarako@gmail.com`

**Email Format:**
- Subject: `New Inquiry from [Name] - Kafe Barako`
- From: `Kafe Barako Website`
- Contains: Name, Email, Phone, Event Date, Message

---

## 💬 **Facebook Messenger Integration**

**Direct Messenger Link:** `https://m.me/kafebarakomalolos`

**How It Works:**
1. User submits inquiry form
2. Email is sent via Web3Forms
3. Modal appears with inquiry details
4. Details are auto-copied to clipboard
5. User can click "Message Us on Facebook" button
6. Opens Facebook Messenger directly to Kafe Barako Malolos page

---

## 🎯 **Features Implemented**

### **1. Form Submission**
- ✅ Name (required)
- ✅ Email (required)
- ✅ Phone (required)
- ✅ Event Date (optional)
- ✅ Message (required)

### **2. Email Sending**
- ✅ Uses Web3Forms API
- ✅ Sends to `kafebarako@gmail.com`
- ✅ Professional email format
- ✅ Error handling

### **3. Success Modal**
- ✅ Shows submission status
- ✅ Displays inquiry details
- ✅ Auto-copies to clipboard
- ✅ Copy button for manual copy
- ✅ Facebook Messenger button
- ✅ Close button

### **4. User Experience**
- ✅ Loading state during submission
- ✅ Form resets after submission
- ✅ Success/error messages
- ✅ Alternative contact method (Facebook)
- ✅ Mobile-responsive design

---

## 📱 **User Flow**

1. **User fills out form** → Name, Email, Phone, Event Date, Message
2. **Clicks "Send Inquiry"** → Loading state shows
3. **Email is sent** → Via Web3Forms to kafebarako@gmail.com
4. **Modal appears** → Shows success or error message
5. **Details auto-copied** → Inquiry details copied to clipboard
6. **Two options:**
   - **Option A:** Close modal (email already sent)
   - **Option B:** Click "Message Us on Facebook" → Opens Messenger

---

## 🔄 **Fallback System**

**If email fails:**
1. Modal still appears
2. Shows warning message
3. Inquiry details are displayed
4. User can copy details
5. User can message directly on Facebook
6. No data is lost

---

## 📝 **Inquiry Message Format**

```
☕ NEW INQUIRY - Kafe Barako

👤 Name: [Customer Name]
📧 Email: [customer@email.com]
📱 Phone: [Phone Number]
📅 Event Date: [Date or "Not specified"]

💬 Message:
[Customer's message here]
```

---

## 🎨 **Modal Design**

**Header:**
- ✅ Success: "✅ Inquiry Submitted!"
- ⚠️ Error: "⚠️ Inquiry Received"
- Close button (X)

**Body:**
- Status message (green for success, yellow for error)
- Alternative option explanation
- Inquiry details (read-only textarea)
- Copy button
- Facebook Messenger button
- Close button

---

## 🔒 **Security & Privacy**

- ✅ Environment variables for sensitive data
- ✅ Client-side form validation
- ✅ No data stored locally (except clipboard)
- ✅ HTTPS for API calls
- ✅ No sensitive data in URLs

---

## 🧪 **Testing**

### **Test the Form:**
1. Fill out all required fields
2. Submit the form
3. Check if email arrives at `kafebarako@gmail.com`
4. Verify modal appears
5. Test copy button
6. Test Facebook Messenger button

### **Test Error Handling:**
1. Submit without Web3Forms key
2. Verify modal still appears
3. Verify Facebook option works
4. Verify details can be copied

---

## 📦 **Dependencies**

**Icons:** `lucide-react`
- Send
- Loader2
- X
- Copy
- MessageCircle

**Already installed** - No additional packages needed!

---

## 🔧 **Customization**

### **Change Email Recipient:**
Update in `.env.local`:
```env
NEXT_PUBLIC_TO_EMAIL=newemail@example.com
```

### **Change Facebook Page:**
Update in `ContactForm.tsx` line 116:
```tsx
window.open('https://m.me/your-facebook-page', '_blank');
```

### **Change Inquiry Format:**
Update in `ContactForm.tsx` lines 24-32

---

## ✨ **Summary**

✅ **Web3Forms** integration for email sending
✅ **Facebook Messenger** direct link
✅ **Auto-copy** inquiry details to clipboard
✅ **Success/Error** modal with fallback options
✅ **Mobile-responsive** design
✅ **Professional** email format
✅ **User-friendly** experience

---

## 📞 **Contact Channels**

**Primary:** Email to `kafebarako@gmail.com`
**Fallback:** Facebook Messenger `@kafebarakomalolos`

---

**Last Updated:** December 4, 2024
**Status:** Ready to Use (Add Web3Forms key to `.env.local`)
