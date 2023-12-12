const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/get-crypto-price', async (req, res) => {
    try {
        const { fromCurrency, toCurrency, date } = req.body;

        // To get the price data from Coingecko API
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}`);
        const priceInUSD = response.data.market_data.current_price.usd;

        // To get the exchange rate of the 'toCurrency' to USD
        const exchangeRateResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${toCurrency}&vs_currencies=usd`);
        const exchangeRate = exchangeRateResponse.data[toCurrency].usd;

        // To calculate the price in terms of 'toCurrency'
        const priceInToCurrency = priceInUSD / exchangeRate;

        res.status(200).json({ priceInToCurrency });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});