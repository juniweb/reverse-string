function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
var text = reverseString("git flow hotfix");

console.log(text);
