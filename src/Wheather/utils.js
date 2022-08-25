export function toFahrenheit(celsius){
  if ('number' === typeof celsius) return Math.round(celsius * 9/5 + 32)
  return undefined
}

export function getDay(date=''){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(date)

  if (isNaN(d.getDay())) {
    throw new Error('Incorrect Date Format: ' + toString(date))
  }

  return `${days[d.getDay()]} ${ordinals(d.getDate())}`;
}

export function ordinals(d) {
  if ('number' !== typeof d ) return undefined
  if (d > 3 && d < 21) return d+'th';
  switch (d % 10) {
    case 1:  return d+"st";
    case 2:  return d+"nd";
    case 3:  return d+"rd";
    default: return d+"th";
  }
}

export function getCityFromParams(){
  const params = new URL(window.location)
  return params.searchParams.get('cityName')
}