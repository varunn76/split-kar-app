import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const SvgComponent = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    aria-hidden={true}
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <Path
      d="M11.005 21a1.5 1.5 0 10-3 0h-5a1 1 0 01-1-1V4a1 1 0 011-1h5a1.5 1.5 0 003 0h10a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-10zm-1.5-10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      stroke="none"
    />
  </Svg>
);
export default SvgComponent;
