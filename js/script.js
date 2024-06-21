const str = 'some string';
const num = 10;
const bool = true;
const arr = ['john', 'kyle', 'bridget'];

const data = {
    name: 'JD',
    age: 44,
    info: {
        location: 'Atl',
        // hobbies' value is an array - to address a variable w/in an array, use [0] its placement in the array
        hobbies: [
            {
                name: 'Fishing',
                frequency: 1
            },
            {
                name: 'Pickleball',
                frequency: 2
            },
            {
                name: 'Yoga',
                frequency: 3
            }
        ]
    }
};

console.log(data.info.hobbies[1].name)

/*console.log(data.info.hobbies[0].name);

console.log(data.info.hobbies[0].frequency);*/ 