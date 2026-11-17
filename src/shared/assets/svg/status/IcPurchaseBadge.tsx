import type { SVGProps } from 'react';
const SvgIcPurchaseBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={38}
    fill="none"
    viewBox="0 0 80 38"
    {...props}
  >
    <path fill="url(#ic-purchase-badge_svg__a)" d="M0 0h80v38H0z" />
    <defs>
      <pattern
        id="ic-purchase-badge_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#ic-purchase-badge_svg__b"
          transform="scale(.0125 .02632)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAmCAIAAADcCIsmAAACG0lEQVR4AeyYv0vDQBTH27T0B1SnonUSFMTFQUQ6+AMXByc3wV1H/wAXBxf/AAcFBXc3JwcXERSKiOBUBBWnqgQsGmgNaeurD8PZpjW5d8lFk/Llcb28u3uf947kEuV1eidQUiIB+4XA/73gYYXDCvsqA/H5QRAlJL9v6dTaJMgkzGwsgMy/HA0qcCyfy+wt2lR6fcppiKmlCZDTUV38qcDR3mR8dMCmYkNZNhTg75QpyCPrKbBNBTZOHsszu7+qenjVHjTwd8oU5LHdX0gPFZgehLZ5zObLKJboc3aZQT5wl+DcuOQRsJLrgehr9ypYufIKuK8J3NB0ubSwukfAsBJFcNhAUSbBsR4Bw90Y1jOKL2A5BIcNFMfYn0MiXgBHsylctXb9jA2nFp5qKKcD2/35gXGP2bHJ5TFcODbej/5OzxXV7UsUzkOx/MC4x+xY82xoOqdX8pSgKWP5gXGPWdq6qkFM+tmt5VXo1C8ewEGKCMDf2ww3G2vr6jvA6Kd3bCfb1g9uwAGVmBuG9yFTSrb5AMNLblh+YFHRJGZHYM+bUrIZUTNbziMTuLJfgIO0pbjv55aQbKdM4FrhCV62LNVQq2yUAtsygQVi2J8qBLafq7/pGVbYZ3Urf30/EhiUKxWGF32jWGq8fQgMFKei87sCXNk611aP4KmDUfrKugLsK8KWYAIGHPHkA0BLjuX+DSssN//urx64Cn8CAAD//1wvZbMAAAAGSURBVAMAtQC4/ATZT0EAAAAASUVORK5CYII="
        id="ic-purchase-badge_svg__b"
        width={80}
        height={38}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgIcPurchaseBadge;
