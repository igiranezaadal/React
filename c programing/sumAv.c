#include<stdio.h>
int main(){
	int i=0,sum=0,arr[4];
	
	while(i<4){
		printf("enter number\n");
		scanf("%d",&arr[i]);
		sum+=arr[i];
		i++;
	}
	
	while(i<4){
		printf("%d",arr[i]);
		i++;
	}
	int av=sum/4;
	printf("sum: %d\n",sum);
	printf("average: %d",av);
return 0;
}
