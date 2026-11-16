#include<stdio.h>
int main(){
//	printf("open the door\n");
//	printf("stich on the light\n");
//	printf("1 for turn off,press any value to turn off \n");
//	int option;
//	scanf("%d",&option);
//	if (option!=1){
//		printf("lights are off.\n");
//	}
//	else 
//	printf("lights are off.\n");
//	
//	

//	printf("\n\nenter the age\n");
//	int age;
//	scanf("%d",&age);
//	if (age<=16){
//		printf("you are not eligable to drive\n");
//	}
//	else 
//	printf("you are eligable to drive\n");
	
//	int number;
//	printf("enter number find its odd or even\n");
//	scanf("%d",&number);
//	if(number%2==0)
//	printf("%d is even",number);
//	else printf("%d is odd",number);



//	int num;
//	printf("enter number btn 1 to 10\n");
//	scanf("%d",&num);
//	if(num>=1 && num<11)
//	printf("%d correct number",num);
//	else printf("%d sorrymessage is out of range",num);
	
	
//	printf("what is 24+9= to?\n");
//	int num;scanf("%d",&num);
//	if(num==(24+9)) 
//	printf("excelent, good boy!");
//	else printf("wrong,try again now!");



//printf("what is x+y= to?\n");
//	int x,y,sum;
//	scanf("%d%d",&x,&y);
//	printf("\nenter the solution");
//	scanf("%d",&sum);
//	if(sum==x+y)
//	printf("good job/boy!");
//	else printf("wrong,try again now!");



const am=20000;
int deposit,bal;
printf("you 20k,put deposit amount");
scanf("%d",&deposit);
if(deposit>=1000 && deposit<20000){
	bal=am-deposit;
printf("the remaining  ballance is: %d",bal);
	
}
else{
printf("you are broke");
}
return 0;
}
