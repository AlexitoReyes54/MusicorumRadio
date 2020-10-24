import java.util.*;

public class Myclass{
  public static void main(String[] args){
    System.out.println("klk");
    Node head = new Node(4);
    Node nodeB = new Node(2);
    Node nodeC = new Node(3);
    Node nodeD = new Node(10);
    Node nodeE = new Node(8);

    head.next = nodeB;
    nodeB.next = nodeC;
    nodeC.next = nodeD;
    nodeD.next = nodeE;
    System.out.println(countNodes(head));
  }
  public static int countNodes(Node head){
    int numOfNodes = 1;
    boolean condition = true;
    Node store = head.next;
    while(condition){
      if (store != null) {
        numOfNodes++;
        store = store.next;
      }else {
        condition = false;
      }
    }
    return numOfNodes;
  }
}

public class Node{
  int data;
  Node next;
  Node(int data){
    this.data = data;
  }
}
