
#include <stdio.h>
int main() {
    int customerNumber;
    float units, amount = 0;

    printf("Enter Customer Number: ");
    scanf("%d", &customerNumber);
    printf("Enter Units Consumed: ");
    scanf("%f", &units);
    if (units <= 200) {
        amount = units * 500;
    } else if (units <= 400) {
        amount = 1000 + ((units - 200) * 650);
    } else if (units <= 600) {
        amount = 2300 + ((units - 400) * 800);
    } else {
        amount = 3900 + ((units - 600) * 1000);
    }

    printf("\n___ ELECTRICITY BILL RECEIPT ___\n");
    printf("Customer Number: %d\n", customerNumber);
    printf("Units Consumed : %.2f\n", units);
    printf("Total Amount   : RWF %.2f\n", amount);
    printf("_______________________________\n");

    return 0;
}
