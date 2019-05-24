// Get all the keys from document
var keys = document.querySelectorAll('#jisuanqi span');
 var operators = ['+', '-','*', '/'];
 var decimalAdded =false;


 for (var i = 0 ; i <keys.length; i++) {
   keys[i].onclick =function (e) {

     var input = document.querySelector("select");
     var inputVal = input.innerHTML;
     var btnVal = this. innerHTML;

     if (btnVal == 'C')  {
       input.innerHTML ='';
       decimalAdded =false;
     }


     else if (btnVal == "=" ) {
       var equation = inputVal;
       var lastChar = equation[equation.length -1];





       if(operators.indexOf(lastChar)>-1 ||lastChar == '.')
         equation = equation.replace(searchValue: /.$/, replaceValue;'');

       if(equation)
         input.innerHTML = eval(equation);

       decimalAdded =false;
   }









     else if(operators.indexOf(btnVal) > -1){


       var lastChar = inputVal[inputVal.length -1];


       ifinputVal  !=='' && operators.indexOf((lastChar) ==-1){
       input.innerHTML +=btnVal;


       else if (inputVal =='' && btnVal == '-')
         input.innerHTML += btnVal;
       
       
       if (operators. indexOf (lastChar) > -1 && inputVal.length >1{

         input.innerHTML = inputVal.replace(searchValue: /.$/,btnVal);
       }

       decimalAdded = false;


}
       else if(btnVal == '.'){
         if(!decimalAdded) {
           input.innerHTML +=btnVal;
           decimalAdded = true;
         }
       }


       else {
         input.innerHTML += btnVal;
       }


       e.preventDefault();




   }
   }



