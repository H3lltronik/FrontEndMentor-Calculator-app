import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontendmentor-calculator-app",
  plugins: [reactRefresh()]
})
// Command for pushing to gh-pages when commit
// git subtree push --prefix dist origin gh-pages