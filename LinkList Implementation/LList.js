class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class LinkedList{
    // constructor
    constructor(){
        this.head = null;   // Initially Head is empty
        this.size = 0;  // initially the size of LinkedList is zero
    }
    // methods
     // add insert delete print   // this are member methods or memebr functions of perticular class
    //  add 
     add(element){
         var node = new Node(element)
        //  if linked List is empty
        if(!this.head){
            this.head = node;
        }else{
            var current = this.head; 
             while(current.next){
                 current = current.next;
             }
             current.next = current;
        }
        this.size++;
     }
    //  insert //delete 
    
    //print 
    // isEmpty
    isEmpty(){
        return this.size === 0?true:false
    }

    // size

    size(){
        return this.size
    }

printList(){
    var current = this.head;
    while(current){
        console.log("element = "+current.element
        +"index = "+size++);
        current = current.next;
    }
  }
}

var list = new LinkedList();

list.add(1);
list.add(2)
list.printList();
console.log(list.size());

// const elem = new Node(5);
// console.log('elem:', elem); // elem: Node { element: 5, next: null } 


/*
const elem = new Node(50);  
console.log('elem:', elem); //elem: Node { element: 50, next: null }

  
function Elem(name,score){
    this.name = name;
    this.score = score;
}

const ele = new Elem("Ganesh","102"); // constructor
console.log('ele:', ele); // constructor
// ele: Elem { name: 'Ganesh', score: '102' }
const node = new Node(ele);
console.log('node:', node);
// node: Node { element: Elem { name: 'Ganesh', score: '102' }, next: null }

*/



