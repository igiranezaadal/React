//#include <stdio.h>
//
//int main() {
//    char firstName[20]; // Declare a character array (string)
//
//    printf("Enter your first name: ");
//
//    // Read input using scanf, it stops at the first space
//    scanf("%s", firstName);
//
//    // Use the received string
//    printf("Hello, %s!\n", firstName);
//
//    return 0;
//}
#include <stdio.h>
#include <string.h>
int main() {
    char name[50]; // Declare a character array (string) with a size limit
    printf("Enter your full name: ");
    // Read input from the user
    // Arguments: 1. variable name, 2. maximum size, 3. standard input (stdin)
    fgets(name, sizeof(name), stdin);
    printf("Hello, %s! Welcome to the program.\n", name);

    return 0;
}
