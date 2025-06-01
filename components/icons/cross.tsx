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
    // strokeWidth={2}
    viewBox="0 0 16 16"
  >
    <Path
      d="M15.854 12.854s0 0 0 0L11 8l4.854-4.854s0 0 0 0a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0s0 0 0 0L8 5 3.146.146s0 0 0 0a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707s0 0 0 0L5 8 .146 12.854s0 0 0 0a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0s0 0 0 0L8 11l4.854 4.854s0 0 0 0a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"
      stroke="none"
    />
  </Svg>
);

export default SvgComponent;
