export function toFahrenheit(celsius){
  if ('number' === typeof celsius) return Math.round(celsius * 9/5 + 32)
  return undefined
}

export function getDay(date=''){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(date)

  return `${days[d.getDay()]} ${d.getDate()}${ordinals(d.getDate())}`;
}

export function ordinals(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}