#include<stdio.h>
int main(){
////	restart:
//printf("input a number1 to 7 and tell day name \n");
//int day;
//scanf("%d",&day);
//switch(day){
//	
//	case 1: printf("monday",day);break;
//	case 2: printf("tuesday",day);break;
//	case 3: printf("wendnesday",day);break;
//	case 4: printf("thursday",day);break;
//	case 5: printf("friday",day);break;
//	case 6: printf("satday",day);break;
//	case 7: printf("sunday",day);break;
//	
//	default:{
//		printf("try and enter 1 up to 7, try again");
////		goto restart;
//	}
//}




printf("input a number\n1 for retangle, \n2 for triangle, \n3 for circle \n");
int option;
float l,w,a,pi=3.14;
scanf("%d",&option);
switch(option){
	case 1:{
		printf("enter lenght and width \n");
		scanf("%f%f",&l,&w);
		a=l*w;
		printf("area rectangle:%.2f good!\n",a);
		break;
	}
	case 2:{
		printf("enter base and height \n");
		scanf("%f%f",&l,&w);
		a=(l*w)/2;
		printf("area triangle: %.2f\n",a);
		break;
	}
	case 3:{
		printf("enter radius\n");
		scanf("%f",&l);
		a=(l*l)*pi;
		printf("area triangle: %.2f\n",a);
		break;
	}
	default:printf("invalid input, try 1 up to 3 \n");
}






	
return 0;
}
