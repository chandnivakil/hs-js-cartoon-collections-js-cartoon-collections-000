function dwarfRollCall(dwarves) {
  var result = ""
  for (var i = 0; i < dwarves.length; i++) {
    result = `${result}${i + 1}. ${dwarves[i]} ` 
  }
  return result
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true 
    } 
  }
  return false 
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return "cheddar"
    } else if (foods[i] === "gouda") {
      return "gouda"
    } else if (foods[i] === "camembert") {
      return "camembert"
    }
  }
  return "no cheese!"
}
      
    
 