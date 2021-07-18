function solution(list){
  let result = '';
  let buffer = [];
  
  for(let i = 0 ; i < list.length ; i++){
    if(list[i] + 1 == list[i + 1]) {
      buffer.push(list[i]);
    } else if (buffer.length > 0) {
      buffer.push(list[i]);
      if(buffer.length > 2) {
        result += buffer[0] + '-' + buffer[buffer.length - 1] + ',';
      } else if(buffer.length == 2) {
        result += buffer[0] + ',' + buffer[buffer.length - 1] + ',';
      } else {
        result += list[i] + ',';  
      }
      
      buffer = [];
    } else {
      result += list[i] + ',';  
    }
  }
  
  return result.substr(0, result.length - 1);
}
