class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// let node = new ListNode(10);
// console.log('node:', node)

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    push(data){
        let node = new ListNode(data);
         // if(!this.head){
            //    this.size++;
        //     return this.head = new ListNode(data);
        // }
        if(!this.head){
            this.head = node;
            this.size++;
            return this.head;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.size++;
        }               
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
console.log('list:', list)
console.log("size of SLL : ",list.size);

list.push(10);

console.log('list:', list)
list.push(20);
console.log('list:', list)
list.push(30);
console.log('list:', list)
list.print();

console.log("size of SLL : ",list.size);