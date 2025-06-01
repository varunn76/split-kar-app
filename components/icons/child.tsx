import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const SvgComponent = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    // fill={color || "currentColor"}
    stroke={color || "currentColor"}
    aria-hidden={true}
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <Path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0M12 3a2 2 0 000 4" />
  </Svg>
);

export default SvgComponent;
