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
  >
    <Path fill="none" d="M0 0h24v24H0z" stroke="none" />
    <Path
      d="M7 17V9.93L13.93 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8.93L14.07 17H7z"
      stroke="none"
    />
    <Path
      d="M9 15h4.24l7.2-7.2-4.24-4.24-7.2 7.2zM22.91 2.49L21.5 1.08c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24 1.06-1.06c.79-.78.79-2.05 0-2.83z"
      stroke="none"
    />
  </Svg>
);
export default SvgComponent;
