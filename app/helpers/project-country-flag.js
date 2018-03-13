import { helper } from "@ember/component/helper";
import { htmlSafe } from "@ember/string";

export function projectCountryFlag(country) {
  if (!country || country === "") {
    return "";
  }
  return htmlSafe(`/assets/images/flags/icon-flag-${country}.svg`);
}

export default helper(projectCountryFlag);
