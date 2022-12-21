
# Table of Contents

- [Table of Contents](#table-of-contents)
- [About](#about)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Features](#features)
- [Tasks](#tasks)
- [Technical Stack](#technical-stack)
- [Issues](#issues)
- [To Do](#to-do)

# About

ignite-shop is a Next.js web app that implements a simple shop page with the objective of doing some experiments with the new features of Next.js 13.

# Screenshots



# Getting Started

## Prerequisites

To run this project locally, you need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/) or install it with your package manager. I recommend using [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n).

## Installing

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the app with `npm run dev`

# Features

- Stripe API integration
- Show Product details
- Display products in a carousel
- Checkout with Stripe

# Tasks

- **Visual Structure**
  - [x] Global styles
  - [x] Header
  - [x] Home basic structure
  - [x] Products carousel
- **Stripe API**
  - [x] Fetch products from API
  - [x] Use SSG for products
  - [x] Format price
- **Product and Checkout**
  - [x] Adopt Next.js Link component
  - [x] Create Product page
  - [x] Fetch product from API
  - [x] Implement checkout flow
  - [x] Implement success page


# Technical Stack

- React - A JavaScript library for building user interfaces
- Next.js - The React Framework
- Stitches - A modern CSS-in-JS library
- TypeScript - A typed superset of JavaScript that compiles to plain JavaScript
- EsLint - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
- editorconfig - Helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs
- Stripe - A suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management

# Issues


# To Do

- Add image placeholder for products (see Next.js blur placeholder)
- Add a content loader for product page (skeleton)
- Track fails with Sentry or similar