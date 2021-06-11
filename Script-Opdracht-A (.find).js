const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// findSpiderMan = superheroes.find(superhero => superhero.name === "Spiderman")

// console.log(findSpiderMan)

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

findSpiderMan = superheroes.find(superhero => superhero.name === "Spiderman")

console.log(findSpiderMan)

console.log(superheroes)

console.log(findSpiderMan(superheroes))

