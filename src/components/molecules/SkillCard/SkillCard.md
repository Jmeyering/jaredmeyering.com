This is a documentation Stub. Each component is required to be documented with
examples

### Examples

Card without description
```
const skill = {
  title: 'Go',
  skills: [
    { href: 'https://golang.org/', text: 'Go' },
    { href: 'https://echo.labstack.com/', text: 'Echo' },
    { href: 'https://goji.io/', text: 'Goji' },
    { href: 'https://gohugo.io/', text: 'Hugo' },
  ],
};

<SkillCard skill={skill} />
```

Card with description
```
const skill = {
  title: 'Go',
  description: 'Description for this card',
  skills: [
    { href: 'https://golang.org/', text: 'Go' },
    { href: 'https://echo.labstack.com/', text: 'Echo' },
    { href: 'https://goji.io/', text: 'Goji' },
    { href: 'https://gohugo.io/', text: 'Hugo' },
  ],
};

<SkillCard skill={skill} />
```
