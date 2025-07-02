import React from "react";

const Funny = ({width=20,height=20,className=""}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="url(#pattern0_1_1489)" />
        <defs>
          <pattern
            id="pattern0_1_1489"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_1_1489" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1489"
            width="40"
            height="40"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDgxRDk1QkUwNzMyMTFFQTk4OTU4NEY2OTVCQjRBQkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDgxRDk1QkYwNzMyMTFFQTk4OTU4NEY2OTVCQjRBQkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEODFEOTVCQzA3MzIxMUVBOTg5NTg0RjY5NUJCNEFCQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEODFEOTVCRDA3MzIxMUVBOTg5NTg0RjY5NUJCNEFCQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsYuzBgAAAYHSURBVHjazFlpbFRl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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Funny;
