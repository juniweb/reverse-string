function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
var text = reverseString("Hi.. Git-world");
console.log(text);
