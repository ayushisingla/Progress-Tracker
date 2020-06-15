"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Numbers = require("../Numbers");

var _Meridiems = _interopRequireDefault(require("../Meridiems"));

var _TopBar = _interopRequireDefault(require("../TopBar"));

var _TimeDropdown = _interopRequireDefault(require("../TimeDropdown"));

require("./helpers/setup");

var _utils = require("./helpers/utils");

var _clickData = require("./helpers/click-data");

// import React from 'react'

/*
	TODO
	- test coarse minutes + hours
*/
describe('handles events correctly', () => {
  beforeEach(() => {
    (0, _utils.mockAnimations)();
    jest.useFakeTimers();
  });
  describe('updates hours', () => {
    function testHoursFor12hMode(coords, expectedHour) {
      const _renderTK = (0, _utils.renderTK)(),
            onChange = _renderTK.onChange,
            wrapper = _renderTK.wrapper;

      (0, _utils.triggerMouseClick)(wrapper, coords);
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: expectedHour
      }));
    }

    test('handles click on "3" during 12h mode', () => {
      testHoursFor12hMode(_clickData.HOUR_3_OUTER, 3);
      testHoursFor12hMode(_clickData.HOUR_3_INNER, 3);
    });
    test('handles click on "12" during 12h mode', () => {
      testHoursFor12hMode(_clickData.HOUR_24_OUTER, 0);
      testHoursFor12hMode(_clickData.HOUR_24_OUTER, 0);
    });

    function testHoursFor24hMode(coords, expectedHour) {
      const _renderTK2 = (0, _utils.renderTK)({
        hour24Mode: true
      }),
            onChange = _renderTK2.onChange,
            wrapper = _renderTK2.wrapper;

      (0, _utils.triggerMouseClick)(wrapper, coords);
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: expectedHour
      }));
    } // check correct time is output when clicking on inner or outer


    test('handles outer click on "3" during 24h mode', () => {
      testHoursFor24hMode(_clickData.HOUR_3_OUTER, 15);
    });
    test('handles inner click on "3" during 24h mode', () => {
      testHoursFor24hMode(_clickData.HOUR_3_INNER, 3);
    });
    test('handles outer click on "12" during 24h mode', () => {
      testHoursFor24hMode(_clickData.HOUR_24_OUTER, 0);
    });
    test('handles inner click on "12" during 24h mode', () => {
      testHoursFor24hMode(_clickData.HOUR_12_INNER, 12);
    });
  });
  describe('updates minutes', () => {
    function testMinutes(coords, expectedMinute, opts = {}) {
      const _renderTK3 = (0, _utils.renderTK)(opts),
            onChange = _renderTK3.onChange,
            wrapper = _renderTK3.wrapper;

      (0, _utils.changeToMinutes)(wrapper);
      (0, _utils.triggerMouseClick)(wrapper, coords);
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(expect.objectContaining({
        minute: expectedMinute
      }));
    }

    test('handles click on "15"', () => {
      testMinutes(_clickData.HOUR_3_OUTER, 15);
    });
    test('handles click on "15"', () => {
      testMinutes(_clickData.HOUR_12_INNER, 0);
    });
    test('handles coarse minutes', () => {
      // 7 rounded down to 5
      testMinutes(_clickData.MINUTE_7, 5);
    });
    test('handles custom coarse minutes', () => {
      testMinutes(_clickData.MINUTE_23, 30, {
        // set diff time from 30 so update goes through
        // since 23 min is rounded to 30 min
        time: '12:35',
        coarseMinutes: 15
      });
    });
    test('handles coarse click on "59"', () => {
      testMinutes(_clickData.MINUTE_59, 0);
    });
  });
  test('it changes from hours -> minutes on minute select', () => {
    const _renderTK4 = (0, _utils.renderTK)({
      switchToMinuteOnHourSelect: true
    }),
          wrapper = _renderTK4.wrapper;

    expect(wrapper.find(_Numbers.HourNumbers)).toExist();
    (0, _utils.triggerMouseClick)(wrapper, {
      clientX: 150,
      clientY: 35
    });
    expect(wrapper.find(_Numbers.MinuteNumbers)).toExist();
  });
  test('handles meridiem clicks correctly', () => {
    const _renderTK5 = (0, _utils.renderTK)({
      time: {
        hour: 2,
        minute: 0
      }
    }),
          onChange = _renderTK5.onChange,
          wrapper = _renderTK5.wrapper;

    wrapper.find(_Meridiems.default).find('button').at(1).simulate('click'); // gotta wait for debounced onChange fn to trigger

    jest.runAllTimers();
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(expect.objectContaining({
      hour: 14
    }));
  });
  describe('time top bar', () => {
    function renderHourDropdown(index, props = {}) {
      const _renderTK6 = (0, _utils.renderTK)(props),
            wrapper = _renderTK6.wrapper,
            onChange = _renderTK6.onChange;

      const topbar = wrapper.find(_TopBar.default);
      const hour = topbar.find('span[data-type="hour"]'); // open dropdown

      hour.simulate('click');
      const dropdown = wrapper.find(_TimeDropdown.default);
      const numbers = dropdown.find('li');
      numbers.at(index).simulate('click');
      (0, _utils.waitForUpdates)(wrapper);
      expect(onChange).toBeCalledTimes(1);
      return onChange;
    }

    test('handles hour updates during 12h mode', () => {
      const onChange = renderHourDropdown(6);
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: 7
      }));
    });
    test('handles click on "6" during 24h mode', () => {
      const onChange = renderHourDropdown(6, {
        hour24Mode: true
      });
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: 7
      }));
    });
    test('handles click on "12" during 24h mode', () => {
      const onChange = renderHourDropdown(11, {
        hour24Mode: true
      });
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: 12
      }));
    });
    test('handles click on "24" during 24h mode', () => {
      const onChange = renderHourDropdown(23, {
        hour24Mode: true
      });
      expect(onChange).toBeCalledWith(expect.objectContaining({
        hour: 0
      }));
    });
    test('handles minute updates correctly', () => {
      const _renderTK7 = (0, _utils.renderTK)(),
            wrapper = _renderTK7.wrapper,
            onChange = _renderTK7.onChange;

      const topbar = wrapper.find(_TopBar.default);
      const minute = topbar.find('span[data-type="minute"]'); // switch to minutes and open minutes

      minute.simulate('click');
      minute.simulate('click');
      const dropdown = wrapper.find(_TimeDropdown.default);
      const numbers = dropdown.find('li');
      numbers.at(32).simulate('click');
      (0, _utils.waitForUpdates)(wrapper);
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(expect.objectContaining({
        minute: 32
      }));
    });
  });
});