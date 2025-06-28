import React from "react";

const Like = () => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="20" height="20" fill="url(#pattern0_1_1351)" />
        <defs>
          <pattern
            id="pattern0_1_1351"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_1_1351" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1351"
            width="40"
            height="40"
            preserveAspectRatio="none"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzcxODE0REIwNzMyMTFFQUE3NUNBMDk1RkEyREQ1MEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzcxODE0REMwNzMyMTFFQUE3NUNBMDk1RkEyREQ1MEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE4MTREOTA3MzIxMUVBQTc1Q0EwOTVGQTJERDUwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE4MTREQTA3MzIxMUVBQTc1Q0EwOTVGQTJERDUwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgr+2sgAAAQtSURBVHjaxJldbAxRFMfvjKmltS3bWkFLQlnfIVpfCfGVCGmIiG8vnqiPPonUixdePBFUEMQDthJPQuJBVEQi2pLwIK341lXddtuu1pYtM/5n3drd7s7M3Zm1e5Jfevfu3nNP79x7zrlnpEWBHmZBZFAOVoAyMBWMB3n8++/AB16DRlAHGoA6WNET1wjDiRRNS8mwYrAf7AQlBr9zABeYDTbxvs/gOqgBLSmsBFloSiGAYu0tqAYlguNiKeFj33JdhX/7TQykFTRhC2gC+8BQgd+bMZTrIp1bzQyUFrQFdR8/OAP2sv8r58HBp+78X0kNLGvrTtafC26CCpYZuQO2NrgLQol7UOVnK4oCvKAiyXf/C5rLW/41qCQ5xQkb9SxYzzIv6/nccVtKmufrjP1Mm7aWZVd2PB83yhs18HNgoI1jz5pAUZYNpBWb9rzY1c7djMY4x0FRzOeUWOxQ2LkiJ3s63sVKFZlZ1QNc4Ni/FZzzoYP+TgBvQI7Vf7t+gos5JCnSPt0dYpeDfXZWsR+UvphY+AkrqMJqtRLk8LYlAr+jYdaTM4TZ0cVtqfz7iFWN2AWYHTpjDBwpS8yuPrJp9ju/TMlCOU8CbInMpKjvwqNOMQnRS0zKFU1VV9rVtM45jM1wRH1sEKsJvek40SsUVdPm29HglGVWPTo/rq/j12+mpmEJKdfECmoeOxoOuZ2scIgc1/eqrz+yj9IgHkVVtbFWRy/Kc7DNI3MT+h/3/mBqegwcS7HYaWVkRUEuOzymIOZoROV+6RjdcX0w/G4wxI586RLaQYrZo6id5GZleY5Iu/H7T7btnT/SPlnssrQkw+GCVjmHYwt0Cv2eDOzhcTj5LuXGDbTt7q1+HJ5qxH9BPT0Ui1uNYuNg0esXlRz4yIUjHKJxuZUOSTPGzRKdIB2bfxROvaCeZgpzz4xCTsIK6vSLCo30tveIhrtGGQ61jpyqHgkrqNMvKnTqd7vzmdGcMdRRqKvnF2mheJyOEPYSflJAD9nUIHNjr+ndYxMPCbOVCFzFNfe0r0vk/nytZWGpKvNnXQPCqezBUy2dlgycy12VCWRLDU/5IwliC7iULHms/xbNjBvQHug/8bGdHX3vZ6k88F5kOVdau0QS1itflkyJ1G8k96Om2EtTs5HTzpDQLc7TttQTGHwvpo4D5AWybGCVf9m0QLT+Er/P6E68HOzJknEX/cun34iLxUl8WhWlOVmoLtymIpJI6SMMtoNbYG2GjLtLcwZWzgyLFI+IENgALmSgcERzbIRxoaTplqpf5eznhZyHvE6Y7pIIVQyqulbP8hrfFumQGFMLpoPzICzwezPCXBfpNPUYsmDZtgNUgsngBPBZKP36+NjJXFeHSMiUCu69sPMagu7U8/lrCEo2Bt4p9PJgT68hnoEHeq8hutfMMZzojwADAGMl2ZjE2AosAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Like;
