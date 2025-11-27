# Portfolio

A modern, animated portfolio website built with Next.js 15, featuring real-time Spotify integration, GitHub contributions visualization, and smooth scroll animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Smooth Scrolling**: [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
- **UI Components**: Radix UI, Tabler Icons, React Icons
- **Analytics**: Vercel Analytics
- **Deployment**: Optimized for Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/M-SaaD-H/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:

```env
# Spotify API (optional - for Spotify integration)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token

# GitHub API (optional - for contributions graph)
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_github_personal_access_token
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/          # SVG assets
│   ├── projects/        # Project images
│   ├── skills/          # Skill icons
│   └── avatar.png       # Profile picture
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contributions/  # GitHub contributions API
│   │   │   └── spotify/        # Spotify status API
│   │   ├── dashboard/          # Dashboard page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── Intro.tsx           # Introduction section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Projects gallery
│   │   ├── GithubGraph.tsx     # GitHub contributions graph
│   │   ├── SpotifyCard.tsx     # Spotify now playing card
│   │   └── ...
│   └── lib/
│       ├── spotify.ts          # Spotify API utilities
│       └── utils.ts            # Utility functions
├── next.config.ts
├── tailwind.config.js
└── package.json
```

## 🔧 Configuration

### Spotify Integration

To enable Spotify integration:

1. Create a Spotify app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Get your Client ID and Client Secret
3. Generate a refresh token using the [Spotify OAuth flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow)
4. Add the credentials to your `.env.local` file

### GitHub Contributions

To enable GitHub contributions graph:

1. Generate a GitHub Personal Access Token with `read:user` scope
2. Add your GitHub username and token to `.env.local`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

- Edit `src/components/Intro.tsx` to update your bio and social links
- Replace `/public/avatar.png` with your profile picture
- Update project images in `/public/projects/`

### Modify Skills

- Edit `src/components/Skills.tsx` to add/remove skills
- Add skill icons to `/public/skills/`

### Add Projects

- Edit `src/components/Projects.tsx` to add your projects
- Add project images to `/public/projects/`

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

The site will be live at `https://your-project.vercel.app`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons from [Tabler Icons](https://tabler.io/icons) and [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Geist](https://vercel.com/font)