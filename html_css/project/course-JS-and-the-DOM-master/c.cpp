#include <iostream>
using namespace std; 
class rectangle {
    protected:
        int length;
        int width;
    public:
        virtual void getdata() {
            cout << "Enter length: ";
            cin >> length;
            cout << "Enter width: ";
            cin >> width;
        }
        virtual void calculate() {
            cout << "Area: " << length * width << endl;
            cout << "Perimeter: " << 2 * (length + width) << endl;
        }
};

int main() {
    rectangle r1;
    r1.getdata();
    r1.calculate();
    return 0;
}