#include <stdio.h>

void getMarks(int marks[], int size) {
	    int i,sum=0;
	    printf("Enter %d marks:\n", size);
	    for(i = 0; i<size; i++) {
	        printf("Mark %d: ", i+1);
	        scanf("%d", &marks[i]);
	        sum+=marks[i];
	    }
	
	    printf("\nStudent Marks:\n");
	    for(i = 0; i < size; i++) {
	        printf("Mark %d = %d\n", i + 1, marks[i]);
	        
	    }
	    printf("\ntotal markrs: %d ",sum);
	    printf("\naverage of student marks: %d",sum/size);
	    
	}

int main() {
    int marks[5];
    getMarks(marks, 5);
    return 0;
}
