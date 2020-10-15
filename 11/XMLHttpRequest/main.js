    const btnEL = document.querySelector('.js-button');
    const inpEL = document.querySelector('.js-person_search');
    const api = "https://swapi.dev/api/";
    const namePerson = document.querySelector('#name');
    const heightPerson = document.querySelector('#height');
    const massPerson = document.querySelector('#mass');
    const birthYearPerson = document.querySelector('#birth_year');
    const filmsCountPerson = document.querySelector('#films_count');
    let url = api + "people/?search=";
    let request = new XMLHttpRequest();

    request.open("get", url);
    request.send();

    btnEL.addEventListener('click', function() {
        let response = JSON.parse(request.response);

        if (request.status !== 200) {
            alert(
              "Произошла ошибка при получении ответа от сервера:\n\n" +
                response.message
            );
            return;
          }
        
        if (response.count == 0) {
        alert("К сожалению, данные не получены по запросу: " + url);
        return;
        }

        for (i = 0; i < response.results.length; i++) {
            if (inpEL.value == response.results[i].name) {
                namePerson.textContent = response.results[i].name;
                heightPerson.textContent = response.results[i].height;
                massPerson.textContent = response.results[i].mass;
                birthYearPerson.textContent = response.results[i].birth_year;
                filmsCountPerson.textContent = response.results[i].films.length;
            }
        }

        if (namePerson.textContent == "") {
            alert('Ничего не найдено, попробуйте еще раз!')
        }
    });