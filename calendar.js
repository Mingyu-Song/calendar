const weekDay = ["일밤", "월밤", "화밤", "수밤", "목밤", "금밤", "토밤"];

const now = new Date();
const filterdays = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

const THIS_MONTH_MAX = (arr) => {
  return new Date(arr[0], arr[1], 0).getDate();
};

const FILTER = (arr) => {
  let nowDay = now.getDay();
  const obj = {};
  const thisMonth = {};
  const nextMonth = {};
  for (let i = 0; i < 14; i++) {
    // 14일 계산
    if (THIS_MONTH_MAX(arr) >= arr[2] + i) {
      //이번달 일수 계산
      if (nowDay > 6) {
        nowDay = 0;
        thisMonth[arr[2] + i] = weekDay[nowDay++];
      } else {
        thisMonth[arr[2] + i] = weekDay[nowDay++];
      }
    } else {
      if (nowDay > 6) {
        nowDay = 0;
        nextMonth[i - Object.keys(thisMonth).length + 1] = weekDay[nowDay++];
      } else {
        nextMonth[i - Object.keys(thisMonth).length + 1] = weekDay[nowDay++];
      }
    }
  }
  if (arr[1] >= 12) {
    obj[arr[1]] = Object.entries(thisMonth);
    obj["1"] = Object.entries(nextMonth);
  } else {
    obj[arr[1]] = Object.entries(thisMonth);
    obj[arr[1] + 1] = Object.entries(nextMonth);
  }
  console.log(obj);
};

FILTER(filterdays);
