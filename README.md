# Mean Stack Booking App

## Description

The Mean Stack Booking App is a web application developed for booking hotel reservations. With this application, you can browse hotels and make reservations. The application is developed using the MEAN stack, which includes MongoDB, ExpressJS, AngularJS, and NodeJS.

## Installation

- ### Client Installation

To install the client-side of this application, follow the steps below:

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/KaganCubukcu/Angular-booking.git
```

2. Navigate to the client directory using the following command:

```bash
cd angular-booking
```

3. Install the required dependencies using the following command:

```bash
npm install
```

4. Start the client application using the following command:

```bash
ng serve
```

5. The client application should now be running on http://localhost:4200.

- ### Server Installation

To install the server-side of this application, follow the steps below:

1. Navigate to the server directory using the following command:

```bash
cd server
```

2. Install the required dependencies using the following command:

```bash
npm install
```

3. Create a `.env` file in the `server` directory and add the following lines:

```bash
DB_URI="YOUR_MONGODB_URI"
JWT_SECRET="YOUR_JWT_SECRET_VALUE"
PORT=YOUR_PORT_NUMBER
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

```

Replace <YOUR_MONGODB_URI>, <YOUR_JWT_SECRET_VALUE>, <YOUR_STRIPE_SECRET_KEY> and <YOUR_PORT_NUMBER> with your actual values.

4. Start the server application using the following command:

```bash
npm run dev
```

5. If the server is running successfully, you should see the following output in your terminal:

```bash
Server started on port <YOUR_PORT_NUMBER>
Connected to database
```

## Usage

- To use this application, follow the steps below:

- Navigate to http://localhost:4200 in your web browser.

- Create a new account or log in to an existing account.

- You can search for hotels using the search bar.
- You can visit the hotel-specific pages to learn more about the hotel.
- You can book a room and make a reservation, and pay with the Stripe payment method.
