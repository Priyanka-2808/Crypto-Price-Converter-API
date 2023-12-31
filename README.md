# Crypto Price API

## Overview

This project provides a simple API to retrieve the price of one cryptocurrency in terms of another on a specific date. It uses the Coingecko API to fetch historical cryptocurrency data.

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node.js package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Priyanka-2808/crypto-price-api.git
   ```
Navigate to the project directory:
```bash
cd crypto-price-api
```

2. Install dependencies:
```bash
npm install
```

### Start the server:
```bash
node server.js
The server will be running at http://localhost:3000.
```

![Screenshot 2023-12-12 121044](https://github.com/Priyanka-2808/Crypto-Price-Converter-API/assets/87664708/ad475730-eb51-4c45-9f9b-3d0a58e76fbb)

### API Usage
```Get Crypto Price
  Endpoint: /get-crypto-price
  Method: POST
  Request Body Example:
 json
{
  "fromCurrency": "bitcoin",
  "toCurrency": "basic-attention-token",
  "date": "12-01-2023"
}
```
