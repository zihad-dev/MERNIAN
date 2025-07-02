import React from "react";

const Angry = ({width=20 ,height=20, className=""}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="url(#pattern0_1_1491)" />
        <defs>
          <pattern
            id="pattern0_1_1491"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_1_1491" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1491"
            width="40"
            height="40"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REUzNkYyOEUwNzMyMTFFQUJBMzlCMkJCRjdGMEUxOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REUzNkYyOEYwNzMyMTFFQUJBMzlCMkJCRjdGMEUxOTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERTM2RjI4QzA3MzIxMUVBQkEzOUIyQkJGN0YwRTE5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERTM2RjI4RDA3MzIxMUVBQkEzOUIyQkJGN0YwRTE5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgx7OAUAAAUcSURBVHjazJl/SF11FMDPvd6rPlOw956SpWaz5tYPWFOXRTRsQYxGQaNJ02JUMFdTogXhCIUV689NtsUaEiKG6/eI1hi0uRgxmK2fODRKdHvDhb6nm7+e9913X+d8/ep79757373P53QHPvD0nnO+536/5/vrXEHzb4JFiIhUItVIBbIauQe5gz+fQq4hfyO/IN1ID6IZHQnuHxM2JIEWSSawQuQtpBYpSqCXgbiRR5Ct/H9Xkc+QI4jPaYOC9l+1Ez0Psg95A0mH1ERB2pBmxC/kn7XpQdW2B7fxt/bC0gi94Jvc727k88Q9eHWjdfAAh5B6uLVyFGkQCs+p5gEOPWX2/yz+ZltgeeR7pEYo/mk6PsB/nzTrua+R52F55TuaUMKq86pdDh5egeCAt3nYmFKCdvmJ2L9rkOOwsrJdWPtzVzTAv6pil5K+JZyti5UAskZ4+MLI3BCHFob4Q7Pg2k95IS9XheceH1/SKE5eyIWRcQl2bB41PqIF/oP5ocYcZLtPMfJ6XHCn8xhyWgRK8oLwUMn0kgTXO5gFB7+4C0JhAWgn2/HsiFHltUjPhv1C5cUrYgQDRHYhMv/NoJ5rP53PtMlRc3shjAbSIFZnMYwGROaLBcc6IZ+1ZdCjWHbNbfpqhKhjszkGl6yBIERfyX9ThpaOYlBnAYy6TiHblo57ma+FSYBtUFsm+nXa+XIRgwtXIoUIxLKt6jrs3ToIUlp0Geq9kgWtJ+4Go65TyJZ8LKxx6LvpxSHWlok+xVRJ6+DTVrnyzIMByM1QofnLVTCjiHNL/iUPlBVMwZb1o8lNit+8zHZeXOka7HtpACpKb2IwlmbVIoS0cgSsqCgeh4O1fTqr1lNFLNET2cXCJsUP+tPZge39zLeNbQXlX5ld7qz2Tumcq5jgLd+Ugh+XCTtb/w2J6aphQeejLG/SSd6WiZFQuAABO4zin5Sh+UQphIKapQ09a/m2lOkaxUmbFBsOcSSHLdZ2mMjl4RxoPVNiaUPPelHHVJy0ibGJbKF2gkE23T+3uPrGMi1tro1n6nT1eeKsXdpJJvg+nJTs3dgHHtcsVBUFTF+A5NV1Q/CA2wP1jw3AmX/y4gO0lwnai4edBOhxKeCfmbuOuPG3gENQ/+gAHy5zm3XecQY9N9pbpY1BhmmS9DtJ2D0b+sCdqYAXe+1d/O0wyVO17xdCrcVNGOl+uD2lCYdY64bbV7ppq7vIL9KFuhyeESEYkCAStrgOpgFkulWQXImTPQU/FFMPHRY0pNO4WQdHRIgomMhhc+gZ6dgdEFLw0ym959PmL010MX9HVzUgByad8+ukBw4Nr4Exlav+6Wys7pQUaCjog/XZfpOnfGvTVx+OsPMgPyD6kLbYQ2NGDi4lFKHhjXXBJSFkQ7ZGf9QGtWU4sH4qtVz3xR75gddKaubXREnCVdwTv8AJg9qiM14QI5CdP2WRrNFtHnk/WkaL7nt+ZLfd/rjnvj/ALc8mHZw3PYi2vzvZfxvlj0YX8kBQ3s41q5XsXKFl5Zh8YGynvrIQjttyGpGCFSp9NDgpv9EMehn5Ctm8TMGdpDblj28oJgGaJj1dgF/g5bdbPdyfUM/JxyZCyZaAQ/x2f44HutQlEbp1Ncptk12Ji+EUYGKOI2uRo4jiQN8Ohfsin122S5PyiivZIjqVbet4VT8Zoap/Jy+xLRTR5Y5pmwBrM1P5DEF36nL+GYKCz+bPJ3kQ9BniEnLW6jOE3DmTsKH/BRgAukCv2jtqa/cAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  );
};

export default Angry;

