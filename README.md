
# Blittz-Quiz

An interactive quiz application built with **Next.js 13 App Router**, **TypeScript**, and **Tailwind CSS**.  
It allows users to sign in, choose categories, and attempt quizzes with a clean, responsive UI.


## ✨ Features

- ⚡ **Next.js 13 App Router** with `app/` directory
- 📝 Multiple quiz categories (Science, Technology, etc.)
- 🔐 User authentication (sign-in / sign-up pages)
- 📊 Results page with score summary
- 🎨 Styled with Tailwind CSS and global CSS
- ✅ Written in TypeScript for type safety
- 🗂 Organized folder structure for scalability

---

## 📂 Project Structure

```

blittz-quiz/
├── app/
│   ├── api/                # API routes
│   ├── categories/         # Categories page
│   ├── quiz/               # Quiz page
│   ├── results/            # Results page
│   ├── sign-in/            # Sign in page
│   ├── sign-up/            # Sign up page
│   ├── stats/              # Stats page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable React components
├── context/                # Context providers
├── data/                   # Static data
├── public/                 # Public assets
├── scripts/                # Utility scripts
├── styles/
│   └── globals.css         # Global styles
├── middleware.ts           # Next.js middleware
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
├── .env                    # Environment variables
├── .env.local              # Local env variables
├── .gitignore              # Ignored files for Git
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file

````

---

## 🛠 Installation & Setup

1. Clone the repo**

   bash
   git clone https://github.com/yourusername/blittz-quiz.git
   cd blittz-quiz


2. **Install dependencies**

   bash
   npm install
  

3. **Create environment files**

   Add your environment variables in `.env` or `.env.local`.
   ```env
    DATABASE_URL=your_database_url 
    NEXT_PUBLIC_API_URL=your_api_url

5. **Run development server**

   bash
   npm run dev
   App runs at [http://localhost:3000](http://localhost:3000)

6. **Build for production**

   ```bash
   npm run build
   npm start
   ```


## 🧩 Technologies Used
   
  --React / Next.js 13 App Router**
  --TypeScript**
  --Tailwind CSS
  --Prisma / Database
  --Clerk / Auth**

---

## 📸 Screenshots

<img width="1470" height="803" alt="Screenshot 2025-09-18 at 12 14 36 AM" src="https://github.com/user-attachments/assets/080b9060-aab3-4ff3-9bad-8575841476f3" />
<img width="1470" height="803" alt="Screenshot 2025-09-18 at 12 14 48 AM" src="https://github.com/user-attachments/assets/63e803f4-d565-45d6-8d3d-3a7d5a90959b" />
<img width="1470" height="803" alt="Screenshot 2025-09-18 at 12 17 44 AM" src="https://github.com/user-attachments/assets/982933c6-2c62-4f8c-9143-0942053085e3" />
<img width="1470" height="803" alt="Screenshot 2025-09-18 at 12 17 55 AM" src="https://github.com/user-attachments/assets/fe1833e0-9a48-48be-b027-c5cf7bcff35b" />
<img width="1470" height="803" alt="Screenshot 2025-09-18 at 12 18 09 AM" src="https://github.com/user-attachments/assets/aa4ea45c-7a2c-481e-8734-408e82f4c5a6" />

---

## 👤 Author
Developed and maintained by Rushil Gosain**.

If you like this project, please ⭐ it on GitHub!
