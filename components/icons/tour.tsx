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
    strokeWidth={0}
    aria-hidden={true}
    viewBox="0 0 24 24"
  >
    <Path fill="none" d="M0 0h24v24H0z" stroke="none" />
    <Path
      d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-3.86 5.74l.9 2.26H7V6h11.05l-.9 2.26-.3.74.29.74zM14 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
      stroke="none"
    />
  </Svg>
);
export default SvgComponent;
