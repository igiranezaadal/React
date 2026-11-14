// import java.lang.reflect.Constructor;
import java.io.InputStream;
import java.util.*;

public class Sum {
    private double num1;
    private double num2;

    // public sum(double num1, double num2){
    //     this.num1=num1;
    //     this.num2=num2;
    // }

    public Sum(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public void printTotal(){
        double total= num1 + num2;
        System.out.println(num1+ " + " +num2 + " = " + total );
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Hello, Enter First Number");
        double num1_=sc.nextDouble();
        
        System.out.println("Hello, Enter First Number");
        double num2_=sc.nextDouble();
        
        
        Sum obj = new Sum(num1_, num2_);
        obj.printTotal();
        sc.close();
    }
}