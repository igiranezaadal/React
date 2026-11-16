#include <stdio.h>
#include<iostream>

using namespace std;
class A{
public:
void fun(int age){
	printf("function call %d",age);
	}
};

int main(){
	A s;
	s.fun(23);
	cout<<"cpp";
return 0;
}
