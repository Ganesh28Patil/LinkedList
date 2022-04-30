
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList{
    constructor(head){
        this.head = null;
        this.size = 0;
    }
    // methods
    //add
    add(element){
        var node = new Node();
        // if the linedlist is empty
        if(!this.head){
            this.head = node;
        }else{
            
        }
    }
}


// console.log(!null); // true