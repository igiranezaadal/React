#include <stdio.h>

int main() {
    char firstName[50], lastName[50];
    int age, yearsEmployed;
    double monthlySalary, totalEarnings;
    printf("Enter First Name: ");
    scanf("%s", firstName);
    printf("Enter Last Name: ");
    scanf("%s", lastName);
    printf("Enter Age: ");
    scanf("%d", &age);
    printf("Enter Monthly Salary: ");
    scanf("%lf", &monthlySalary);
    printf("Enter Number of Years Employed: ");
    scanf("%d", &yearsEmployed);
    totalEarnings = monthlySalary * 12 * yearsEmployed;
    printf("\n--- CUSTOMIZED CAREER OVERVIEW ---\n");
    printf("Full Name     : %s %s\n", firstName, lastName);
    printf("Age           : %d\n", age);
    printf("Total Earnings: %.2f\n", totalEarnings);
    printf("Status        : ");
    if (age < 40) {
        printf("You are early in your career, with plenty of time left until retirement.\n");
    } 
    else if (age >= 40 && age < 65) {
        int yearsLeft = 65 - age;
        printf("You have %d years left until retirement at age 65.\n", yearsLeft);
    } 
    else {
        printf("You are already eligible for retirement.\n");
    }
    printf("___________________________________\n");
    return 0;
}
