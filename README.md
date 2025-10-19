# Micro Animations

Micro Animations is a web application designed to provide users with access to a variety of animations implemented in TypeScript (TS), TypeScript JSX (TSX), or CSS. The app showcases animations created using either CSS animations or the Motion library, and allows users to easily copy the code for their own projects.

## Features

- **Animation Examples**: A collection of animations implemented in TS, TSX, and CSS.
- **Copy Code Functionality**: Easily copy the code for any animation to use in your own projects.
- **CSS Animations**: Examples of animations using pure CSS.
- **Motion Library**: Examples of animations using the Motion library with vanilla TS.
- **React Components**: Examples of animations using the Motion library with TSX components.
- **TypeScript**: Strongly typed codebase for better maintainability.
- **Vite**: Fast development and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm (>= 8.x)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd micro-animations
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```sh
npm run build
```

### Previewing the Production Build

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

- `src/` - Main source code
  - `animation-data/` - Animation data and logic
  - `assets/` - Static assets (images, SVGs, etc.)
  - `components/` - React components for animations
- `public/` - Public static files
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration

## License

This project is open source and available under the [MIT License](LICENSE).
