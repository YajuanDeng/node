// new Date()
// console.log("date", new Date());

// 定义格式化时间的方法
function dateFormat(dtStr) {
  const dt = new Date(dtStr);
  const y = dt.getFullYear();
  const m = dt.getMonth();
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
//检查是否需要补零
function padZero(n) {
  // 三元运算符一般是用作两种情况
  return n < 10 ? `0${n}` : n ;
  }

  // 也可以用如下if语句实现
  // if (n<10) {
  //   return `0${n}`;
  // } else {
  //   return n;

module.exports = {
  dateFormat,
};