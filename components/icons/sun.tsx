import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const SvgComponent = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={true}
  >
    <Circle cx={12} cy={12} r={5} />
    <Path d="M12 1L12 3" />
    <Path d="M12 21L12 23" />
    <Path d="M4.22 4.22L5.64 5.64" />
    <Path d="M18.36 18.36L19.78 19.78" />
    <Path d="M1 12L3 12" />
    <Path d="M21 12L23 12" />
    <Path d="M4.22 19.78L5.64 18.36" />
    <Path d="M18.36 5.64L19.78 4.22" />
  </Svg>
);
export default SvgComponent;
