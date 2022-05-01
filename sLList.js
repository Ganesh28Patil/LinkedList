
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
        var node = new Node(element);
        // if the linedlist is empty
        if(!this.head){
            this.head = node;
        }else{
            var current = this.head; // pointer current is allocated to head    //
            while(current.next){        // search karo ki current ka next kabh null hota hai
                current  = current.next;  
            }

            /*  while-loop will terminate only when it will reach to last node
             and tabhi curr.next ko  null mil jata hai so the while-loop will terminate  */
            current.next = node;    //  last node me naya node add karo
        }
        this.size++;            
        }

    }
    let list = new LinkedList();
    console.log('list:', list)
    list.add(2);
    console.log('list:', list)
    list.add(21);


    console.log('list:', list)

// console.log(!null); // true
