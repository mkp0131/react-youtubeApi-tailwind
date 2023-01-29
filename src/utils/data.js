import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
// 한국어 설정
register("ko", koLocale);

export const dateFormat = (date) => {
  return format(date, "ko");
};
