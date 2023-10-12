# DevKits

![GitHub License](https://img.shields.io/badge/license-ISC-blue.svg)

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

# Project

- 🔐 DevKits is a lightweight and efficient library for create and compare hashed password.<br>

# Installation

You can install DevKits using npm or yarn.

```shell
npm install artia-dev-kit
```

## or

```shell
yarn add artia-dev-kit
```

# Usage

## Example code in javaScript

```js
const { DevKits } = require("artia-dev-kit");
// Generate a salt of 1000 characters by default.
const salt = DevKits.createSalt();

// Create a hash for a password using the generated salt.
const hashedPassword = DevKits.createHashPassword("myPassword", salt);

// Compare a plain text password with the hashed password.
const isPasswordMatch = DevKits.compareHashedPassword(
  "myPassword",
  hashedPassword
);

if (isPasswordMatch) {
  console.log("The password is correct.");
} else {
  console.log("The password is incorrect.");
}
```

## Example code in typeScript

```ts
import { DevKits } from "artia-dev-kit";
// Generate a salt of 1000 characters by default.
const salt = DevKits.createSalt();

// Create a hash for a password using the generated salt.
const hashedPassword = DevKits.createHashPassword("myPassword", salt);

// Compare a plain text password with the hashed password.
const isPasswordMatch = DevKits.compareHashedPassword(
  "myPassword",
  hashedPassword
);

if (isPasswordMatch) {
  console.log("The password is correct.");
} else {
  console.log("The password is incorrect.");
}
```

<hr></hr>

# 📂 References

> Here's the code references for **DevKits**.

## 🔑 createSalt

> Create a random salt.
>
> - `saltLength` - The length of the generated salt

```js
const salt = DevKits.createSalt(10000);

// return random salt
```

## 🔒 createHashPassword

> Create a hash for a given password using a salt.
>
> - `password` - The password to be hashed.
> - `salt` - The salt to be used in the hash.

```js
const hashedPassword = DevKits.createHashPassword(password, salt);
console.log(hashedPassword); // The hashed password as a string
```

## 🔐 compareHashedPassword

> Create a hash for a given password using a salt.
>
> - `password` - The plain text password.
> - `hashedPassword` - The hashed password with salt.

```js
const isPasswordMatch = DevKits.compareHashedPassword(password, hashedPassword); // True if the passwords match, false otherwise.

if (isPasswordMatch) {
  console.log("The password is correct.");
} else {
  console.log("The password is incorrect.");
}
```

---

## 🧱 Contributing

> If you want to contribute to the development of this library, please feel free to open issues and pull requests on the GitHub repository.

## 📝 License

> This project is licensed under the ISC License - refer to the LICENSE file for details.

---

### Powered by Miuzaki 👋

> Discord: [Contact me!](https://discord.com/users/976269710956068904) Github Miuzaki: [github.com/Miuzaki](https://github.com/Miuzaki) &nbsp;
