# 📂 Auth Folder Guidelines

## 🔐 Purpose
This folder contains all files related to **user authentication and authorization**, such as:
- Login
- Signup
- Password reset
- Session handling
- Token management

---

## 📁 File Organization
1. Group logic by **functionality**:
   - `login.js`, `signup.js`, `reset-password.js`, etc.
   - Create subfolders if needed:  
     - `middlewares/` — authentication middlewares  
     - `helpers/` — helper functions  
     - `validators/` — input validation
2. Use **modular structure**: Keep logic reusable and separate concerns.

---

## ⚠️ Valid Files Only
- Store only **authentication-related** files here.
- Do **not** place UI-specific, unrelated scripts or styles in this folder.

---

## 🔒 Security Practices
1. Never commit files with **hardcoded credentials or tokens**.
2. Use environment variables for secret keys.
3. Sanitize user inputs and validate all data.

---

## 📌 Naming Convention
- Use **clear, lowercase filenames** with hyphens or underscores.  
  Example: `token-validator.js`, `auth-middleware.js`

---

## ♻️ Version Control & Edits
1. Do not delete or overwrite auth files without explicit approval.
2. If editing, clearly document the change and commit message.
3. Use versioned filenames if maintaining multiple versions.  
   Example: `jwt-auth-v2.js`

---
