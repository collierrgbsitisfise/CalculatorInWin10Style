//define Class
function createCalculator() {
  this.curr = '0';

  this.added = '';

  this.oper = '';

  this.calc = function(val){
  switch(val) {
     case '+':
         this.curr = parseInt(this.curr) + parseInt(this.added);
         break;
     case '-':
         this.curr = parseInt(this.curr) - parseInt(this.added);
         break;
     case '*':
         this.curr = parseInt(this.curr) * parseInt(this.added);
         break;
     case '/':
         this.curr = parseInt(this.curr) / parseInt(this.added);
         break;
     case '^':
         this.curr = Math.pow(parseInt(this.curr) , parseInt(this.added));
         break;
    }
    calc.input.value = this.curr;
  };

  this.change = function(val){
    this.added += val;
    calc.input.value += val;
  };

  this.operation = function(val){
    this.added = '';
    this.oper = val;
    this.curr = calc.input.value;
    calc.input.value = '';
  };

  this.clear_all = function(){
    this.curr = '0';
    this.added = '';
    this.oper = '';
    calc.input.value = '';
  };
}


alert('ok');
var CALCULATOR = new createCalculator();
