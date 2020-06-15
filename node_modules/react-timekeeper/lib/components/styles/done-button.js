"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DONE_BUTTON_BORDER_COLOR = exports.DONE_BUTTON_COLOR = void 0;

var _core = require("@emotion/core");

var _constants = require("./constants");

const DONE_BUTTON_COLOR = '#686868';
exports.DONE_BUTTON_COLOR = DONE_BUTTON_COLOR;
const DONE_BUTTON_BORDER_COLOR = '#CCC';
exports.DONE_BUTTON_BORDER_COLOR = DONE_BUTTON_BORDER_COLOR;
const doneButton =
/*#__PURE__*/
(0, _core.css)("background:var(--done-bg-color,", _constants.CLOCK_WRAPPER_BACKGROUND, ");display:block;color:var(--done-text-color,", DONE_BUTTON_COLOR, ");text-transform:uppercase;border-top:var(--done-border-top,1px solid ", DONE_BUTTON_BORDER_COLOR, ");text-align:center;cursor:pointer;padding:16px 0;font-size:var(--done-font-size,13px);letter-spacing:0.5px;line-height:normal;font-weight:var(--done-font-weight,500);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9kb25lLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL2RvbmUtYnV0dG9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQ0xPQ0tfV1JBUFBFUl9CQUNLR1JPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBET05FX0JVVFRPTl9DT0xPUiA9ICcjNjg2ODY4J1xuZXhwb3J0IGNvbnN0IERPTkVfQlVUVE9OX0JPUkRFUl9DT0xPUiA9ICcjQ0NDJ1xuXG5jb25zdCBkb25lQnV0dG9uID0gY3NzYFxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kb25lLWJnLWNvbG9yLCAke0NMT0NLX1dSQVBQRVJfQkFDS0dST1VORH0pO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y29sb3I6IHZhcigtLWRvbmUtdGV4dC1jb2xvciwgJHtET05FX0JVVFRPTl9DT0xPUn0pO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItdG9wOiB2YXIoLS1kb25lLWJvcmRlci10b3AsIDFweCBzb2xpZCAke0RPTkVfQlVUVE9OX0JPUkRFUl9DT0xPUn0pO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0cGFkZGluZzogMTZweCAwO1xuXHRmb250LXNpemU6IHZhcigtLWRvbmUtZm9udC1zaXplLCAxM3B4KTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRmb250LXdlaWdodDogdmFyKC0tZG9uZS1mb250LXdlaWdodCwgNTAwKTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZG9uZUJ1dHRvblxuIl19 */"));
var _default = doneButton;
exports.default = _default;