/* Functional Programing */

describe("arrow functions", function(){
  "use strict";

  it("provide a compact syntax to define a function", function(){
    
      let add = (x,y) => {
          let temp = x + y;
          return temp;
        };
      let square = x => x * x ;
      let three = () => 3;

      expect( square(add(2,three())) ).toBe(25); 
  });
  
  it("can be used with array methods", function(){
    
    var numbers = [1,2,3,4];

    var sum = 0; 
    numbers.forEach(n => sum += n); 
    expect(sum).toBe(10);

    var doubled = numbers.map(n => n * 2 )
    expect(doubled).toEqual([2,4,6,8]);
  
  });
/*
  // Arrows and Asynch 
  it("lexically binds to 'this'", function(done){

    let self = this;
    
    self.name = "Scott";

    setTimeout(() => {
      expect(self.name).toBe("Scott");
      //console.log(self.name);
      done(); // Tell to Jasmine that this is finished 
    }, 15);
    //console.log(self.name);

  });
*/
});

// Itelables and Iterators
describe("iterables", function(){

  it("can work with iterators at a low level", function(){
      /*
      let sum = 0;
      let numbers = [1,2,3,4];

      // for loop
      sum = 0;
      for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
      }
      expect(sum).toBe(10);
      

      // for in 
      sum = 0;

      for(let i in numbers){
        sum += numbers[i];
      }
      expect(sum).toBe(10);
*/
      // iterator
      sum = 0;

      let iterator = numbers.values();
      let next = iterator.next();
      
      while(!next.done){
        sum += next.value;
        next = iterator.next();
      }
      expect(sum).toBe(10);

  });

});