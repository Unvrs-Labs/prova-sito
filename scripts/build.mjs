// Copia src/ in dist/ (da zero a ogni build).
import { cpSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
cpSync('src', 'dist', { recursive: true });
console.log('build: src -> dist');
