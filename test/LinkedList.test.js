const LinkedList = require("../src/LinkedList");

describe("#append", () => {
    it("Appends a new node to an empty list and sets it as the head", () => {
        const ll = new LinkedList();
        ll.append(2);
        expect(ll.head.value).toBe(2);
    })

    it("Appends a new node to single node array", () => {
        const ll = new LinkedList();
        ll.append(2);
        ll.append(5);
        expect(ll.head.nextNode.value).toBe(5);
    })
})

describe("#prepend", () => {
    it("Prepends a new node to an empty list", () => {
        const ll = new LinkedList();
        ll.prepend(2);
        expect(ll.head.value).toBe(2);
    })

    it("Prepends a new node to single node array", () => {
        const ll = LinkedList.createLinkedList(2);
        ll.prepend(1);
        expect(ll.head.value).toBe(1);
        expect(ll.head.nextNode.value).toBe(2);
    })
})

describe("#size", () => {
    it("Returns 0 as the size of an empty list", () => {
        const ll = new LinkedList();
        expect(ll.size()).toBe(0);
    })

    it("Returns the size of the list", () => {
        const ll = LinkedList.createLinkedList(1,2);
        expect(ll.size()).toBe(2);
    })
})

describe("#getTail", () => {
    it("Returns null if the list is empty", () => {
        const ll = new LinkedList();
        expect(ll.getTail()).toBe(null);
    })

    it("Returns the tail node of the list", () => {
        const ll = LinkedList.createLinkedList(1,2);
        expect(ll.getTail().value).toBe(2);
    })
})

describe("#at", () => {
    it("Returns null if the index is out of range", () => {
        const ll = LinkedList.createLinkedList(1,2);
        expect(ll.at(-1)).toBe(null);
        expect(ll.at(3)).toBe(null);
    })

    it("Returns the node at the given index", () => {
        const ll = LinkedList.createLinkedList(1,2);
        expect(ll.at(1).value).toBe(2);
    })
})

describe("#pop", () => {
    it("Removes the last node from a single node list", () => {
        const ll = LinkedList.createLinkedList(1);
        ll.pop();
        expect(ll.size()).toBe(0);
    })

    it("Removes the last node from a two nodes list", () => {
        const ll = LinkedList.createLinkedList(1,2);
        ll.pop();
        expect(ll.size()).toBe(1);
        expect(ll.head.nextNode).toBe(null);
    })

    it("Removes the last node from the list", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        ll.pop();
        expect(ll.size()).toBe(2);
        expect(ll.getTail().nextNode).toBe(null);
    })
})

describe("#toString", () => {
    it("Prints the list as a string", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        expect(ll.toString()).toBe('[1] -> [2] -> [3] -> null');
    })
})

describe("#contains", () => {
    it("Returns true when the searched value is found in the list", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        expect(ll.contains(2)).toBe(true);
    })

    it("Returns false when the searched value is not found in the list", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        expect(ll.contains(4)).toBe(false);
    })
})

describe("#find", () => {
    it("Returns the index of the node containing searched value", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        expect(ll.find(2)).toBe(1);
    })

    it("Returns null when the searched value is not found", () => {
        const ll = LinkedList.createLinkedList(1,2,3);
        expect(ll.find(4)).toBe(null);
    })
})


