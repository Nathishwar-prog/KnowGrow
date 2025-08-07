# 📂 Source Folder Guidelines

## 🎯 Purpose
This folder contains the **core source code** of the project.  
It includes all main application logic, modules, components, and any related files essential for the functioning of the software.

---

## 📁 File Organization
1. Organize by **functionality or feature**:
   - `components/` — reusable UI or functional components
   - `modules/` — core business logic
   - `services/` — API calls, database interactions, external integrations
   - `utils/` — helper functions and utilities
2. Keep a **clear folder hierarchy** for scalability and maintainability.

---

## ⚠️ Valid Files Only
- Store only **source code files** relevant to the application.
- Do **not** store compiled, build, or temporary files here.
- No unrelated media, docs, or configuration files unless part of the core logic.

---

## 📌 Naming Convention
- Use **lowercase filenames** with hyphens or underscores for separation.
- For classes or components, follow the project’s naming standard (e.g., `PascalCase` for React components).
- Example:
  - `user-service.js`
  - `data-utils.js`
  - `HeaderComponent.jsx`

---

## 🔒 Best Practices
1. Keep functions **modular and reusable**.
2. Avoid hardcoding values — use configuration files or environment variables.
3. Document complex logic with comments.

---

## ♻️ Version Control & Edits
1. Do not delete or rewrite core modules without explicit approval.
2. Clearly document any major changes in commit messages.
3. Maintain backward compatibility where possible.

---
