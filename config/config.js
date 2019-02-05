require('dotenv').config();

/**
 * @param   {mixed}   key
 * @param   {mixed}   defaultValue
 * @returns {mixed}
 */
let _getEnv = (key, defaultValue) => process.env[key] || defaultValue;

const config = {
  server: {
    port: _getEnv('NODE_PORT', 8888)
  },
  database: {
    host: _getEnv('DB_HOST', ''),
    user: _getEnv('DB_USER', ''),
    password: _getEnv('DB_PASSWORD', ''),
    db: _getEnv('DB_DATABASE', '')
  }
};

module.exports = config;
