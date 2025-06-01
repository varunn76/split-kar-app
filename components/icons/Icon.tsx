import Icons from ".";
import type { iconNames, iconProp } from ".";
interface props extends iconProp {
  name: iconNames;
}
export default function Icon({ name, color, size }: props) {
  return Icons[name]({ color, size });
}
