alret ('I will tell you which person you are!');
let colors = prompt('Plese enter a primary colors');
let result = null;
switch(colors){
  case 'red':
    result = 'You may be a brave person';
    break;
  case 'yellow':
    result = 'You may be a happy person';
    break;
  case 'blue';
    result = 'You may be a cool person';
    break;
  default:
    result = 'This is not a primary color.';
    break;
}
alret ('result');
