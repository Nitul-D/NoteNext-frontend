/* eslint-disable no-console */

const isProd = process.env.NODE_ENV === "production";

const log = (...args) => {
  if (!isProd) console.log(...args);
};

const warn = (...args) => {
  if (!isProd) console.warn(...args);
};

const error = (...args) => {
  console.error(...args);
};

const logger = { log, warn, error };

export default logger;
