public class AssignmentOps {

    public static void main(String[] args) {
        int a = 10, b = 20, c = 30;

        c = a + b;

        System.out.println("c = a + b = " + c);

        c += a;// c = c + a
        System.out.println("c += a = " + c);

        c -= a;//c = c - a
        System.out.println("c -= a = " + c);

        c *= a;// c = c * a
        System.out.println("c *= a = " + c);

        a = 10;
        c = 15;
        c /= a;// c = c / a
        System.out.println("c /= a = " + c);

        a = 10;
        c = 15;
        c %= a;// c = c % a
        System.out.println("c %= a = " + c);
    }
}