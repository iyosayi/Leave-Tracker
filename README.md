I refactored the backend files into a more cleaner structure. It follows the `Clean code Architecure` by Uncle Bob Martin, which can be gotten from this article [Clean Code Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Changes

The folder structure follows in this format (in increasing level of dependency) `controllers -> use-cases`.
I moved all controller logic to each respective file. Go through the `users folders` and `leaves folders` you'll see respective `controller` files. The routes for users and leaves are `/users` and `/leaves` respectively
I also added eslint to ensure consistent code style across the files.

## Install Dependencies

Before starting the server, install all dependencies using `npm install`.

## To run

Start the server locally by running the command `npm run server`.

## Transpile

Run `npm build`, which will create a dist folder that contains files that was transpiled by babel.
