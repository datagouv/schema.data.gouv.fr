# eslint-config-vuepress

> ESLint config for VuePress Team

**DO NOT use it in your own project if you don't know what it's for**

## Install

```sh
npm i -D eslint-config-vuepress
```

## Usage

Create `.eslintrc.js`:

```js
module.exports = {
  extends: ['vuepress'],

  rules: {
    // override rules
  },
}
```

Create `.eslintignore`:

```
!.vuepress
```

## License

[MIT](https://github.com/vuepress/configs/blob/master/LICENSE) &copy; [VuePress Team](https://github.com/vuepress)
