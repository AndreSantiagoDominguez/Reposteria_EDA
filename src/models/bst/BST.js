import Node from "./Node.js";

class BST{
 #root
 
    constructor(){
    this.#root = null;
    }

 add(value){
    if(this.#root == null){
        this.#root = new Node(value);
        return true;
    }

    else{
        return this.insertNode(this.#root, value);
    }
 }

 insertNode(node, value){
    if(value.nombre < node.value.nombre){
        if(node.left == null){
            node.left = new Node(value);
            return true
        }

        else{
            return this.insertNode(node.left, value);
        }
    }

    else {
        if(node.right == null){
            node.right = new Node(value);
            return true;
        }

        else{
            return this.insertNode(node.right, value);
        }
    }
 }

 search(nombre){
    return this.searchNode(this.#root, nombre);
 }

 searchNode(node, nombre){
    if(node == null || node.value.nombre == nombre){
        return node
    }
    else if(nombre < node.value.nombre){
        return this.searchNode(node.left, nombre);
    }
    else{
        return this.searchNode(node.right, nombre);
    }
 }

 minValue(){
    return this.minValueNode(this.#root);
 }

 minValueNode(node){
    if(node == null || node.left == null){
        return node;
    }
    else{
        return this.minValueNode(node.left);
    }
 }

 maxValue(){
    return this.maxValueNode(this.#root);
 }

maxValueNode(node){
    if(node == null || node.right == null){
        return node;
    }
    else{
        return this.maxValueNode(node.right)
    }
  }

  iniciarRecorridoEnOrden (callback){
    this.recorridoEnOrden(this.#root, callback);
  }

  recorridoEnOrden (node, callback){
    if(node != null){
        this.recorridoEnOrden(node.left, callback);
        callback(node.value);
        this.recorridoEnOrden(node.right, callback);
    }
  }
}

export default BST;