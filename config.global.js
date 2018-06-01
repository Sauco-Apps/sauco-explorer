const config = {};
config.shift = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.log = {};
config.exchangeRates = {
	exchanges: {
		SAUCO: {},
		BTC: {},
	},
};
config.marketWatcher = { exchanges: {}, candles: { poloniex: {} }, orders: {} };

module.exports = config;
