public class Arithmetic {

    public static void main(String[] args) {
        int a = 10, b = 20, c = 25, d = 25;
        System.out.println("a + b = " + (a+b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a *b));
        System.out.println("b / a = " + (b / a));
        System.out.println("b % a = " + (b % a));
        System.out.println("c % a = " + (c % a));
        System.out.println("a = a + 1 => " + (a = a + 1));
        System.out.println("b = b - 1 => " + (b = b - 1));
        System.out.println("d = d + 100 => " + (d = d + 100));
        System.out.println("d = d - 101 => " + (d = d - 101));
    }
}