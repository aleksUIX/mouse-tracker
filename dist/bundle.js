(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MouseMove = require('./modules/MouseMove');

var _MouseMove2 = _interopRequireDefault(_MouseMove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.initEvent();
  }

  _createClass(App, [{
    key: 'initEvent',
    value: function initEvent() {
      var moveEvent = new _MouseMove2.default();
    }
  }]);

  return App;
}();

exports.default = App;

},{"./modules/MouseMove":3}],2:[function(require,module,exports){
'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default();

},{"./App":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mousestop = new Event('mousestop');
var windowObject = window || {};

var MouseMove = function () {
  function MouseMove() {
    _classCallCheck(this, MouseMove);

    this.startCoords = null;
    this.timer = null;

    this.captureEvents();
  }

  _createClass(MouseMove, [{
    key: 'captureEvents',
    value: function captureEvents() {
      // start tracking mouse position
      windowObject.addEventListener('mousemove', this.mouseMoveHandler.bind(this));

      // handle the coordinates
      windowObject.addEventListener('mousestop', this.mouseStopHandler.bind(this));
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(e) {
      if (this.startCoords === null || !this.startCoords) this.startCoords = [e.pageX, e.pageY];

      this.mouseStartTimer(this.startCoords, [e.pageX, e.pageY]);
    }
  }, {
    key: 'mouseStopHandler',
    value: function mouseStopHandler(e) {
      console.log(e.coords);
      // need to calculate and save distance here
    }
  }, {
    key: 'mouseStartTimer',
    value: function mouseStartTimer(startCoords, endCoords) {
      if (this.timer) clearTimeout(this.timer);

      function timeoutHandler() {
        mousestop.coords = {
          start: startCoords,
          end: endCoords
        };
        windowObject.dispatchEvent(mousestop);
        this.startCoords = null;
      }

      this.timer = setTimeout(timeoutHandler.bind(this), 100);
    }
  }]);

  return MouseMove;
}();

exports.default = MouseMove;

},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
