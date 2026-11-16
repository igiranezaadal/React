#include<stdio.h>
int main (){
	int bread=2500,milk=100,sugar=1500;
	int breadnum,milknum,sugarnum;
	
	printf("enter quantity bread, milk, sugar\n");
	scanf("%i%i%i" ,&breadnum,&milknum,&sugarnum);
	int breadbill = breadnum * bread;
	int  milkbill = milknum * milk;
	int sugarbill = sugarnum * sugar;
	int sum=breadbill+milkbill+sugarbill;
	printf("\nbread quantity:%i \nmilk quantity:%i \nsugar quantity:%i ", breadnum,milknum,sugarnum);
	printf("\n\nbill of bread:%i \nbill of milk:%i \nbill of sugar:%i ", breadbill,milkbill,sugarbill);
	
	printf("\n\ntotal bils: %d ",sum);
	return 0;
} 
