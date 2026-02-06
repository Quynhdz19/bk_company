# 📧 Hướng dẫn Setup EmailJS để nhận thông tin từ Contact Form

## 🎯 Tổng quan

EmailJS cho phép bạn nhận email trực tiếp từ contact form mà không cần backend server.

**✅ FREE forever** - Tối đa 200 emails/tháng

---

## 🚀 Bước 1: Tạo tài khoản EmailJS

1. Truy cập: https://www.emailjs.com/
2. Click **"Sign Up"**
3. Đăng ký bằng email hoặc Google
4. Xác nhận email

---

## 🚀 Bước 2: Thêm Email Service

1. Sau khi login, vào **"Email Services"**
2. Click **"Add New Service"**
3. Chọn email provider:
   - **Gmail** (khuyến nghị - dễ nhất)
   - Outlook
   - Yahoo
   - Hoặc Custom SMTP

### Với Gmail:
1. Chọn **Gmail**
2. Click **"Connect Account"**
3. Login với Gmail bạn muốn nhận email
4. Cho phép EmailJS truy cập
5. **Copy Service ID** (dạng: `service_xxxxxxx`)

---

## 🚀 Bước 3: Tạo Email Template

1. Vào **"Email Templates"**
2. Click **"Create New Template"**
3. Điền thông tin:

### Subject (Tiêu đề email):
```
New Contact from {{from_name}} - InnoBKTech
```

### Content (Nội dung email):
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service Interested: {{service}}

Message:
{{message}}

---
This email was sent from InnoBKTech Contact Form
```

4. Click **"Save"**
5. **Copy Template ID** (dạng: `template_xxxxxxx`)

---

## 🚀 Bước 4: Lấy Public Key

1. Vào **"Account"** → **"General"**
2. Tìm **"Public Key"**
3. **Copy Public Key** (dạng: `abcdefghij1234567`)

---

## 🚀 Bước 5: Cấu hình Project

### Mở file `.env` trong project:

```bash
# .env
VITE_EMAILJS_SERVICE_ID=service_abc123     # ← Paste Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz789   # ← Paste Template ID
VITE_EMAILJS_PUBLIC_KEY=your_public_key    # ← Paste Public Key
```

### ⚠️ LƯU Ý QUAN TRỌNG:
- **KHÔNG** commit file `.env` lên Git
- File `.env` đã có trong `.gitignore`
- Khi deploy lên Vercel, cần thêm Environment Variables

---

## 🚀 Bước 6: Test

1. Restart dev server:
```bash
npm run dev
```

2. Mở website: http://localhost:5173/

3. Scroll xuống Contact Form

4. Điền thông tin và submit

5. **Check email** - Bạn sẽ nhận được email!

---

## 🚀 Bước 7: Deploy lên Vercel

### Thêm Environment Variables:

1. Vào Vercel Dashboard
2. Chọn project
3. Settings → Environment Variables
4. Thêm 3 biến:
   - `VITE_EMAILJS_SERVICE_ID` = service_abc123
   - `VITE_EMAILJS_TEMPLATE_ID` = template_xyz789
   - `VITE_EMAILJS_PUBLIC_KEY` = your_public_key

5. Redeploy project

---

## 📧 Email mẫu bạn sẽ nhận

```
From: noreply@emailjs.com
To: your-email@gmail.com
Subject: New Contact from John Doe - InnoBKTech

You have received a new contact form submission:

Name: John Doe
Email: john@example.com
Company: ABC Company
Service Interested: Web App Development

Message:
I'm interested in building a web application for my business.
Could we schedule a call to discuss?

---
This email was sent from InnoBKTech Contact Form
```

---

## 🎨 Tùy chỉnh Email Template

### Variables có sẵn:
- `{{from_name}}` - Tên người gửi
- `{{from_email}}` - Email người gửi
- `{{company}}` - Tên công ty
- `{{service}}` - Dịch vụ quan tâm
- `{{message}}` - Nội dung tin nhắn
- `{{to_name}}` - Tên người nhận (InnoBKTech Team)

### Thêm HTML styling:
```html
<div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
  <h2 style="color: #333;">New Contact Request</h2>
  <div style="background: white; padding: 20px; border-radius: 8px;">
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Service:</strong> {{service}}</p>
    <hr>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
  </div>
</div>
```

---

## 🐛 Troubleshooting

### Không nhận được email?

1. **Check Spam folder**

2. **Kiểm tra console log**:
   - F12 → Console
   - Tìm log: "Email sent successfully" hoặc lỗi

3. **Verify Service ID, Template ID, Public Key**:
   - Đảm bảo copy đúng
   - Không có khoảng trắng thừa
   - Đúng format

4. **Check EmailJS Dashboard**:
   - Vào "Dashboard" → "Logs"
   - Xem lịch sử gửi email

5. **Gmail blocking?**:
   - Thử với email khác
   - Check Gmail settings

### Error: "Failed to send message"

1. Check internet connection
2. Verify API keys chính xác
3. Check browser console cho error chi tiết
4. Đảm bảo restart server sau khi update `.env`

---

## 💰 Giới hạn Free Plan

- **200 emails/tháng** - Đủ cho portfolio
- **1 email service**
- **2 email templates**
- **Tất cả features cơ bản**

### Nếu cần nhiều hơn:
- Personal Plan: $7/tháng - 1000 emails
- Professional Plan: $17/tháng - 5000 emails

---

## 🔒 Bảo mật

### ✅ Đã bảo mật:
- Public Key an toàn để public
- EmailJS rate limiting tự động
- Không lộ email nhận trong code

### ❌ Không nên:
- Commit file `.env` lên Git
- Share API keys công khai
- Dùng Private Key (chỉ dùng Public Key)

---

## 📊 Xem thống kê

1. Vào EmailJS Dashboard
2. Xem "Dashboard" tab:
   - Số email đã gửi
   - Tỷ lệ thành công
   - Logs chi tiết

---

## 🎯 Alternative Options

Nếu không muốn dùng EmailJS:

1. **FormSpree**: https://formspree.io/
2. **Formsubmit**: https://formsubmit.co/
3. **Web3Forms**: https://web3forms.com/
4. **Netlify Forms**: Nếu deploy trên Netlify
5. **Vercel + API Route**: Tự code backend

---

## ✅ Checklist hoàn thành

- [ ] Tạo tài khoản EmailJS
- [ ] Add Gmail service
- [ ] Create email template
- [ ] Copy Service ID, Template ID, Public Key
- [ ] Update file `.env`
- [ ] Restart dev server
- [ ] Test form
- [ ] Nhận được email test
- [ ] Deploy lên Vercel
- [ ] Add environment variables trên Vercel
- [ ] Test form trên production

---

**🎉 Xong! Bây giờ bạn sẽ nhận email mỗi khi có người submit form!**

**Need help?** 
- EmailJS Docs: https://www.emailjs.com/docs/
- Support: support@emailjs.com
