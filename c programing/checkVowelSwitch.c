#include<stdio.h>
int main(){
char ch;
printf("enter any character to check if is vowel:'iuoea'\n");
scanf("%c",&ch);
switch(ch){
//	case 'i':printf("i is vowel\n");
//	break;
//	case 'u':printf("u is vowel\n");
//	break;
//	case 'o':printf("o is vowel\n");
//	break;
//	case 'a':printf("a is vowel\n");
//	break;
//	case 'e':printf("e is vowel\n");
//	break;
	
//	case 'i':case 'I':printf("%c is vowel\n",ch);break;
//	case 'u':case 'U':printf("%c is vowel\n",ch);break;
//	case 'o':case 'O':printf("%c is vowel\n",ch);break;
//	case 'a':case 'A':printf("%c is vowel\n",ch);break;
//	case 'e':case 'E':printf("%c is vowel\n",ch);break;
	
	case 'i':case 'I':
	case 'u':case 'U':
	case 'o':case 'O':
	case 'a':case 'A':
	case 'e':case 'E':{
						printf("%c is vowel\n",ch);break;
	}
	
	default:printf("entered value is not a vowel");
}	
return 0;
}
