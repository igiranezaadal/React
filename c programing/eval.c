#include <stdio.h>

int main() {
    int answer;
    const int correctResult = 33;

    do {
        printf("What is 24 + 9? ");
        scanf("%d", &answer);

        if (answer == correctResult) {
            printf("Excellent\n");
        } else {
            printf("Wrong, Try again\n");
        }
        
    } while (answer != correctResult);

    return 0;
}
