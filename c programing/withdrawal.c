#include <stdio.h>
int main() {
    int bal = 20000,dep,rem;

    printf("Welcome to Bank of Kigali\n");
    printf("Your current balance is: %d RWF\n", bal);
    printf("Enter the amount you want to withdraw: ");
    scanf("%d",&dep);
    
    rem = bal-dep;
    if (rem >= 1000) {
        bal = rem;
		printf("Withdrawal successful!\n");
        printf("Your remaining balance is: %d RWF\n", bal);
    } else {
        printf("Transaction Denied.\nError: Your balance cannot fall below 1000 RWF.\n");
    }
    return 0;
}

