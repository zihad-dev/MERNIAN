import React from "react";

const Sad = () => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="40" height="40" fill="url(#pattern0_1_1492)" />
        <defs>
          <pattern
            id="pattern0_1_1492"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_1_1492" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1492"
            width="40"
            height="40"
            preserveAspectRatio="none"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTBFRjJGNkQwNzMyMTFFQTkyQzU5NkNCNTNERTQ1NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTBFRjJGNkUwNzMyMTFFQTkyQzU5NkNCNTNERTQ1NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMEVGMkY2QjA3MzIxMUVBOTJDNTk2Q0I1M0RFNDU2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMEVGMkY2QzA3MzIxMUVBOTJDNTk2Q0I1M0RFNDU2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmtj1KIAAAS/SURBVHjazFldbFNlGH5O165lZXZbJxvgUQNbp0Q06haDeiFyI8mcMSIkQHZhUFSEC2/UxHij3nnHSNCIiQoM/6MiJhidF4RkFCXhL9ugETeGK2NssLVrT3+O79vztfTn9HB66Ebf5MmWnu/93ue838/7c6SN0yosiI3QQVhNaCf4CEsJbvE8RBglDBGOE/oIfkIyf6J9C40N2dXS+N1F2EbYRJANxjkJDYSVhBfEbyPMh7CLcNG0J5igCXgJuwgBwtsE2aReNmShGxBzec04x55M3HTMevHWjSiPVBNeF/O+QfjKaLD04kTR17ATdhJexdzKbsL2rxsQ1yW4blyXYI14s07MjxwkbPimEeECgs8HVT3PfUfowvzKT3ygvl+U60m7WrgHe24DOQibPflbSuoazfHgBsIB3F7Z+OMS9GYIdg5nCHoJA2U8rVblKuG+n2WMa9fMjbv9gwogB3HBv59eaumZQMqDdxPOExyoDIkRWn5dhmF7Qjskr1UQOQguzOkdac2AyoH/XxFnK0k4Xt/DHuwwQ049egTqD9+Ky3MdpMefLMmaBX3m1MGx+GlTFvZ/QTsjphnb9znUx0ojaFF/NRN81FTaIyZPSTwOE0lGOfTbeYnbzGao2ZIolaA1/Tb24GIrO7hUD1rUX8werLViIHGLBE3q19pNe8JOV1NcbPJqZ+ketKhvo4HTPPhmmO3qhuquTSHSuRlmdMqgPy2t/F09RUQfQGXKaV7iwQomOMiH5K+s0jAj9S6gtZ4qHJu+pkJZ0LlJYDJibCF/Hjv97RQF60EqRMNxw3mOswf79J60eLSIrSaLR3P56nkoR/yoHhlC1fUJSNFZ7RA4FyBxhxeK7IP8RDsc9a2ZeR6+E2gW5f0jlIH2BzVb/SFdM31M8JgIzDnxmCdUJX1y8etTuPzlHoQHTmdaCTlpengaNoJj7ALG/IdxrW0FmrpfhtNTBx95UxE5MnvWH9Rs6Zxq5uS30RInCXv5XsrGAOWzEboVOKHNRiKq4NLOj1LkzMrs4NmUziInrWcVEIUG/r/BpdnKt8+cznUhmc6ouTB/UxTVKRkPacgXj/831I2NlrzbFdKRLl9EdPm9uVkOdO0oghPSCSu781NR8RtKzWC/NnGVA5ElrZiVVyDavBxKXTOSLl5wCbZoCI6pIFxjASwYPgPXpSFIiRjkZifyz4LcoBtVPhtZr/VvsiPJe6Kq8xqGKKcbwTVbEFrWjqTDWWSMB7EmD8JNPuChtZTJROH+52/ULG0sILjQXbD/Jgjv3ujNJHMecK+k14jgyLNvZUV8k4lBlRPXWlZhhtazJq9PEBF7O0t2/LcpxUW3ecQ18VOErXNx6x67AKzy5f52NJDjwU+C3dif290qbM3s4DRnLroLh07QFUX2HhTn5CQRPnySCKqZ1sf2givLu6do84gLiLXzFNJ+4XbclZcKm0f2hP4+4oHPifbb1jkm9zF7bnILYvot4KRh8czV/Z+CaLm7Dld4O029YnwozbSADxDuJ+wmKBZav/lQxFw8Z285WsDpt+VK/0NxFW2G1tUvRTj87BUtNtNNdMndc0ufIbim5rLVJ5KN9EeFGUGCP0NwOvcHinyGmNlmbOh/AQYAmvCOJS770SwAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  );
};

export default Sad;
