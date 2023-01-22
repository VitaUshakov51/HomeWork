
document.querySelector('.weather__inner').style.display = 'none';

function myCity() {
    const select = document.querySelector('.select-city').value;
    if (select === 'spb') {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&lang=ru&appid=5fc11624a8ab73015fc091702d121b07')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data)
                document.querySelector('.weather').style.background = 'url(../image/spb.jpg)'
                document.querySelector('.weather').style.backgroundRepeat = 'no-repeat';
                document.querySelector('.weather').style.backgroundSize = 'cover';
                document.querySelector('.weather').style.backgroundPosition = '50% 50%';
                document.querySelector('.weather__inner').style.display = 'flex';
                document.querySelector('.weather__city').textContent = data.name;
                document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
                document.querySelector('.weather__disc').textContent = data.weather[0]['description'];
                document.querySelector('.weather__fitch').innerHTML = `<img src="https://cdn.icon-icons.com/icons2/33/PNG/96/overcast_cloudy_cloud_weather_2791.png">`;
            })
            .catch(function () {

            });
    }
    if (select === 'msk') {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&lang=ru&appid=5fc11624a8ab73015fc091702d121b07')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                document.querySelector('.weather').style.background = 'url(../image/msk.jpg)';
                document.querySelector('.weather').style.backgroundRepeat = 'no-repeat';
                document.querySelector('.weather').style.backgroundSize = 'cover';
                document.querySelector('.weather').style.backgroundPosition = '50% 50%';
                document.querySelector('.weather__inner').style.display = 'flex';
                document.querySelector('.weather__city').textContent = data.name;
                document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
                document.querySelector('.weather__disc').textContent = data.weather[0]['description'];
                document.querySelector('.weather__fitch').innerHTML = `<img src="https://cdn.icon-icons.com/icons2/33/PNG/96/overcast_cloudy_cloud_weather_2791.png">`;
            })
            .catch(function () {

            });

    }
    if (select === 'vlg') {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=472750&lang=ru&appid=5fc11624a8ab73015fc091702d121b07')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                document.querySelector('.weather').style.background = 'url(../image/vlg.webp)';
                document.querySelector('.weather').style.backgroundRepeat = 'no-repeat';
                document.querySelector('.weather').style.backgroundSize = 'cover';
                document.querySelector('.weather').style.backgroundPosition = '50% 50%';
                document.querySelector('.weather__inner').style.display = 'flex';
                document.querySelector('.weather__city').textContent = data.name;
                document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
                document.querySelector('.weather__disc').textContent = data.weather[0]['description'];
                document.querySelector('.weather__fitch').innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/7084/7084499.png">`;
            })
            .catch(function () {

            });

    }
}

document.querySelector('.select-city').onchange = myCity;
