// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const EXCLUDE_DIRECTORIES = ['node_modules', 'dist', 'public'];

const getProjectFiles = (dir, basePrefix = '') => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const input = {};

  for (const file of files) {
    const resPath = path.resolve(dir, file.name);
    if (file.isDirectory() && !EXCLUDE_DIRECTORIES.includes(file.name)) {
      const nested = getProjectFiles(resPath, file.name);
      Object.assign(input, nested); // does a shallow copy of nested into input
    } else if (file.name.endsWith('.html')) {
      const key = `${basePrefix}`;
      input[key] = resPath;
    }
  }
  return input;
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: getProjectFiles(__dirname, 'designs'),
    },
  },
});
