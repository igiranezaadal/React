 #include <stdio.h>
 #include <conio.h>
 #include <math.h>
 #include <string.h>
 int main(){
char name[34],place[25];
int age,Phone_number;
double version;
     printf("\nenter your name: ");
     scanf("%34s", &name);
     printf("\nenter your age: ");
     scanf("%d",&age);
     printf("\nenter your phone number: ");
     scanf("%d",&Phone_number);
     printf("\nenter your place: ");
     scanf("%25s",&place);
     printf("\nenter version of the update");
     scanf("%lf", &version);
     
     printf("\nyour name is:%s", name);
     printf("\nyour age is:%d", age);
     printf("\nyour Phone_number is:%d", Phone_number);
     printf("\nyour place is:%s", place);
     printf("\nversion %f", version);
     
//	int testInteger;
//	printf("\nEnter an integer: ");
//	scanf("%d", &testInteger);
//	printf("\nNumber = %d",testInteger);
    return 0;
}
