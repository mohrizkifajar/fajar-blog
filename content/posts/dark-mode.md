---
title: 'Dark Mode'
date: 2022-12-03T12:36:45+07:00
draft: false
description: 'Easy way to add dark mode to your site'
---

To make your site interesting, you can add dark mode theme.

## CSS

Detect from user preference through an operating system setting (e.g. light or dark) with `@media (prefers-color-scheme)`

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #272626;
    color: #fff;
  }
}
```
