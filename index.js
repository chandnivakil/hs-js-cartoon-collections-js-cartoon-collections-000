function dwarfRollCall(dwarves) {
  var result = ""
  for(var i = 0; i < array.length; i++) {
    result = result + `${i+1}` + "." + `${dwarves[i]}` + ","
  }
  return result
}