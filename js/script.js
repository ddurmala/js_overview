var firstName = 'Dana'; //string
var lastName = 'Castagna';
var age = 39; //Number
var names = ['dana', 'nick', 'julie', 'justine', 'kevin', 'lynn', 'pete', 'lauren', 'maddie'];
var oldEnough = age >= 21;

if (firstName && lastName) {
    console.log('full name received');
}
else if (!firstName) {
    console.log('you must provide your first name')
}
else if (!lastName) {
    console.log('you must provide your last name')
}
else {
    console.log('you must provide your first name')
}

if (oldEnough) {
    console.log('you may enter!');
}
else {
    console.log('you must be over 21 to enter');
}