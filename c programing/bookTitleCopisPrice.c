#include <stdio.h>

struct Book {
    char title[100];
    int copies;
    float price;
};

int main() {
    struct Book books[3];
    int i;
    float totalValue;

    // Enter information for 3 books
    for (i = 0; i < 3; i++) {
        printf("\nEnter information for Book %d\n", i + 1);

        printf("Enter book title: ");
        scanf(" %[^\n]", books[i].title);

        printf("Enter number of copies: ");
        scanf("%d", &books[i].copies);

        printf("Enter price per copy: ");
        scanf("%f", &books[i].price);
    }

    // Display information
    printf("\n========== BOOK RECORDS ==========\n");

    for (i = 0; i < 3; i++) {
        totalValue = books[i].copies * books[i].price;

        printf("\nBook %d\n", i + 1);
        printf("Title: %s\n", books[i].title);
        printf("Copies Available: %d\n", books[i].copies);
        printf("Price per Copy: %.2f\n", books[i].price);

        if (books[i].copies < 5)
            printf("Status: LOW AVAILABILITY\n");
        else
            printf("Status: AVAILABLE\n");

        printf("Total Value of Copies: %.2f\n", totalValue);
    }

    return 0;
}
