#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    string binary = "";  // Use a string to store the binary result

    while (n != 0) {
        int bit = n & 1;  // Get the least significant bit
        binary = to_string(bit) + binary;  // Append the bit to the left of the string
        n = n >> 1;  // Right shift the number to process the next bit
    }

    if (binary == "") {
        binary = "0";  // If the input number is 0, output "0"
    }

    cout << binary;  // Output the binary equivalent
    return 0;
}
