import java.util.*;

public class Myclass{
  public static void main(String[] args){
    //System.out.println("Linked List");

    //Defining singly-linked-list
    ListNode nodeA = new ListNode(1);
    ListNode nodeB = new ListNode(0);
    ListNode nodeC = new ListNode(1);

    //Conections
    nodeA.next = nodeB;
    nodeB.next = nodeC;

    getDecimalValue(nodeA);
  }

  public static int getDecimalValue(ListNode head){
    boolean condition = true;
    String binary = "";
    ListNode store = head.next;

    //op with the head
    //System.out.println(head.val);
    binary = binary + head.val;

    //op with the other items
    while(condition){
      if (store != null) {
        //System.out.println(store.val);
        binary = binary + store.val;
        store = store.next;
      }else {
        condition = false;
      }
    }
    int decimal=Integer.parseInt(binary,2);
    System.out.println(decimal);
    return decimal;
  }

}

public class ListNode {
  int val;
  ListNode next;
  ListNode(int val) { this.val = val; }
  ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
