import java.util.*;

public class MyClass {
  public static void main(String[] args) {
  int res =  numJewelsInStones("aA","aAAbbbb");
  System.out.println(res);
  }

  public static int numJewelsInStones(String J, String S) {
    int numOfJewels = 0;
    Hashtable<String, Integer> jewels = new Hashtable<String, Integer>();

   for (int i = 0;i < J.length();i++ ) {
     String toSave =String.valueOf(J.charAt(i));
     jewels.put(toSave,1);
   }

   for (int i = 0;i < S.length();i++ ) {
     String stone =String.valueOf(S.charAt(i));
     if (jewels.get(stone) != null) {
       numOfJewels++;
     }
   }

   return numOfJewels;
  }
}
