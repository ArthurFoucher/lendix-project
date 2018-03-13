import { helper } from '@ember/component/helper';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

export function projectDaysAgo(timestamp) {
  let daysCount = dateDiffInDays(new Date(timestamp), new Date())
  if (daysCount < 2) {
    return `${daysCount} day ago`;
  } else {
    return `${daysCount} days ago`;
  }
}

export default helper(projectDaysAgo);
