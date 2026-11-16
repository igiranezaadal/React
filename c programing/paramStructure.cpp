#include <stdio.h>

struct Student {
    int marks[5];
};

void getMarks(struct Student *s) {
    int i;

    printf("Enter 5 marks:\n");
    for(i = 0; i < 5; i++) {
        printf("Mark %d: ", i + 1);
        scanf("%d", &s->marks[i]);
    }

    printf("\nStudent Marks:\n");
    for(i = 0; i < 5; i++) {
        printf("Mark %d = %d\n", i + 1, s->marks[i]);
    }
}

int main() {
    struct Student s1;
    getMarks(&s1);

    return 0;
}
