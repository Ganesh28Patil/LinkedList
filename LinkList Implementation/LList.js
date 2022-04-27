class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class LinkedList{
    // constructor
    // methods
}

const elem = new Node(50);
console.log('elem:', elem);

  
function Elem(name,score){
    this.name = name;
    this.score = score;
}

const ele = new Elem("Ganesh","102"); // constructor
console.log('ele:', ele); // constructor
const node = new Node(ele);
console.log('node:', node)

