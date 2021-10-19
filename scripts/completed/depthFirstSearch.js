class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array.push(this.name);

      if (this.children.length > 0) {
        for (let i=0; i < this.children.length; i++) {
          this.children[i].depthFirstSearch(array)
        }
      }
      return array;
    }
}

A = new Node("A")
A.addChild("B")
A.addChild("C")
A.addChild("D")

B = A.children[0]
D = A.children[2]

B.addChild("E")
B.addChild("F")

F = B.children[1]
F.addChild("I")
F.addChild("J")

D.addChild("G")
D.addChild("H")
G = D.children[0]

G.addChild("K")


console.log(A.depthFirstSearch([]));