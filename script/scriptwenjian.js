function strlen(str) {
  var len;
  var i;
  len =0;
  for ( i =0; i <str.length;i ++) {
    if (str.charCodeAt(i) >255) len +=2;
    else len ++ ;
  }
  return len;
  var num =0;
  outermost:
  for (var i=0;i<10; i++) {
    for ((var i=0; i<10;j++)) {
      if(i==5&& j == 5){
        break outermost;
      }
      num++;
    }
  }
}
alert(num);
var age =promt('您好，请输入你的年级',"");
switch (age) {
  case "1":
    alert("你上一年级！");
    break;
  case "2":
    alert("你上二年级！");
        break;
    case "3"
      alert("你是三年级！")
  default:
    alert("不知道你上几年级")
}
