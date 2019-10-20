// console.log(document.head);
// console.log(document.body);
// var name = 'Dupal';
// console.log(document.all[10]);

var workplacesIdEl = document.getElementById('workplaces');
console.log(workplacesIdEl);

var workplace = workplacesIdEl.getElementsByClassName('workplace');
var workplaceHeader = workplace[0].getElementsByClassName('workplace-heading')
// workplace[1].getElementsByClassName('workplace-heading')
// function getWorkplaceHeaders(){
//     for 
// }

var firstWorkplaceHeading = document.querySelector('.workplace:first-child');

console.log(firstWorkplaceHeading);
// console.log(workplaceHeader.getElementByTagName('h2'));