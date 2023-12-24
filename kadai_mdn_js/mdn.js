//日付の定義
var dateName = new Date([2023, 8, 22]);


var year = dateName.getFullYear();
var month = dateName.getMonth() +1;
var day = dateName.getDate();

console.log(year+'年'+month+'月'+day+'日');
