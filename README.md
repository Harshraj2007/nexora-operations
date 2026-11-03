## 📌 About Nexora

**Nexora** is an all-in-one, full-stack commerce and business operations platform designed to streamline both customer shopping and back-office management within a single shared ecosystem. 

Powered by **React**, **Vite**, and **Supabase (PostgreSQL with Row-Level Security)**, Nexora bridges the gap between customer-facing storefronts and internal business operations—from inventory deduction to invoice generation and order lifecycle tracking.

### 🚀 Key Features

* **🛍️ Customer Storefront**: Responsive catalog with category filtering, real-time stock indicators, slide-out cart, and order tracking.
* **⚡ Atomic Checkout**: Database-level RPC checkout that reserves inventory, calculates taxes/totals, and auto-generates invoices in a single safe transaction.
* **💳 Integrated Billing & Payments**: Seamless Razorpay checkout with invoice generation, overdue tracking, and refund/cancellation handling.
* **🛡️ Role-Based Access Control (RBAC)**: Fine-grained PostgreSQL RLS policies tailored for 7 roles: *Owner, Admin, Manager, Sales, Inventory, Support, and Customer*.
* **🏬 Inventory & Stock Movements**: Automatic stock adjustments with complete audit logs and threshold alert tracking.
* **📈 Operations & Analytics**: Real-time business health score, revenue charts, order management drawer, and customer relationship monitoring.

### 🛠️ Tech Stack

* **Frontend**: React 18, Vite, CSS Design System
* **Backend & Database**: Supabase (PostgreSQL, Row-Level Security, Edge Functions, Database Triggers)
* **Payments**: Razorpay
* **Deployment**: Vercel
