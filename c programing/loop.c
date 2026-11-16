#include<stdio.h>
#include<math.h>
void sumation();
void larg(int a,int b,int c);
int main(){
//	int a,i,result=1,x;
//	printf("enter the value of a and x\n");
//	scanf("%d%d",&a,&x);
//	for(i=1;i<=x;i++){
//		result*=a;
//	}
//	printf("result: %d\n",result);


//sumation();
//printf("learning about user defined function \n");
//sumation();

int x,y,z,result;
printf("enter the value of a and x\n");
scanf("%d %d %d",&x,&y,&z);
result=sqrt(4);

larg(x,y,z);
printf("result of squaer root is: %d \n",result);



return 0;
}


void sumation(){
	int a,b;
	printf("enter the value of a and b\n");
	scanf("%d %d",&a,&b);
	printf("%d + %d = %d\n",a,b,a+b);
}
void larg(int a,int b,int c){
	if(b>a && b>c){
		printf("\n%d is largest ",b);
	}
	else if(a>b && a>c){
		printf("\n%d is largest ",a);
	}
	else if(c>a && c>b){
		printf("\n%d is largest ",c);
	}
	else printf("\n they are all equal");
}
