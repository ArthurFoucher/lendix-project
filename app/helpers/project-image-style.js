import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function projectImageStyle(url) {
  return htmlSafe(`background-image: url('https://cdn.lendix.com/${url}');`);
}

export default helper(projectImageStyle);
