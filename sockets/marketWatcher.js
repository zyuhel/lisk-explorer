'use strict';

const api = require('../lib/api');
const logger = require('../utils/logger');

module.exports = function (app, connectionHandler, socket) {
  const candles = new api.candles(app);
  const connection = new connectionHandler('Market Watcher:', socket, this);
  const interval = null;
  const data = {};

  this.onInit = function () {
  };

  this.onConnect = function () {
  };

  this.onDisconnect = function () {
  };

  // Private

  const log = function (level, msg) {
    logger[level]('Market Watcher:', msg);
  };
};

