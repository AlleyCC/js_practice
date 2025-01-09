const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
var date = new Date(); 
var currYear = date.getFullYear();
//1.是否至少有一個人年滿19歲？
function isAgeQualified(age, people){
  return people.some(person => (currYear - person.year) >= age);
}
console.log(isAgeQualified(19, people));
//2.是否所有人都年滿19歲？
function isAllAgeQualified(age, people){
  return filteredPeople = people.filter(person => (currYear - person.year) >= age);
}
console.log(isAllAgeQualified(19, people));
//1.找出 ID 為823423的評論
function searchComment(id, comments){
  const filteredComment = comments.filter(comment => comment.id == id);
  if (filteredComment.length < 1) throw new Error('no data matches');
  return filteredComment;
}
console.log(searchComment(823423, comments));

//2.刪除 ID 為823423的評論
function deleteComment(id, comments){
  return filteredComments = comments.filter(comment => comment.id !== id);
}
console.log(deleteComment(823423, comments));

