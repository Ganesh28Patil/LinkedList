
// Example 1
class Node{
    constructor(ele){
        this.ele = ele;
        this.next = null;
    }
}


console.log(Node);   // [class Node]
// console.log(Node(5));    
 
let k = new Node();
console.log(k);   // Node { ele: undefined, next: null }

let w = new Node("some Value");
console.log(w);   // Node { ele: 'some Value', next: null }

let p = new Node(28);
console.log(p) //  Node { ele: 28, next: null }

console.log(p.ele,w.ele,k.ele);

// Example 2
class Node2{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let node = new Node2(23)
console.log('node.data = ', node.data);


// constructor function

function Elem(name,score){
    this.name =name;
    this.score = score;
}
const result = new Elem("Ganesh",25);
console.log('result:', result); // Elem { name: 'Ganesh', score: 25 }
console.log(result.name);

const node2 = new Node2(result);
console.log('node2:', node2);
