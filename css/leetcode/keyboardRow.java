import java.util.*;

public class MyClass{
  public static void main(String[] args){
    String[] demo = {"a", "Alaska", "Dad", "Peace"};
    find(demo);
  }
  public static String[] find(String[] Words){
    String[] row1 = {"q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y",
    "U","I","O","P"};
    String[] row2 = {"a","s","d","f","g","h","j","k","l","A","S","D","F","G","H","J",
    "K","L"};
    String[] row3 = {"z","x","c","v","b","n","m","Z","X","C","V","B","N","M"};
    Hashtable<String,String> keyboard = new Hashtable<String,String>();
    List<String> result = new ArrayList<String>();

    for (int i = 0;i < row1.length;i++) {
      keyboard.put(row1[i],"row1");
    }

    for (int i = 0;i < row2.length;i++) {
      keyboard.put(row2[i],"row2");
    }

    for (int i = 0;i < row3.length;i++) {
      keyboard.put(row3[i],"row3");
    }

    //System.out.println(keyboard.get("d"));

    for (int i = 0;i < Words.length;i++) {
      String currWord = Words[i];
      String row = "";

      for (int j = 0;j < currWord.length();j++) {
          String currChar =  String.valueOf(currWord.charAt(j));
          String currRow = keyboard.get(currChar);

          if (j == 0) {
            row = keyboard.get(currChar);
            //System.out.println("saved as "+row);
          }else if (j > 0 && row != currRow) {
            //System.out.println("fail");
            break;
          }else if (j == currWord.length() - 1 && row == currRow) {
            //System.out.println("congrats");
            result.add(Words[i]);
          }

          if (currWord.length() == 1) {
                result.add(Words[i]);
          }

      }
    }
    System.out.println(result);
    String[] response = new String[result.size() ];
    result.toArray( response );
    return response;
  }
}
