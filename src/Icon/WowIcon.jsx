import React from "react";

const WowIcon = ({width=20 ,height=20,className=""}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" fill="url(#pattern0_1_1349)" />
        <defs>
          <pattern
            id="pattern0_1_1349"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_1_1349" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1349"
            width="40"
            height="40"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFEMEI4MkUwNzMyMTFFQTkyQzNBM0EzQkM3NzY5M0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REFEMEI4MkYwNzMyMTFFQTkyQzNBM0EzQkM3NzY5M0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUQwQjgyQzA3MzIxMUVBOTJDM0EzQTNCQzc3NjkzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQUQwQjgyRDA3MzIxMUVBOTJDM0EzQTNCQzc3NjkzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl1GG1QAAASxSURBVHjazJlbbBRVGMe/vbRs6WXJ7kp6WxppsCBCGmklBCPBW4IhNQWkXPoEDxUQY3wQfdF4eeHNBE3QF1+qKNY+aI3RGBuMotJWgoq21mpgt10uu22X3W2Xvcz4PzPTst2ZnZkzlcWT/LKTc873nf9+55w5l7GJqX1kIdlBK9gKWsA9oA6UK+UJMA7+BIOgHwwAQeWp5H3dhpwkijzC6sERsB/4deotAR6wDuxU8gKAqXkbBDkiwQQa4gVwLI6BF4HfpF0ufsV2TPHllfONBAqIuj67wTA4DEpN1DeiVPHFfHYYCbSJs08V7n6iE+Bpur3pJDhKrtMZbYEzu7Tyl4KPwHYqTuoDHVT28YxaYKJdK3KfgDYqbvpUmlBLezMLxyCbxQt5C7Rp5N9u2qS2VZNExMC9RQfoysuT+PGcg3bsq6L2vVXSs1YdPUzad1H8yb0Lu/jG/DDDtKdh4NOK/45OD0Um7XJFj0C93ZNc/cdhzwpWU+Vn1/Mj+AbwFYrAnHOWpGfOCHLYe8Dr+V28AhzUbSQ/cQrktD9A0W0r5BkrZNnvIbYqcvWZbGc96duXKJpeQqwFRqe8juuhaoETbvtOmnrUziLYqmwC6H8UwbmNSSsECg9ba0BYpEBT9luxaggbNIvi6PkreF9lbPKroTJLkZhDevbgmf7CczV+KwwaUvyo7Iedyrol6vlpwW4m2ySFO58QhKXF+Zn1QntYcuyrytIxPEtlrI6WrYYflf3cjNX302QTJzaGlZf0wjSGPWfWph8dh0jR5Rk63eels0MVFAiVStkNtTdpc0ucdj4xSe5rTlN+qPGmVkkEAltYSamqKIHuuFJS2Dmcngm66Ph7NZSYcWhWKS8T6NiBCdpSn9T1Q9VpVNacNCmbGLxfW6BBOvOTm155s8HwxGCDrlefu0RbNkatTKUU21HHeHfF09N2On6y3tRxhtVhdaem7VZ23zFYZUOAeOj90kuJWYfpMLC6PV/4iLcdpo1FcIT3n30/5Obuq7M/u61EcIStJEM5R0NT6dKEi1tgIOSysvoMshd1fzH2805noTVZN/WzLj4Hgjyhb6iZ5RZYe1eSt3uZpgG2kgig23BFyGFzc5hb4Kb1EeJpQ9LUOCo4lbCz64jnzb4P2x8JUs/XdVSSqaTHfauo1e2nlWUecjvlsRnNJOnv2UkaiAboq/AopZ0x2vVYgKeLU4omnEmG53daLOOwWQ9jF1dR3Xevkcuuv89NCmkaf/Blalw7yneYbwockgX+UZt7aBrRXJcLpX82EX37DBb8sgL7YozVh3CSvPsHHnEYC9REq8cjssDfq3ML94BTXIMrWUX0G874lx9A39bhlIN11T1B5B8kWttH5LrBO1z305rQB7eOnReXa92VdNGdSe/SvVe78u4HVQP3WVBzh64+jqrvZn71Fro86gHbiiTuc7Cb7gtrXB79skzv6HeiCN39jhS5dVNp7eu3C4YL/x5FqO8/FhaWhtP66VOLvQL+EKwBmDxiysLVbz4pxRfzafjGsInnK6xcondaOEuzi/Nu1SV6c8xIYPliPkOwM/UG5TMEEzz3b+OKCPYZgm3nvin4GaI5rtvQvwIMALWLHjfh6tJCAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};

export default WowIcon;

