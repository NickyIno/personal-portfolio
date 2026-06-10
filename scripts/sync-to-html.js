const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'components');

const SITE_CONFIG = `
window.SITE_NAV = [
  { key: 'home', label: 'Beranda', href: '#home' },
  { key: 'skills', label: 'Skills', href: '#skills' },
  { key: 'experience', label: 'Experience', href: '#experience' },
  { key: 'galeri', label: 'Galeri', href: '#galeri' },
  { key: 'blog', label: 'Blog', href: '#blog' },
  { key: 'uses', label: 'Uses', href: '#uses' },
  { key: 'form', label: 'Kontak', href: '#form' }
];

window.VALID_PAGES = ['home', 'skills', 'experience', 'galeri', 'blog', 'uses', 'form'];

window.PAGE_TITLES = {
  home: 'Beranda - Nicky Portfolio',
  skills: 'Skills & Tech Stack - Nicky Portfolio',
  experience: 'Experience - Nicky Portfolio',
  galeri: 'Galeri - Nicky Portfolio',
  blog: 'Blog - Nicky Portfolio',
  uses: 'Uses / Setup - Nicky Portfolio',
  form: 'Kontak - Nicky Portfolio',
  '404': '404 Not Found - Nicky Portfolio'
};
`;

const COMPONENT_FILES = [
  'AnimatedSection.jsx',
  'ProfileOffcanvas.jsx',
  'Navbar.jsx',
  'Hero.jsx',
  'AboutMe.jsx',
  'GitHubStreak.jsx',
  'Prinsip.jsx',
  'SnakeContribution.jsx',
  'StatsBar.jsx',
  'Achievements.jsx',
  'SkillsStack.jsx',
  'Experience.jsx',
  'Blog.jsx',
  'UsesSetup.jsx',
  'Home.jsx',
  'Gallery.jsx',
  'ContactForm.jsx',
  'NotFound.jsx',
  'BackToTop.jsx',
  'Footer.jsx'
];

function toInlineBabel(code) {
  return code
    .replace(/React\.useState/g, 'useState')
    .replace(/React\.useEffect/g, 'useEffect')
    .replace(/React\.useRef/g, 'useRef');
}

function wrapScript(code) {
  return `    <script type="text/babel" data-presets="react">\n${code}\n    </script>`;
}

function buildScripts() {
  const blocks = [];

  const animated = fs.readFileSync(path.join(COMPONENTS, 'AnimatedSection.jsx'), 'utf8');
  blocks.push(wrapScript(
    `const { useState, useEffect, useRef } = React;\n${SITE_CONFIG}\n${toInlineBabel(animated)}`
  ));

  for (const file of COMPONENT_FILES.slice(1)) {
    const code = fs.readFileSync(path.join(COMPONENTS, file), 'utf8');
    blocks.push(wrapScript(toInlineBabel(code)));
  }

  const app = fs.readFileSync(path.join(ROOT, 'app.jsx'), 'utf8');
  blocks.push(wrapScript(toInlineBabel(app)));

  return blocks.join('\n');
}

const htmlPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const startMarker = '    <script type="text/babel" data-presets="react">';
const endMarker = '  </body>';

const startIdx = html.indexOf(startMarker);
const endIdx = html.lastIndexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find script section markers in index.html');
  process.exit(1);
}

const before = html.slice(0, startIdx);
const after = html.slice(endIdx);
const newHtml = before + buildScripts() + '\n' + after;

fs.writeFileSync(htmlPath, newHtml, 'utf8');
console.log('Synced', COMPONENT_FILES.length + 1, 'components to index.html');
