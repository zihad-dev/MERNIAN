import React from "react";

const LoveIcon = () => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="20" height="20" fill="url(#pattern0_1_1350)" />
        <defs>
          <pattern
            id="pattern0_1_1350"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_1350" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1350"
            width="40"
            height="40"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0EwODFDM0MwNzMyMTFFQUI0RTVENjlBNEY4OEI2MzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0EwODFDM0QwNzMyMTFFQUI0RTVENjlBNEY4OEI2MzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTA4MUMzQTA3MzIxMUVBQjRFNUQ2OUE0Rjg4QjYzMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTA4MUMzQjA3MzIxMUVBQjRFNUQ2OUE0Rjg4QjYzMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj+DKfcAAASKSURBVHjaxJlrbBRVFMfP3WlLRAmGVkuxpT6pL6gGqkajoahIEy0JJiChIcGgrQ/4IASpGhMfgQSNRJAEDWpCgPYDj0jkEQOtJkQFC4SGaLuxSUtbC9JWSkFlmZ3r/8zeLe12Z+7sdOze5JedzN57zn/OmXtnzh1hPbeBfLQQKAGlYAaYAm4B16v/L4NOEAYNoB78AqxEQ2LvMldHGSStVITlg9fAIlDg0m8MmACmgufVuXawHWwCHd4jISV5IBtsAi1gNSjwOG4wBWpsi7KVbZ/XC4yShvmgCbwKsjz015GlbLHNBTqBwir7yDn9RBtBFf2/bTNYJvavNB0iiHtwOGPBHlDl8H+QsI89smzdWK8pxsSJ1oBnA0inV9hXjZyzNiPJLI4mnvsMlNPot3Llu2poBC2E+RoLQGXCudGkUj79/sKhk+TJd+PH2aAJ5FB6Wy+4Wxx673wsxdZAij/UirsuC8vuoyRmTcOSjeuJYOL91kHym6NER34d2vfxe0nMfRiusLZn4dbq7CF5uJFo149E/0TcvPAC/0E81cKauZp/J4PfQabjsLwJJNYtgTCHa/juJMmPd8fSsgoPj6ceSN6vo5vkqq+JunrdRF4Fd4r6tWfiEXzFVdyYTBJrFjuL4zb7QRK546FOEE27zeVhmWPbki/jHeDKVademUpTNS8zTIXrMsCpujVXf/cU3+4uLt7YVvlDuqWnQj6xIoRZHC0B+XYkHRCzpwc+E0RpMbn5VJpKOMWztNYm3xz8XL1jEg2aoE6tNENapjY8IiSCFwib8K3rNYMjWKQ11nYWcyo/WIFt57xEsIgnSJ7uWSkPNwQeQPn9CS/P6DxMEnMccahdkDsOEp3rDU5d9wWS2w+Qzi9rC2lmUoyLl8ha+SnRv5GRi4MN6431RH395MU3C+z3JLIxTPLNDbGHut+GsbaNU2FP4lgbp7jLQ6hjqa47SnLNl/7vO4xlG179sTZ+H2zG2Ps9O6nFvTMxm8TSeamJ27I7Nja11swpPu4x3API9VtJfvuDd3Hoy2NS9QMaeKGu95Wu6k8olHMjiUeK3fv9fIos9KWo6cdNvTDveoZ3CdpUUZ5aGz+OjJ2Y3YWTkosLt5K1cAVR/2U/4ri4L+QUW2Cbj/AT/XWBoi9W4x24L8l7cR9ZS9/GcnKRfNmGJiN80IpXdaj0oxFfFVlrO1kvvYW35CvXxOHYPtfZ5bfKi9iaYkWTrbYDbPF5pSRPnCar6h08bbpt+JjP+bUHvjJa6uz9G2EWPja4aGpWv+lsPfySYLQe6UksmvjE66AmzQKXG2d+6nEq3GvBTFCZJnFfGO3HdgzdWRj+bF3ONVwadhf28ibSsJdlMy9pecgbOTtB2SiJ2wfmG3+c/Hu4wIlT3Uq/jaOQ7s85ckZXY9IaVJi59+kMvKCEBr0l0m1PiLOna0a6BVwL7gGbQcTH1m8iEWWLbWpXDGHeVJTKVeerpahC7eqn0njXf5vaYhvYRDf+bNIIzJkyks8QXFNPV58hWPwN6v9LSgR/hjgO6pw+Qxjnm10d/SfAAG6by/9kESzJAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};

export default LoveIcon;



