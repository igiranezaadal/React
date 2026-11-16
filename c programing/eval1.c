#include <stdio.h>

int main() {
    int choice, quantity;
    float price = 0, total;
    char *foodName;

    printf("--- MENU ---\n");
    printf("1. French Fries with liver       - 3500\n");
    printf("2. Chicken pilau served with salad - 6000\n");
    printf("3. Beef wrap served with French fries - 4500\n\n");
    printf("Enter order number (1-3): ");
    scanf("%d", &choice);
    printf("Enter quantity: ");
    scanf("%d", &quantity);
    switch(choice) {
        case 1:
            foodName = "French Fries with liver";
            price = 3500;
            break;
        case 2:
            foodName = "Chicken pilau served with salad";
            price = 6000;
            break;
        case 3:
            foodName = "Beef wrap served with French fries";
            price = 4500;
            break;
        default:
            printf("Invalid selection!\n");
            return 1;
    }
    total = price * quantity;
    printf("\n--- RECEIPT ---\n");
    printf("Item: %s\n", foodName);
    printf("Quantity: %d\n", quantity);
    printf("Total Bill: %.2f\n", total);
    printf("----------------\n");

    return 0;
}
