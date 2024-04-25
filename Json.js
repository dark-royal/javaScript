const json = '{"result": true, "count": 42}';
const obj  = JSON.parse(json);
console.log(JSON.stringify(obj));
console.log(obj.count);