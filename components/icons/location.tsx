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
    <Path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="none" />
    <Path
      d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 01-3.336 0l-5.375-5.375-.028-.028c-3.905-3.905-3.905-10.237 0-14.142 3.904-3.905 10.236-3.905 14.141 0zM5.99 4.489v.001a8.5 8.5 0 000 12.02l.023.024.002.002 5.378 5.378a.859.859 0 001.214 0l5.403-5.404a8.5 8.5 0 00-.043-11.977A8.5 8.5 0 005.99 4.489z"
      stroke="none"
    />
  </Svg>
);
export default SvgComponent;
