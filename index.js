
// va de 2 en 2
// tengo que capturar la lateral centro que va de 2 -> 3  dirección abajo  
// tengo que capturar la la lateral inferior que va de 4 -> 5  horizontal izquierda
// parado en 5 tengo que capturar la lateral derecha  6 -> 7


// va de a 3
// desde 7 va 3 pasos  terminando en 10 sentido hacia la derecha 
// de 10 tres pasos  13 direción abajo 

// va de a 4
//parado en 13 son 4 a la izquierda 
//desde 17  son 4 hacia arriba  21 
// desde 21 son cuatro hacía la derecha 


// es decir  
// centro[lado/2][lado/2]
//  1° 2 abajo      -2- posicion  matriz[x][2->3] = paso ++  
//  2° 2 izquierda  -2- posicion  matriz[4->5][y] = paso ++
//  3° 2 arriba     -2- posicion  matriz[x][6->7] = paso ++

//  4° 3 derecha    -3- posicion  matriz[8->10][x] = paso ++  
//  5° 3 abajo      -3- posicion  matriz[x][11->13] = paso ++

//  6° 4 izquierda  -4- posicion  matriz[14->17][y] = paso ++
//  7° 4 arriba     -4- posicion  matriz[x][18->21] = paso ++
//  8° 4 derecha    -4- posicion  matriz[x][22->25] = paso ++






//matriz de  4

let ladoA = 5;
let ladoB = 5;
let steeps = ladoA * ladoB;
let point = []

const parA = ladoA % 2 == 0 ? true : false
const parB = ladoB % 2 == 0 ? true : false

let position0 = {
  x: (parA) ? (ladoA / 2) : (Math.floor(ladoA / 2) + 1),
  y: (parB) ? (ladoB / 2) : (Math.floor(ladoB / 2) + 1)
}

for (let index = 0; index < steeps; index++) {
  if (index == 0) point.push(position0)

}


