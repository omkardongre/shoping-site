# Shopping Site

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Project Overview

This Angular project is a simple shopping site that includes the following features:
- **Home Page**: Displays a list of products fetched from a fake store API.
- **Cart Page**: Allows users to view and manage their shopping cart.
- **Cart Logic**: Includes adding, removing, and updating item quantities in the cart.
- **Stripe Payment**: Integration with Stripe for handling payments.

## Basic Routes

- `/home`: The home page that displays available products.
- `/cart`: The cart page where users can view and manage their cart items.

## Development Server

### Angular Frontend

1. Run `ng serve` for a development server.
2. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
3. Create Environment Files:
   - Create `src/environments/environment.ts` for development:
     ```typescript
     export const environment = {
       production: false,
       stripePublicKey: 'YOUR_TEST_STRIPE_PUBLIC_KEY'
     };
     ```


### Express Server for Stripe

1. Navigate to the `server` directory:
   ```sh
   cd server


2. Install the necessary dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your Stripe secret key:
   ```plaintext
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Run the server:
   ```sh
   node server.js
   ```
5. The server will run on `http://localhost:4242/`.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Using Fake Store API

This project uses the Fake Store API to fetch product data. Ensure you have the API endpoint configured in your services where you fetch the product data.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributing

Feel free to fork this project, make your own changes, and submit pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License.

```

This README file now includes comprehensive instructions for setting up and running both the Angular frontend and the Express backend server, as well as detailed information on configuring and using Stripe for payment processing.
