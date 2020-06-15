"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
expect.extend({
  toExist(el) {
    if (el.exists()) {
      return {
        message: () => "expected element is rendered",
        pass: true
      };
    }

    return {
      message: () => "expected element to be rendered",
      pass: false
    };
  }

}); // TODO - fix warnings