"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigProvider = ConfigProvider;
exports.default = useConfig;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

const configContext = (0, _react.createContext)({});

function ConfigProvider({
  children,
  coarseMinutes = 5,
  forceCoarseMinutes = false,
  switchToMinuteOnHourSelect = false,
  closeOnMinuteSelect = false,
  hour24Mode = false,
  onDoneClick = null,
  doneButton = null
}) {
  const config = (0, _react.useMemo)(() => {
    if (coarseMinutes < 1) {
      throw new Error('coarseMinutes must be at least 1');
    }

    return {
      coarseMinutes,
      forceCoarseMinutes,
      switchToMinuteOnHourSelect,
      closeOnMinuteSelect,
      hour24Mode,
      onDoneClick,
      doneButton
    };
  }, [coarseMinutes, forceCoarseMinutes, switchToMinuteOnHourSelect, closeOnMinuteSelect, onDoneClick, hour24Mode, doneButton]);
  return (0, _core.jsx)(configContext.Provider, {
    value: config
  }, children);
}

function useConfig() {
  return (0, _react.useContext)(configContext);
}