const shapes = ["circle", "square", "triangle", "rectangle", "pentagon", "hexagon", "star", "heart", "octagon", "diamond"];
for (let i = 0 ; i < shapes.length ; i++) {
    console.log (`shapes${i + 1}: ${shapes[i]}`);
}
function showItems (array) {
    for (let i = 0 ; i < array.length ; i++){
        console.log(`item${i + 1}: ${array[i]}`);
    }
}

const fruits = ["apple", "strawberry", "mango", "orange", "tangerine", "grapes", "kiwi", "cherry", "banana", "watermelon"];
showItems(fruits);