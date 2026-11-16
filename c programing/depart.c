#include <stdio.h>

int main() {
    char department[10], regNo[30], studentName[50];
    int progC, introICT, genEnglish, math, totalMarks;
    printf("Enter Department (e.g., BCS): ");
    scanf("%s", department);
    
    printf("Enter Registration Number: ");
    scanf("%s", regNo);
    printf("Enter Student Name: ");
    scanf(" %[^\n]s", studentName);//researhed%[^\n]

    printf("Enter marks for Programming in C: ");
    scanf("%d", &progC);
    
    printf("Enter marks for Introduction to ICT: ");
    scanf("%d", &introICT);
    
    printf("Enter marks for General English: ");
    scanf("%d", &genEnglish);
    
    printf("Enter marks for Mathematics: ");
    scanf("%d", &math);
    totalMarks = progC + introICT + genEnglish + math;
    printf("\n\n\tUNIVERSITY OF KIGALI STUDENT TRANSCRIPT: %s\n", department);
    printf("\n\tReg No.: %s  Student Name: %s\n", regNo, studentName);
    
    printf("\tSUBJECT MARKS\n");
    printf("\t----------------------------------------------------\n");
    printf("\tProgramming in C    %d\n", progC);
    printf("\tIntroduction to ICT %d\n", introICT);
    printf("\tGeneral English     %d\n", genEnglish);
    printf("\tMathematics         %d\n", math);
    printf("\t-----------------------------------------------------\n");
    printf("\tTotal Marks: %d\n", totalMarks);
    printf("\t-----------------------------------------------------\n");

    return 0;
}
