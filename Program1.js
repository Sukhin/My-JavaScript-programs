let userName = prompt('Кто там ?','');

if(userName == 'Админ') {

  let parol = prompt('Какой пароль:', '');
  
  if(parol=='Я главный') {
  
  alert('Здравствуйте!');
}
  else if (parol==''||parol==null){
  
  alert('Отменено');
}
  else {
  alert ('Неверно');
  }
}
  else if(userName=='' || userName==null){
  alert('Отменено');
}
  else {
  alert('Я Вас не знаю');
  }
