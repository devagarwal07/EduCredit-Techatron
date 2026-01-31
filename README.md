# 🎓 EduCredit-Techatron (SkillBridge)

> Empowering Education Through Technology, Skills, and Blockchain

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=flat&logo=tailwind-css)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

**EduCredit-Techatron** (SkillBridge) is a comprehensive educational platform that bridges the gap between students, employers, and investors through a skill-based credit system. The platform leverages blockchain technology, AI-powered career guidance, and interactive 3D visualizations to create a modern, engaging educational ecosystem.

### Mission

To democratize access to educational funding and career opportunities by connecting talented students with investors and employers based on verified skills and potential.

## 🚀 Key Features

### For Students
- 📊 **Skill Assessment System** - Interactive coding tests and skill evaluations
- 💼 **Resume Builder** - Professional AI-powered resume generation
- 🎯 **Career Guidance** - Personalized career path recommendations using Google AI
- 🌍 **3D Globe Visualization** - Interactive global opportunity exploration
- 📜 **Blockchain Credentials** - Immutable, verifiable educational certificates
- 💰 **Education Funding** - Apply for educational credits and funding opportunities
- 🏆 **Education Credit Score** - Track your academic and skill achievements

### For Employers
- 👥 **Talent Discovery** - Find skilled candidates based on verified credentials
- 📈 **Skills Marketplace** - Browse and recruit from a pool of assessed talent
- 🤝 **Direct Engagement** - Connect directly with potential employees

### For Investors
- 💡 **Investment Opportunities** - Fund promising students' education
- 📊 **Portfolio Tracking** - Monitor investment performance and student progress
- 🔒 **Secure Transactions** - Blockchain-backed investment records

### Platform Features
- 🔐 **Authentication** - Secure user authentication via Clerk
- 🌓 **Dark Mode** - Beautiful dark-themed UI with smooth animations
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Real-time Updates** - Live data updates and notifications
- 🎨 **3D Animations** - Engaging Three.js and WebGL visualizations
- 🔗 **Web3 Integration** - Ethereum wallet connectivity via wagmi
- 💳 **Payment Processing** - Secure payments through Stripe

## 🛠 Technology Stack

### Frontend
- **Framework:** Next.js 15.2.4 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5.8.3
- **Styling:** TailwindCSS 4.0, CSS-in-JS with Emotion
- **Animation:** Framer Motion, GSAP, Anime.js
- **3D Graphics:** Three.js, React Three Fiber, React Globe GL
- **UI Components:** Radix UI, shadcn/ui
- **Forms:** React Hook Form with Zod validation
- **State Management:** Zustand

### Backend & Database
- **API Routes:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** Clerk, NextAuth
- **File Upload:** Multer, Cloudinary

### Blockchain & Web3
- **Web3 Library:** wagmi, viem, ethers.js
- **Wallet Connect:** Web3Modal
- **Smart Contracts:** Hardhat (development framework)
- **Solidity Contracts:** OpenZeppelin

### AI & ML
- **AI Integration:** Google Generative AI
- **Code Editor:** Monaco Editor (VSCode)

### Payment & Email
- **Payment Processing:** Stripe
- **Email Service:** Nodemailer
- **Webhooks:** Svix

### Data Visualization
- **Charts:** Recharts, D3.js
- **Graph Visualization:** React Force Graph 2D/3D

### Development Tools
- **Linting:** ESLint
- **Testing:** Jest, Supertest
- **API Testing:** Axios
- **Development:** Nodemon, Turbopack

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **MongoDB** (v6.0 or higher) - Local or Atlas account
- **Git** for version control

Optional but recommended:
- **Hardhat** for blockchain development
- **Metamask** or similar Web3 wallet for testing

## ⚙️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/devagarwal07/EduCredit-Techatron.git
cd EduCredit-Techatron
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Download required assets:**
```bash
npm run download-cloud
```

This command downloads the earth cloud texture for the 3D globe visualization.

## 🔐 Configuration

1. **Create environment file:**

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
MONGODB_URI=your_mongodb_connection_string

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password

# Blockchain (Optional - for development)
HARDHAT_NETWORK=localhost
ETHEREUM_RPC_URL=your_ethereum_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

2. **Configure External Services:**

