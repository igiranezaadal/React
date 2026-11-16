import java.util.*;
public class mtn {
    
    public static void main(String[] args) {
        Scanner get= new Scanner(System.in);
        System.out.print("welcome to MTN by Adal\n");
        System.out.print("\n_______ Choose ur Option by number _______\n");

        System.out.print("\n 1. Sending money");
        System.out.print("\n 2. paying");
        System.out.print("\n 3. Banking");
        System.out.print("\n 4. Internet Paying");
        System.out.print("\n 5. Checking your balance");
        
        int method=get.nextInt();
        System.out.print("\n Ur option is "+ method);
        //Cant validate in put due to vscode output is read only

        get.close();



    }
}
