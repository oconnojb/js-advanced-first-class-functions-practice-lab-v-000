// Code your solution in this file!
const logDriverNames = function (drivers) { drivers.forEach(function (el, i, ar) {console.log(el.name)})}

const logDriversByHometown = function (drivers, loc) {drivers.forEach(function (el, i, ar){
  if (loc === el.hometown) {
    console.log(el.name)
  }
})}

const driversByRevenue = function (drivers) {
  const d = drivers
  return d.sort(function(a,b){return a.revenue - b.revenue})
}


/*
* `driversByRevenue()` — Receives an array of `driver` objects and
  returns a new array of `driver` objects sorted by their `revenue` attribute from lowest to highest.
* `driversByName()` — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `name` attribute from A to Z. Here, you may have to use the [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method.
* `totalRevenue()` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.
* `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.
*/
