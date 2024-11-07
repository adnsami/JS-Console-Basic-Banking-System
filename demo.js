const persons = [
    {
        id: 1,
        firstName: 'Adnan',
        lastName: 'Sami',
        age: 30,
    },
    {
        id: 2,
        firstName: 'Fahmida',
        lastName: 'Sultana',
        age: 50 
    },
    {
        id: 3,
        firstName: 'Golam',
        lastName: 'Zilani',
        age: 100
    }
]

const id = 2;

for(const idx in persons)
{
    if(persons[idx].id === id) {
        persons.splice(idx, 1);
        break;
    }
}

console.log(persons);