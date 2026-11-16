#include <stdio.h>
int main(){
	int table1[2][3],table2[2][3],table3[2][3];
	int m,n;
	//recieving table1
	for(m=0;m<2;m++){
		
		for(n=0;n<3;n++){ 
		printf("enter index %d %d value: ",m,n);
		scanf("%d",&table1[m][n]);
		
		}
	}
	
	//recieving table2
	for(m=0;m<2;m++){
		
		for(n=0;n<3;n++){ 
		printf("enter index %d %d value: ",m,n);
		scanf("%d",&table2[m][n]);
		
		}
	}
	
	//adding table 1 and 2 to be 3
	
	for(m=0;m<2;m++){
		
		for(n=0;n<3;n++){ 
		table3[m][n]=table1[m][n]+table2[m][n];
		}
	}
		
		
		
	//displaying table 3
	for(m=0;m<2;m++){
		for(n=0;n<3;n++){
			printf("%d\t",table3[m][n]);
		}
		printf("\n");
	}
	
	
//	int numbers[] = {1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3};
//	for(n=0;n<25;n++){
//			printf("%d\t",numbers[n]);
//		}



	
return 0;
}
