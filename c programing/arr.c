#include <stdio.h>
#include <conio.h>
int main(){
	int i,marks[5],sum=0,high=0,low=0,range=0;
	for(i=0;i<=4;i++){
		printf("enter element %d ",i);
		scanf("%d",&marks[i]);
		sum+=marks[i];
		if(marks[i]>high){
			high=marks[i];
		}
		if(marks[i]<high){
			low=marks[i];
		}
		if(marks[i]<=100 && marks[i]>=90){
			range+=1;
		}
	}
	for(i=0;i<=4;i++){
		printf("%d\t",marks[i]);
	}
	printf("\nhighest mark is: %d \n",high);
	printf("lowest mark is: %d \n",low);
	printf("number of best better students is: %d \n",range);
return 0;
}
