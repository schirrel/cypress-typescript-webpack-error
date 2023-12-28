# cypress-typescript-webpack-error
Reproduction error repo for bug with typescript and pathalias

for https://github.com/cypress-io/cypress/issues/25300
and https://github.com/cypress-io/cypress/issues/28602

Steps to reproduce typescript bundler error
- execute `yarn`
- execute :
  - `yarn test` to run on terminal, or
  - `yarn open` to open cy page
 
<img width="1099" alt="Screenshot 2023-12-27 at 18 13 53" src="https://github.com/schirrel/cypress-typescript-webpack-error/assets/6757777/3fe7c3c9-ae43-41a6-9cf4-f4abe2ce4ac8">


step to reproduct scrollBehavior error:  

- execute `yarn`
- open `cypress.config.ts`
![Screenshot 2023-12-28 at 12 30 40](https://github.com/schirrel/cypress-typescript-webpack-error/assets/6757777/05419ddf-232a-4ce9-8d39-8e7993763173)
