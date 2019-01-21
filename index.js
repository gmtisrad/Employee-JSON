const STORE = {
    employees: [
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
       {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',},
      {name: 'Ipsum, Lorem',
       description: 'Lorem ipsum ipsum, lorem lorem. Ipsum lorem lorem ipsum.',
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',}
    ]
}
  
function generateTable () {
    let tableHtml = [];

    for (let i = 0; i < STORE.employees.length; i++) {
        let htmlString = `
            <li class='employee-item'>
                <div class='employee-img'><img src='${STORE.employees[i].imgUrl}' alt='employee image'/></div>
                <div class='employee-info'>
                    <h3>${STORE.employees[i].name}</h3>
                    <p>${STORE.employees[i].description}</p>
                </div>
            </li>
        `
        tableHtml.push(htmlString);
    }
    tableHtml.unshift(`<ul class='employee-list'>`); //Places opening ul tag at beginning of the array
    tableHtml.push(`</ul>`);//Places closing ul tag at the end of the array
    return (tableHtml.join(''));//Turns seperate html elements into one html element.
}

$('body').html(generateTable);