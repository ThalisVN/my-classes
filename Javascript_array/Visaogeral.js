console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)
 aprovados= ["Bia", "Carlos", "Ana"]
 console.log(aprovados[0])
 console.log(aprovados[1])
 console.log(aprovados[2])
 console.log(aprovados[3])

 aprovados[3] = 'paulo'// <- mais indicado para alterar elementos
 aprovados.push('Albia')// <- mais indicados para adicionar no array
 console.log(aprovados.length)

 aprovados[9] = 'rafael'
 console.log(aprovados.length)
 console.log(aprovados[8] === null)
 console.log(aprovados[8] === undefined)
 console.log(aprovados)
 aprovados.sort()
 console.log(aprovados.sort())

 delete aprovados[1]
 console.log(aprovados[1])
 console.log(aprovados[2])

 aprovados= ["Bia", "Carlos", "Ana"]
aprovados.splice(1,2)
console.log(aprovados)