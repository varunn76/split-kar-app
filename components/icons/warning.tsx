import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const Warning = ({ color, size }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    strokeWidth={0}
    viewBox="0 0 24 24"
  >
    <G stroke="none">
      <Path d="M12.5 8.752a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0Z" />
      <Circle cx={11.999} cy={16.736} r={0.5} />
      <Path d="M18.642 20.934H5.385a2.5 2.5 0 0 1-2.222-3.644L9.792 4.421a2.5 2.5 0 0 1 4.444 0l6.629 12.869a2.5 2.5 0 0 1-2.223 3.644ZM12.014 4.065a1.478 1.478 0 0 0-1.334.814L4.052 17.748a1.5 1.5 0 0 0 1.333 2.186h13.257a1.5 1.5 0 0 0 1.334-2.186L13.348 4.879a1.478 1.478 0 0 0-1.334-.814Z" />
    </G>
  </Svg>
);
export default Warning;
