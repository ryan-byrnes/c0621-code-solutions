var appId = 'c2713387';
var appKey = '4ef3b4c8226f2708aa7e3b8b470ed40e';

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log('respons:', xhr.response);
  console.log('status:', xhr.status);
});

xhr.open('GET', 'https://api.edamam.com/api/food-database/v2/parser?app_id=c2713387&app_key=4ef3b4c8226f2708aa7e3b8b470ed40e&ingr=chicken&nutrition-type=cooking');

xhr.send();
