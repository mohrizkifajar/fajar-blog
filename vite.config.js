import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdir, rm, writeFile } from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'app',
  build: {
    outDir: '../static/react',
    emptyOutDir: true,
    assetsDir: '',
  },
  server: {
    port: 1111,
  },
  plugins: [react(), syncToHugo()],
})

function syncToHugo() {
  return {
    closeBundle: async () => {
      const reactBuild = './static/react'
      const assets = await readdir(reactBuild)
      const js = assets.filter((name) => name.includes('.js'))[0]
      const css = assets.filter((name) => name.includes('.css'))[0]
      await Promise.all([
        writeFile('./data/react.json', JSON.stringify({ js, css })),
        rm('./static/react/index.html'),
      ])
      console.log(`wrote ${js} to hugo data`)
    },
  }
}
