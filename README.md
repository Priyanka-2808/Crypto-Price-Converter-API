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
   git clone https://github.com/your-username/crypto-price-api.git
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

### API Usage
>[!IMPORTANT]
- Get Crypto Price
- Endpoint: /get-crypto-price
- Method: POST
- Request Body Example:
- json
{
  "fromCurrency": "bitcoin",
  "toCurrency": "basic-attention-token",
  "date": "12-01-2023"
}
