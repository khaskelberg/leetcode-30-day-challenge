// Another solution would be to use 2 pointers. One incrementing by 1 and another by 2.

var middleNode = function(head) {
    let count = 0;
    let it = head;
    do {
        count++;
        it = it.next;
    } while (it != null)
    let middle = Math.floor(count / 2);
    count = 0;
    it = head;
    for (let i = 0; i < middle; i++) {
        it = it.next;
    }
    return it;
};
