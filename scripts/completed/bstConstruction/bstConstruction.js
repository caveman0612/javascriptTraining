class BST {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert ( value ) {
        let current = this;

        while (true) {
            if (current.value > value) {

                if (current.left == null) {
                    current.left = new BST(value);
                    break;

                } else {
                    current = current.left;
                }

            } else {
                if (current.right == null) {

                    current.right = new BST(value);
                    break;

                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }

    contains ( value ) {
        let current = this;

        while ( current != null ) {
            if ( current.value > value ) {
                current = current.left;

            } else if ( current.value < value ) {
                current = current.right;

            } else {
                return true;
            }
        }
        return false;
    }

    remove ( value, parentNode=null ) {
        let current = this;

        while ( current != null ) {

            if ( current.value > value ) {

                parentNode = current;
                current = current.left;

            } else if ( current.value < value ) {

                parentNode = current;
                current = current.right;

            } else {
                if (current.left != null && current.right != null) {

                    current.value = current.right.findSmallestValue();
                    current.right.remove(current.value, current);

                }else if ( parentNode == null ) {
                    if ( current.left !== null ) {

                        current.value = current.left.value;
                        current.right = current.left.right;
                        current.left = current.left.left;

                    }else if ( current.right !== null ) {

                        current.value = current.right.value;
                        current.left = current.right.left;
                        current.right = current.right.right;
                    }
                } else {
                    if ( parentNode.left == current ) {
                        if (current.left == null) {
                            parentNode.left = current.right;
                        } else {
                            parentNode.left = current.left;
                        }
                    } else if ( parentNode.right == current ) {
                        if ( current.left == null ) {
                            parentNode.right = current.right;
                        } else {
                            parentNode.right = current.left;
                        }
                    }
                }
                break;
            }
        }
        return this;
    }

    findSmallestValue () {
        let currentNode = this;
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode.value
    }

}

module.exports = BST