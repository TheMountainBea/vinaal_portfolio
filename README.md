# Portfolio Website

A dark, futuristic portfolio website inspired by huly.io, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🖤 Dark, premium design with black/red color scheme
- ✨ Smooth animations and 3D effects
- 📱 Fully responsive design
- 🎨 Customizable content through data files
- ⚡ Fast performance with Vite
- 🎯 Modern tech stack

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Skill icons
- **Lucide React** - UI icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Customization

All personal content is easily editable through data files in `src/data/`:

### Personal Information (`src/data/personal.ts`)

- Update your name, tagline, bio, email, and photo
- Add or modify social media links

### Skills (`src/data/skills.ts`)

- Add or remove skills from the array
- Each skill needs a name and an icon from `react-icons`

### Projects (`src/data/projects.ts`)

- Add or remove projects
- Each project includes: title, description, image, links, and tech stack

## Color Palette

- **Background**: `#000000` (primary), `#0a0a0a` (secondary)
- **Text**: `#ffffff` (headings), `#dcdcdc` (body)
- **Accents**: `#ff0000` (primary red), `#e63946` (hover states)

## Project Structure

```
src/
├── components/     # React components
├── data/          # Configuration files (personal, skills, projects)
├── styles/        # Global styles
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Sections

1. **Hero** - Name, tagline, and CTA
2. **About** - Personal introduction and photo
3. **Skills** - Grid of skill icons with hover effects
4. **Projects** - 3D hover cards with project details
5. **Contact** - Contact form and social links
6. **Footer** - Copyright and links

## License

MIT
