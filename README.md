# Cryptocurrency Tracker

This is a monorepo containing both the Express API and Next.js client.

This app was created as an assignment for [Cyberscope](https://www.cyberscope.io/).

Link to live server is [here](https://crypto-tracker-sepia-three.vercel.app/).

## How to use

Clone the repository:

```bash
git clone https://github.com/geovla93/crypto-tracker.git
```

Navigate into the project. Create a **.env** file inside **server** directory, and a **.env.local** file inside **client** directory.

```bash
// .env example
COIN_GECKO_API_URL=https://api.coingecko.com/api/v3
CLIENT_APP_URL=http://localhost:3000
PORT=8080
```

```bash
// .env.local example
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Install dependencies for both projects.

From the root of the monorepo run:

```bash
yarn dev
```

## Testing

There has been implemented some basic testing for both client and server.
To run the tests from the root of the monorepo run:

```bash
yarn test
```

## Production

If you wish to build the projects just run from the root of the monorepo:

```bash
yarn build
```

and then

```bash
yarn start
```

to start the project.

