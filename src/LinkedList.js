class LinkedList {
    constructor() {
        this.head = null;
    }

    static createLinkedList(...values) {
        const ll = new LinkedList();
    
        for (let i = 0; i <= values.length - 1; i++) {
            ll.append(values[i]);
        }
    
        return ll;
    }

    append(value) {
        // Adds a new node containing value to the end of the list
        const newNode = new Node(value);
    
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
        }
    }

    prepend(value) {
        // Adds a new node containing value to the start of the list
        this.head = new Node(value, this.head);
    }

    size() {
        // Returns the total number of nodes in the list
        let current = this.head;
        let listSize = 0;

        if (!current) {
            return listSize;

        } else {
            while (current) {
                current = current.nextNode;
                listSize += 1;
            }
        }

        return listSize;
    }

    getHead() {
        // Returns the first node in the list
        return this.head;
    }

    getTail() {
        // Returns the last node in the list
        let current = this.head;
        let tail;

        if (!current) {
            return null;
        }

        while (current) {
            current = current.nextNode;

            if (current.nextNode === null) {
                tail = current;
            }

            return tail;
        }
    }

    at(index) {
        // Returns the node at a given index
        if (index < 0 || index > this.size()) {
            return null;
        } else if (index === 0) {
            return this.head;
        } else {
            let current = this.head;

            for (let i = 0; i < index; i++) {
                current = current.nextNode;
            }
            
            return current;
        }
    }

    pop() {
        // Removes the last element from the list
        if (this.head === null) {
            return;
        } else if (this.head.nextNode === null) {
            this.head = null;
        } else {
            const previousNode = this.size() > 2 ? this.at(this.size() - 2) : this.head;
            previousNode.nextNode = null;
        }
    }

    contains(value) {
        // Returns true if the passed in value is in the list and otherwise returns false
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.nextNode;
        }

        return false; 
    }

    find(value) {
        // Returns the index of the node containing value, or null if not found
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }

            index++;
            current = current.nextNode;
        }

        return null;
    }

    toString() {
        // Represents LinkedList objects as strings
        let outputString = '';
        let current = this.head;

        while (current) {
            outputString = `${outputString}[${current.value}] -> `;
            current = current.nextNode;
        }

        return `${outputString}null`;
    }
}

class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;
