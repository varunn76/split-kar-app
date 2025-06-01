import mail from "./mail";
import user from "./user";
import lock from "./lock";
import hide from "./hide";
import show from "./show";
import phone from "./phone";
import error from "./error";
import warning from "./warning";
import info from "./info";
import success from "./success";
import addDoc from "./addDoc";
import image from "./image";
import company from "./company";
import trash from "./trash";

import arrow from "./arrow";
import unverified from "./unverified";
import verified from "./verified";
import sync from "./sync";
import location from "./location";
import calendar from "./calendar";
import tour from "./tour";
import time from "./time";
import bed from "./bed";
import child from "./child";
import money from "./money";
import payment from "./payment";
import voucher from "./voucher";
import flag from "./flag";
import edit from "./edit";
import cancel from "./cancel";
import save from "./save";
import history from "./history";
import logout from "./logout";
import menu from "./menu";
import cross from "./cross";
import sun from "./sun";
import moon from "./moon";
import infant from "./infant";
import share from "./share";
export default {
  mail,
  user,
  lock,
  hide,
  show,
  phone,
  error,
  warning,
  info,
  image,
  company,
  trash,
  success,
  arrow,
  unverified,
  verified,
  sync,
  location,
  calendar,
  tour,
  time,
  bed,
  child,
  money,
  payment,
  voucher,
  flag,
  edit,
  cancel,
  save,
  logout,
  menu,
  history,
  cross,
  sun,
  moon,
  share,
  infant,
  "add-doc": addDoc,
} as icons;

// all type declarations
type icons = {
  [key in iconNames]: ({ size, color }: iconProp) => React.JSX.Element;
};
export interface iconProp {
  size?: number;
  color?: string;
}
export type iconNames =
  | "mail"
  | "user"
  | "lock"
  | "hide"
  | "show"
  | "phone"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "image"
  | "company"
  | "trash"
  | "arrow"
  | "add-doc"
  | "unverified"
  | "verified"
  | "sync"
  | "location"
  | "calendar"
  | "tour"
  | "time"
  | "bed"
  | "child"
  | "money"
  | "payment"
  | "voucher"
  | "flag"
  | "edit"
  | "cancel"
  | "save"
  | "history"
  | "logout"
  | "menu"
  | "cross"
  | "sun"
  | "moon"
  | "infant"
  | "share"
  | "add-doc";
