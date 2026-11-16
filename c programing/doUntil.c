#include <stdio.h>
int main(){
	int i=4,j=4;
	while(i<=3){
		printf("hello world!\n");
		i++;
	}
	printf("the value i is: %d\n",i);
	
	do{
		printf("hello world!\n");
		i++;
	}
	while(i<=3);
	printf("the value i is: %d\n",i);
return 0;
}
