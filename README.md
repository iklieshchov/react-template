# React Template

Webpack based React Template with frequently used dependencies.

## Table of Contents

- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [TODO](#todo)

## Dependencies:

- app:
  - [react-query](https://www.npmjs.com/package/react-query)
  - [axios](https://www.npmjs.com/package/axios)
  - [formik](https://www.npmjs.com/package/formik)
  - [yup](https://www.npmjs.com/package/yup)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [classnames](https://www.npmjs.com/package/classnames)
  - [tailwindcss](https://www.npmjs.com/package/tailwindcss)
  - [@heroicons/react](https://www.npmjs.com/package/@heroicons/react)
- unit / integration testing:
  - [jest](https://www.npmjs.com/package/jest)
- e2e testing:
  - [playwright](https://www.npmjs.com/package/playwright)
- other:
  - [storybook](https://storybook.js.org/)
  - [eslint](https://www.npmjs.com/package/eslint)

## Project Structure

### projects/app

 1. **/assets** - all possible assets
 2. **/authentication** - authentication logic
 3. **/common** - shared smart components
 4. **/components** - shared dummy components
 5. **/interfaces** - all possible interfaces (with exception of component interfaces which should be defined next to the component)
 6. **/pages** - all possible application pages
 7. **/router** - top level app router
 8. **/services** - external communication logic (like http, localStorage, etc.)
 9. **/user** - example of a domain. Includes all relative to that domain logic, components, utils, etc. which make sense only in that context

### projects/e2e

 1. **/page-objects** - see [page objects](https://playwright.dev/docs/test-pom)
 2. **/utils** - base classes, helper functions, etc.
 
 > NOTE: Test scenarios can be defined directly in the e2e directory or grouped with another sub-directory.

### projects/storybook

 1. **/components** - stories for dummy components from app/components
 2. **/config** - storybook config files

 > NOTE: Storybooks can include any stories which must be placed in respective subdirectory

### projects/tests

 1. **/__mocks__** - test mocks for assets
 2. **/user** - integration tests for user domain

 > NOTE: Test scenarios can be defined directly in the test directory or grouped with another sub-directory.

## File naming convention

All the files are named using kebab case notation.

- file-name`.tsx?` - component / hook / utility
- file-name`.layout.tsx` - components layout definition
- file-name`.page-layout.tsx` - page layout definition
- file-name`.router.tsx` - router component
- file-name`.cache-keys.ts` - cache key factory for http caching layer
- file-name`.schema.ts` - validation schema
- file-name`.spec.tsx` - test scenarios

## Scripts

- `npm start` - start dev server
- `npm build` - producition build
- `npm run build-dev` - dev build
- `npm run storybook` - start storybook server
- `npm run build-storybook` - build standalone storybook
- `npm run lint` - run linter check
- `npm run test:unit` - run unit tests
- `npm run test:integration` - run integeration tests
- `npm run test:e2e` - run e2e tests

## TODO

- [ ] Production docker build
- [ ] add [Headless UI](https://headlessui.dev/)?
