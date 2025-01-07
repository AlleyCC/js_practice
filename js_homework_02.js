const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const locations = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard Hippolyte-Marquès"
];
// 1.篩選出生於1500年代的發明家
function searchInventors(inventors){
  var arr = [];
  inventors.map(function (inventor, index, inventors){
    if (inventor.year >= 1500 || inventor.year < 1600){
      arr.push(inventor);
    }
  });
  return arr;
}
console.log(searchInventors(inventors));

// 2.建立包含發明家名字和姓氏的陣列
function nameOfInventors(inventors){
  var arr = [];
  inventors.map(function (inventor, index, inventors){
      arr.push(inventor.first + " "+inventor.last);
  });
  return arr;
}
console.log(nameOfInventors(inventors));

// 3.依照出生日期排序（從最老到最年輕）
function birthOrder(inventors){
  const sortedArr = inventors.sort((a, b) => a.year - b.year);
  const sortedInventorList = [];
  sortedArr.map(function (inventor, index, inventors){
    sortedInventorList.push({ 
      first: inventor.first, 
      last: inventor.last, 
      year: inventor.year
    })
  })
  return sortedInventorList;
}
console.log(birthOrder(inventors));

// 4.計算所有發明家的總壽命
function sumOfLife(inventors){
  var sum = 0;
  inventors.map(function (inventor, index, inventors){
      const age = inventor.passed - inventor.year;
      sum += age;
  });
  return sum;
}
console.log(sumOfLife(inventors))

// 5.列出巴黎所有包含 'de' 的大道名稱

function findLocation(locations){
  var searchResult = [];
  locations.forEach(location => {
    if (location.indexOf('de') !== -1){
      searchResult.push(location);
    }
    
  });
  return searchResult;
}
console.log(findLocation(locations));

// 6.依照壽命長短排序
function orderOfAge(inventors){
  const ageOfInventors = [];
  inventors.map(function (inventor, index, inventors){
    ageOfInventors.push({
      name: inventor.first + " " + inventor.last,
      age: (inventor.passed - inventor.year)
    });
  });
  const sortedAge = ageOfInventors.sort((a, b) => b.age - a.age);
  return sortedAge;
}
console.log(orderOfAge(inventors));

// 7.依照姓氏字母順序排序人名
function orderNameByLetters(people){
  const sortedPeople = people.sort((a, b) => {
    const lastNameA = a.split(', ')[0]; 
    const lastNameB = b.split(', ')[0];
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
  return sortedPeople;
}
console.log(orderNameByLetters(people))

// 8.計算資料實例數量
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
function countDataInstance(data){
  var map = new Map();
  data.forEach(item => {
    if (map.has(item)){
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  })
  var obj = Object.fromEntries(map);
  return obj;
}
console.log(countDataInstance(data));

