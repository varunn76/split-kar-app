import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const Arrow = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    strokeWidth={0}
    viewBox="0 0 512 512"
  >
    <Path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);
export default Arrow;
