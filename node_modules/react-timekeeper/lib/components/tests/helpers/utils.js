"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockAnimations = mockAnimations;
exports.update = update;
exports.waitForUpdates = waitForUpdates;
exports.triggerMouseClick = triggerMouseClick;
exports.renderTK = renderTK;
exports.changeToMinutes = changeToMinutes;
exports.noop = void 0;

var _core = require("@emotion/core");

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _testUtils = require("react-dom/test-utils");

var _ClockWrapper = _interopRequireDefault(require("../../ClockWrapper"));

var _TimeKeeperWrapper = _interopRequireDefault(require("../../TimeKeeperWrapper"));

var _TopBar = _interopRequireDefault(require("../../TopBar"));

const noop = () => {};

exports.noop = noop;

function mockAnimations() {
  global.requestAnimationFrame = fn => setTimeout(fn, 1);
} // unused by itself?


function update() {
  (0, _testUtils.act)(() => {
    jest.runAllTimers();
  });
}

function waitForUpdates(wrapper) {
  // mock timers so animations finish
  (0, _testUtils.act)(() => {
    jest.runAllTimers();
  }); // update enzyme wrapper

  wrapper.update();
}

function triggerMouseClick(wrapper, opts = {}) {
  const cw = wrapper.find(_ClockWrapper.default); // simulate mouseup and then moouse down with coordinates

  cw.simulate('mousedown', {});
  (0, _testUtils.act)(() => {
    const e = new MouseEvent('mouseup', opts);
    document.dispatchEvent(e);
  });
  waitForUpdates(wrapper);
}

function renderTK(override = {}) {
  const onChange = jest.fn();
  const props = (0, _objectSpread3.default)({
    time: {
      hour: 5,
      minute: 30
    },
    onChange
  }, override);
  const wrapper = (0, _enzyme.mount)((0, _core.jsx)(_TimeKeeperWrapper.default, props));
  return {
    wrapper,
    onChange
  };
}

function changeToMinutes(wrapper) {
  const minute = wrapper.find(_TopBar.default).find('span[data-type="minute"]');
  minute.simulate('click');
  waitForUpdates(wrapper);
}