SkillsBlock is responsible for displaying skills for various disciplines in a
card format.

### Examples
```
const skills = [
  {
    title: 'Go',
    description: 'Go is my favorite programming language, if I could write Go for the rest of my life I wouldn\'t complain one bit.',
    skills: [
      { href: 'https://golang.org/', text: 'Go' },
      { href: 'https://echo.labstack.com/', text: 'Echo' },
      { href: 'https://goji.io/', text: 'Goji' },
      { href: 'https://gohugo.io/', text: 'Hugo' },
    ],
  },
  {
    title: 'Javascript',
    skills: [
      { href: 'http://kangax.github.io/compat-table/es2016plus/', text: 'ES 2016+' },
      { href: 'https://webpack.github.io/', text: 'webpack' },
      { href: 'https://babeljs.io/', text: 'Babel' },
      { href: 'https://facebook.github.io/react/', text: 'React' },
      { href: 'http://redux.js.org/', text: 'Redux' },
      { href: 'http://backbonejs.org/', text: 'BackboneJS' },
      { href: 'http://rivetsjs.com/', text: 'RivetsJS' },
      { href: 'https://nodejs.org/en/', text: 'Node.js' },
    ],
  },
];
<SkillsBlock skills={skills} />
```
