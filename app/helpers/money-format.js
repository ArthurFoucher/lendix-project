import { helper } from "@ember/component/helper";

export function moneyFormat(value) {
  return String(value)
    .split("")
    .reduce((res, letter, index) => {
      if (index > 0 && index % 3 === 0) {
        res += ",";
      }
      return (res += letter);
    }, "€");
}

export default helper(moneyFormat);
