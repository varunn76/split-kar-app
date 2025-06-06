import Svg, { Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const Phone = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </Svg>
);
export default Phone;
