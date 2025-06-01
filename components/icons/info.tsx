import Svg, { G, Path, Circle } from "react-native-svg";
import { iconProp } from ".";
import { RFPercentage } from "react-native-responsive-fontsize";
const Info = ({ size, color }: iconProp) => (
  <Svg
    width={size || RFPercentage(2)}
    height={size || RFPercentage(2)}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    strokeWidth={0}
    viewBox="0 0 24 24"
  >
    <G stroke="none">
      <Path d="M11.5 15a.5.5 0 0 0 1 0v-4.019a.5.5 0 0 0-1 0Z" />
      <Circle cx={12} cy={8.999} r={0.5} />
      <Path d="M12 2.065A9.934 9.934 0 1 1 2.066 12 9.945 9.945 0 0 1 12 2.065Zm0 18.867A8.934 8.934 0 1 0 3.066 12 8.944 8.944 0 0 0 12 20.932Z" />
    </G>
  </Svg>
);
export default Info;