- **Clerk:** Sign up at [clerk.com](https://clerk.com) and create an application
- **MongoDB:** Set up a database at [mongodb.com/atlas](https://www.mongodb.com/atlas)
- **Stripe:** Create an account at [stripe.com](https://stripe.com) and get API keys
- **Google AI:** Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Cloudinary:** Sign up at [cloudinary.com](https://cloudinary.com) for image hosting

## 🚀 Development

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The app uses **Turbopack** for faster development builds. Pages auto-update as you edit files.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Testing

```bash
npm test
```

## 📁 Project Structure

```
EduCredit-Techatron/
├── app/                          # Next.js App Router pages and layouts
│   ├── (dashboard)/             # Dashboard routes (grouped)
│   ├── api/                     # API routes
│   │   ├── checkout_sessions/   # Stripe checkout endpoints
│   │   ├── funding/             # Funding application APIs
│   │   ├── marketplace/         # Marketplace APIs
│   │   └── onboarding/          # User onboarding APIs
│   ├── about/                   # About page
│   ├── blockchain/              # Blockchain credentials page
│   ├── career-guidance/         # AI-powered career guidance
│   ├── careers/                 # Job listings and career paths
│   ├── community/               # Community features
│   ├── components/              # React components
│   │   ├── 3d/                 # Three.js 3D components
│   │   ├── effects/            # Animation effects
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   ├── employers/               # Employer portal
│   ├── funding/                 # Education funding pages
│   ├── investors/               # Investor portal
│   ├── marketplace/             # Skills marketplace
│   ├── onboarding/              # User onboarding flow
│   ├── premium/                 # Premium features
│   ├── proposals/               # Funding proposals
│   ├── resume-builder/          # Resume builder tool
│   ├── sign-in/                 # Sign in page
│   ├── sign-up/                 # Sign up page
│   ├── skill-assessment/        # Skill assessment tests
│   │   └── coding-test/        # Live coding tests
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Shared component library
│   └── ui/                      # shadcn/ui components
├── lib/                         # Utility functions and helpers
├── public/                      # Static assets
│   ├── data/                    # JSON data files
│   │   ├── courses.json        # Course catalog
│   │   ├── employers.json      # Employer listings
│   │   ├── investors.json      # Investor profiles
│   │   ├── marketplace.json    # Marketplace data
│   │   ├── premium-plans.json  # Premium subscription plans
│   │   ├── proposal.json       # Funding proposals
│   │   ├── skills.json         # Skills database
│   │   └── students.json       # Student profiles
│   └── textures/                # 3D textures and assets
├── types/                       # TypeScript type definitions
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🗺 Available Routes

### Public Routes
- `/` - Landing page with animated hero and features
- `/about` - About the platform
- `/sign-in` - User authentication
- `/sign-up` - User registration
- `/careers` - Browse job opportunities
- `/community` - Community forums and discussions

### Protected Routes (Require Authentication)
- `/dashboard` - User dashboard with overview
- `/onboarding` - New user onboarding flow
- `/funding` - Browse and apply for educational funding
- `/funding/apply` - Submit funding application
- `/marketplace` - Skills marketplace
- `/skill-assessment` - Take skill assessments
- `/skill-assessment/coding-test` - Live coding challenges
- `/career-guidance` - AI-powered career recommendations
- `/resume-builder` - Build professional resumes
- `/blockchain` - View blockchain credentials
- `/premium` - Premium features and plans
- `/proposals` - View funding proposals

### Role-Specific Routes
- `/employers` - Employer dashboard and talent discovery
- `/investors` - Investor dashboard and opportunities

## 🔌 API Endpoints

### Funding APIs
- `POST /api/funding/apply` - Submit funding application
- `GET /api/funding/proposals` - Get funding proposals
- `PUT /api/funding/proposals/:id` - Update proposal status

### Marketplace APIs
- `GET /api/marketplace/listings` - Get marketplace listings
- `POST /api/marketplace/listings` - Create new listing
- `GET /api/marketplace/:id` - Get listing details

### Checkout & Payments
- `POST /api/checkout_sessions` - Create Stripe checkout session
- `POST /api/checkout_sessions/webhook` - Handle Stripe webhooks

### Onboarding
- `POST /api/onboarding/complete` - Complete user onboarding
- `GET /api/onboarding/status` - Check onboarding status

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js application:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add all environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devagarwal07/EduCredit-Techatron)

### Environment Variables

Make sure to configure all environment variables in your deployment platform:
- Authentication keys (Clerk)
- Database connection (MongoDB)
- Payment gateway (Stripe)
- AI API keys (Google AI)
- File storage (Cloudinary)

### Database Setup

1. Create a MongoDB database
2. Set up collections for:
   - Users
   - Funding Applications
   - Proposals
   - Marketplace Listings
   - Blockchain Transactions
3. Configure indexes for optimal performance

### Domain Configuration

Configure custom domain in your hosting provider and update:
- NEXTAUTH_URL
- Clerk redirect URLs
- Stripe webhook URLs

## 🤝 Contributing

We welcome contributions to EduCredit-Techatron! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer:** devagarwal07
- **Contributors:** Welcome!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- Clerk for authentication solutions
- All open-source contributors whose libraries made this possible

## 📞 Support

For support, email support@educredit-techatron.com or join our community Discord.

## 🔮 Future Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced AI-powered job matching
- [ ] Integration with more blockchain networks
- [ ] Expanded course catalog with partnerships
- [ ] Gamification and achievement system
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations

---

**Built with ❤️ for education and opportunity**
