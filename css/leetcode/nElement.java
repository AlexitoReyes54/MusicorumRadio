import java.util.*;

public class Myclass {
  public static void main(String[] args){
    int[] nums = {5,1,5,2,5,3,5,4};
    int r = elements(nums);
    System.out.println(r);
  }

  public static int elements(int[] A){
    Hashtable<Integer, Integer> demo = new Hashtable<Integer,Integer>();
    int result = 0;
    for (int i = 0;i < A.length;i++ ) {
      boolean storage = demo.contains(A[i]);
      if (storage == true) {
        System.out.println("found is "+A[i]);
        result = A[i];
        break;
      }
      demo.put(A[i],A[i]);
    }
    return result;
  }
}
