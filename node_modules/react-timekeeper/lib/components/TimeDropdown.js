"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeDropdown;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var styles = _interopRequireWildcard(require("./styles/time-dropdown"));

var _configContext = _interopRequireDefault(require("../hooks/config-context"));

var _dom = require("../helpers/dom");

var _utils = require("../helpers/utils");

var _constants = require("../helpers/constants");

var _stateContext = _interopRequireDefault(require("../hooks/state-context"));

let scrollbarWidth = null;

function TimeDropdown({
  close
}) {
  const _useConfig = (0, _configContext.default)(),
        hour24Mode = _useConfig.hour24Mode;

  const _useTimekeeperState = (0, _stateContext.default)(),
        updateTime = _useTimekeeperState.updateTime,
        mode = _useTimekeeperState.mode,
        time = _useTimekeeperState.time;

  const container = (0, _react.useRef)(null);
  const selectedOption = (0, _react.useRef)(null);
  const options = _constants.CLOCK_VALUES[mode].dropdown;
  const selected = (0, _utils.getNormalizedTimeValue)(mode, time).toString();

  function disableBodyScroll() {
    document.documentElement.style.paddingRight = scrollbarWidth + 'px';
    document.documentElement.classList.add('react-timekeeper-noscroll');
  }

  function enableBodyScroll() {
    document.documentElement.style.paddingRight = '0';
    document.documentElement.classList.remove('react-timekeeper-noscroll');
  }

  const elsewhereClick = (0, _react.useCallback)(e => {
    if (!container.current || !e.target) {
      return;
    }

    if (!container.current.contains(e.target)) {
      close();
    }
  }, [close]);
  (0, _react.useEffect)(() => {
    // measure scroll bar width for first time
    if (scrollbarWidth == null) {
      scrollbarWidth = (0, _dom.getScrollBarWidth)();
    } // initial scroll in list


    if (selectedOption.current && container.current) {
      container.current.scrollTop = selectedOption.current.offsetTop;
    } // listener to close if click outside dropdown


    document.addEventListener('click', elsewhereClick, false);
    return () => {
      document.removeEventListener('click', elsewhereClick, false);
      enableBodyScroll();
    };
  }, [elsewhereClick]); // select a value

  function select(val) {
    let parsed = parseInt(val, 10);

    if (mode === _constants.MODE.HOURS_12 && parsed === 12) {
      parsed = 0;
    }

    updateTime(parsed);
    close();
  }

  return (0, _core.jsx)("div", {
    css: styles.wrapper(hour24Mode, mode),
    ref: container,
    onMouseEnter: disableBodyScroll,
    onMouseLeave: enableBodyScroll,
    className: "react-timekeeper__time-dropdown"
  }, (0, _core.jsx)("ul", {
    css: styles.options,
    className: "react-timekeeper__dropdown-numbers"
  }, options.map(o => {
    const isSelected = selected === o;
    return (0, _core.jsx)("li", {
      ref: el => isSelected ? selectedOption.current = el : '',
      className: "react-timekeeper__dropdown-number ".concat(isSelected ? 'react-timekeeper__dropdown-number--active' : ''),
      css: styles.option(isSelected),
      key: o,
      onClick: () => select(o)
    }, o);
  })));
}