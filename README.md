# v-img-error
 A simple Vue directive to catch img errors & broken links and replace them with default or custom fallback


<h1 align="center">
    <img src="https://i.ibb.co/0cL1wQ5/d440mmj72v2vi7ad76ir-2.jpg" alt="vImgError logo" />
    <br>
    v-img-error
    <br>
</h1>
<p align="center" style="font-size: 1.2em;">
    The source code for <a href="https://www.npmjs.com/package/v-img-error">v-img-error</a> a VueJS <a href="https://vuejs.org/v2/guide/custom-directive.html">Directive</a>.
</p>


![NPM Version](https://img.shields.io/npm/v/v-img-error?style=flat-square)
![NPM Dependencies](https://img.shields.io/david/maorbarel/v-img-error?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dt/v-img-error?style=flat-square)
![MIT License](https://img.shields.io/github/license/maorbarel/v-img-error?style=flat-square?style=flat-square)
<br>

![Git Stars](https://img.shields.io/github/stars/maorbarel?style=social)
![Git fork](https://img.shields.io/github/forks/maorbarel/v-img-error?style=social)

> A simple Vue directive to catch img errors & broken links and replace them with default or custom fallback image.
> NO dependencies!

If you like this project, please give it a star & consider following the author. :)
<br>
## Installation
```js
npm install v-img-error
```

## Install globally
_main.js_
```js
import Vue from 'vue';
import vImgError from 'v-img-error';

Vue.use(vImgError)
```

## Install locally
_component.vue_
```js
import { vImgError as imgError } from  "v-img-error";

export default {
   directives: {
      imgError
   }
}
```
## Basic Usage
```js
<template>
    <img src="myImg.png" v-img-error>
    <img src="anotherImg.svg" v-img-error>
</template>
```

## Advanced Usage
> With your custom fallback Img:
```js
<template>
    <img src="myImg.png" v-img-error="path/to/image">
    <img src="anotherImg.svg" v-img-error="path/to/svg">
</template>
```

## Authors
[Maor Barel](https://www.linkedin.com/in/maorbarel "Personal website")

## License
---
MIT © [Maor Barel](https://www.linkedin.com/in/maorbarel "Personal website")
