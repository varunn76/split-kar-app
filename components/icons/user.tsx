import Svg, { Path } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const User = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={2}
    aria-hidden={true}
    viewBox="0 0 24 24"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
    />
  </Svg>
);
export default User;
