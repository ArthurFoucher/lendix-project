import { helper } from "@ember/component/helper";

export function gradeColor(grade) {
  switch (grade[0][0]) {
    case "A":
      return "grade-green";
    case "B":
      return "grade-orange";
    default:
      return "grade-red";
  }
  return params;
}

export default helper(gradeColor);
