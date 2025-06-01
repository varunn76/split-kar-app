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
    strokeWidth={2}
    aria-hidden={true}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </Svg>
);
export default SvgComponent;
