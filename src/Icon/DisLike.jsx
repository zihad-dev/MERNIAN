import React from "react";

const DisLike = ({width=20 ,height=20,className=""}) => {
  return (
    <div className={className}> 
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="url(#pattern0_1_1487)" />
        <defs>
          <pattern
            id="pattern0_1_1487"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_1_1487" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1487"
            width="40"
            height="40"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0RBREFBRDIwNzMyMTFFQTk3RkJFQ0M3OTRCQkRBRkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0RBREFBRDMwNzMyMTFFQTk3RkJFQ0M3OTRCQkRBRkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDREFEQUFEMDA3MzIxMUVBOTdGQkVDQzc5NEJCREFGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDREFEQUFEMTA3MzIxMUVBOTdGQkVDQzc5NEJCREFGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtlUL6UAAAQbSURBVHjaxJlpSBVRFMfPjKMvzNSWL5baB0FN6kuaFdhiURSERUURCUIF2gpFhLQitoBQBCqYpVBZGgRC0IKQS4tQubRSz+xLJVJmmFbWc5bOed7prc7Mm3nqgR8M97137v+dc++5y3AXSyUwYTwyD8lE0pBEZAYykX3+C+lCOpAWpAF5hsjejnbs4jU7EhQlIGGxyG5kKxKn8T0bMgWZg2xgbZ+Qa0gp8tlwJGT8TwaYipQiH5B8JM7g79yJY7/9wHyRT10TZP0Mb2L/ehoEx8KQXczvHuSG1pe5knPiiOKRYiQPRtfKkL2794eIgaQ4HKlF8kykMlCoj9ris1K4X4ESptgLAalG1vj5bLSgvqrPF0mCTxol3zFYgmTB2FsW6zvPM4IYZjc2I7lebWNJbtEpaYvHJDlT8H9sTkXeBXG2mrXvSHL+8ZAeZ4pFV4pPaonL2c5DXDw3XHE/KnC5wlXE0hdwsGIVDxxnTIHjL8C9OzK8fO53laACX6imWp0k8ch2rYGsiiOjZ7V9SSYPK1cbF+cshLjOpKVzWpNmW8FRKZ4JVLBB2YmEsme/eJvavmgpZyqPlAWN/kjLTjWCRLZeKfAV6L/dqM1fyEPGYl6rz+wjh0ReEEXnriQ20A5E0fpsmD6D0/JDmuZRHVxmxrmV6JHRLupBo6znJ5NmcaqZDkSLAmlSpWOaOzo0HaUJkghJpiIYhBQP9Ct6fpIogjHjEUEae/Z3ip6fGF4SlUkI6NH53lVq6FltN2sCbguyc0L0+p0kGI3E6UL/uagol2D9Rh4mTwmsHjocAO1tsm4mSOAAW4dNWVOTDF97FMg/LPisJgcPiPD1i2JpmOIkUbqtCCR7/VKBxnoZMpd7ntBSUgC6uywJ7KYI2vFhttUZefWKCHNTQyEq2hXG+Jk8plC24taOkwRaaapbpf8HQGWF54CKjLTst4Ui2BCsjVwTrgxZ6xRISBiOYkQEZ7UcNdBS95QdpGODIdL9GCtSqTAvkDQ9o80CDZIqJD8YAiOjXM99fZY2FVV368Jk9dBEB/MD7FBtyaLdJklnp+kIOpim/xvWz8glrQ2rUU4cG4Ln7bIzcs2PJbN+Kuvuhznvb7glGX/cD012qzUxCNZLm4TGh7Ze70NTL7srqR5ngfseNQ+L83d5VIMsRXLHSVx58xPbdc+bBd9Cv4+2OeNwu3CLLpGMXH3QDKLT/U1k9RiJu019trTZHEYEkv1G1rLrt9FO9wWKXPsL25D/C8yR1/IhdrpvZEKDfSXyjYbTi1e2au0rYDxe6VCDzELKEIeB7+vhYL7Ip27F4FKSBwO9RKdSlM1u9QOxLraklrhfor95O0FbYHLioJn0qK8h6Eydyl5DkPgI9vlPJoJeQ7Qi9SO9hnhr1xb4T4ABAE9gGBagds44AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};

export default DisLike;
