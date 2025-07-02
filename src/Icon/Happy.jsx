import React from "react";

const Happy = ({width=20 ,height=20, className=""}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="url(#pattern0_1_1488)" />
        <defs>
          <pattern
            id="pattern0_1_1488"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_1_1488" transform="scale(0.025)" />
          </pattern>
          <image
            id="image0_1_1488"
            width="40"
            height="40"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDUyNTAwREUwNzMyMTFFQUI5QURGRUQ3NTVBQzhBNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDUyNTAwREYwNzMyMTFFQUI5QURGRUQ3NTVBQzhBNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTI1MDBEQzA3MzIxMUVBQjlBREZFRDc1NUFDOEE3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTI1MDBERDA3MzIxMUVBQjlBREZFRDc1NUFDOEE3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiTgVc0AAAQsSURBVHjazJnZTxNxEMenSiuIFaSAoqIxIKCCISoaYmKivniFBA80ovHBRLzw0eNZE/8AMVEfTExQ8ExUUJ8k8UUF1CgqoBiVQ0VAkHKYHrt+p/0VKN22u1uOTvJJN7s785v+jvnNb9Yg2/aSDpkCcsB6sAqkgXkgWjzvB23gE6gFVaAGSD6WjNcDNhRBsqzFsfngGCgEyQHemwbiQBbYIe61APbmImjV0BPsYFAsAIblL+A0SFapN5JkoftF2LK47wdzUEKvB6YANICjwKTi/WCYhC22uTuYgwZ5cJf/4Se6AA7T+MolUEyRtxzKDg7sVLo/HdwE22hipALspqjbA74O9ucr9dxdkEcTKw9cC2r6PYf3HORV7E0JyFO4P97kudr26UGrV0fxpC2nyZW9NON+2bCDvUPTDMueGkD8JDv4B2SQ+WGHCNRDwf1cGDhHIsCf9UQPg9yziX8XgCbeeCg8xA5SKeZxMwK1E8HTeQQYxbUiL6qNtH1/AuUDvg707hjoG10+uXrwz0be+L+LfdavbD8wl7q6p7on6ywn3bv2Q1OX6NDn/XphBDzNCeYci8f40DX/Uw2iQ599yoGD0gZds0SSQptl6vTXY9eQVupsIcR1oEp/FQ9xuj77zhD9U6WfzkOcFMZDnIQhdpr1tRBiD6rTN0eo7QlLrJ26etxxPC7WobkH9epzRm1VkwmfPNQCw3aKj7PTqUPNmjNpnfpWg9ycVQdHMyk85T0PcWMYO9jIYebViKPhsAxg/fyOwlw2KKtORZKZOIjDgSNwE6HZqcU+LFW5g+Yofk8TC83PMZKf8TtKumNnp4qHuFpszN77sScVV5CDl1OpqT1S01ilzP5HV4ualB9yO76rmn2q4XRLAqU+KY+lD2vcobi61qb91TyZclN7lVcqt8Ft+aZcpZTyWTLInxZ6Mgec+MmkprHuXhMVnllD/YMRlGmeQ1sSMijbnETxJndpptPWT2+tP+lRRwPVWX9RdJSDrp9/SbNm2tT+H34xhRZ/azXIDUMjyzWTo2otPHudSNYnxbQ1YUnA9yo76sm8qYTWrWjXdphPbxEJa/3ckYemRvGrTr7mwtPjSNCjlJ8bsTrX4SS56Lmm1JGTBMpo63I7+HHOyId7QJmmyfVvJsIpjq7Nq4n+zsOcwnEiBtlyci3RsgqiyF6t07WQlvy8MXzs/JCoVCspmqTAfIWWtheNqg/6LO8TnOZMUumj2LeyUGfxVzy6AzZPkHOVoIAyOxWKR+9i/SkZRfltvIf7sqvnsrrtyuW3tzHBDOwRjo511aHTNZ2W95SFWgIuBwh2MhaPbNNR+h2NTdhim0EjhkF+M0NrER2Bj/aRu6qvRbjqXwpKvIro2dZgDkbrGR7PZwg+U/OxNU047/m3fcIJ/gzB6dxT8vcZIrsvYEP/BRgAuyfeNFvWgSoAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  );
};

export default Happy;

