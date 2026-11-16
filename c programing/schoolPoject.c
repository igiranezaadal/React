#include <stdio.H>
#include <string.H>
int main(){
	char depart[25],studentName[40];
	int regNo,year,c,ict,eng,math,total,av;
	printf("enter department,\nenter year,\nenter reg no, \nenter student name\n");
	scanf("%s%i%i%s",&depart,&year,&regNo,&studentName);
	
	printf("enter programming in c, introduction to ict, general english, mathematics\n");
	scanf("%i%i%i%i",&c,&ict,&eng,&math);
	
	total=c+ict+eng+math;
	av=total/4;
	
	
	printf("\n\n\tUNIVASITY OF KIGALI STUDENT TRANSCRIPT");
	printf("\nDepartment: %s\t\t year:%i\nReg No: %i \t\t Student Name:%s\n",depart,year,regNo,studentName);
	
	printf("\nsubject            \t\t%imarks\n",c);
	printf("___________________________________________\n");
	printf("\nProgramming in c   \t\t%i",c);
	printf("\nIntroduction to ICT\t\t%i",ict);
	printf("\nGeneral English    \t\t%i",eng);
	printf("\nMathematics        \t\t%i",math);
	
	printf("\n___________________________________________\n");
	
	printf("Total Marks:\t\t\t%i\n",total);
	printf("Average Marks:\t\t\t%i",av);
//	systemClean();
return 0;
}
