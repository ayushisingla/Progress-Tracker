"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Meridiems;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _meridiems = require("./styles/meridiems");

var _stateContext = _interopRequireDefault(require("../hooks/state-context"));

var _constants = require("../helpers/constants");

function Meridiems() {
  const _useTimekeeperState = (0, _stateContext.default)(),
        time = _useTimekeeperState.time,
        updateMeridiem = _useTimekeeperState.updateMeridiem;

  const setAM = (0, _react.useCallback)(() => {
    updateMeridiem(_constants.MERIDIEM.am);
  }, [updateMeridiem]);
  const setPM = (0, _react.useCallback)(() => {
    updateMeridiem(_constants.MERIDIEM.pm);
  }, [updateMeridiem]);
  const isPM = time.hour >= 12;
  return (0, _core.jsx)("div", {
    css: _meridiems.meridiemWrapper
  }, (0, _core.jsx)("button", {
    type: "button",
    css: (0, _meridiems.meridiem)({
      isSelected: !isPM
    }),
    className: "react-timekeeper-button-reset react-timekeeper__meridiem-toggle ".concat(!isPM ? 'react-timekeeper__meridiem--active' : ''),
    onClick: setAM
  }, "AM"), (0, _core.jsx)("button", {
    type: "button",
    css: (0, _meridiems.meridiem)({
      isRight: true,
      isSelected: isPM
    }),
    className: "react-timekeeper-button-reset react-timekeeper__meridiem-toggle ".concat(isPM ? 'react-timekeeper__meridiem--active' : ''),
    onClick: setPM
  }, "PM"));
}