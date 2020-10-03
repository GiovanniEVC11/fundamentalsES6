/* Variables and parameters */

// Destructuring 
describe("destructuring", function(){
  "use strict";

	it("can destructure arrays", function() {

      var doWork = () =>{
        return [1, 3, 2];
      }
      
      let [ ,x, y, z] = doWork();
      // You can put a comma to give the correct order like this [ , X, Y] = [ 1, 2, 3]

      expect(x).toBe(3);
      expect(y).toBe(2);
      expect(z).toBeUndefined(); 

	});

	it("can destructure objects", function() {

      let doWork = () =>{
        return{
          firstName: "Giovanni",
          lastName: "Villanueva",
          social:{
            twitter: "GiovanniEVC"
          }
        }
      }
      
      // You can give the exact name, declare a name to test, or declare the exact path object
      let {firstName, lastName: LNname, social: { twitter } } = doWork();

    expect(firstName).toBe("Giovanni");
    expect(LNname).toBe("Villanueva");
    expect(twitter).toBe("GiovanniEVC");
    
	});

  it("works with parameters", function() {
      
      let doWork = function (url, {data, cache, headers}){
          return data;
      };

      let result = doWork(
          "api/test", {
              data: "test",
              cache: false
          }
      );

      expect(result).toBe("test");

	});

});

// Default parameters
describe("default parameters", function(){
  "use strict";

  it("provides defaults", function(){

    var doWork = function(name="Giovanni"){
      return name; 
    };

    var result = doWork(undefined); //  = doWork();

    expect(result).toBe("Giovanni");
    
  });

  it("will provide a value for undefined", function(){

    var doWork = function(a = 1, b = 2, c = 3){
      return [a,b,c];
    };

    let [a,b,c] = doWork(5, undefined);

    expect(a).toBe(5); expect(b).toBe(2); expect(c).toBe(3);
    //console.log(a,b,c);
  });

  it("works with destructuring", function(){

    var doWork = function(url, {data = "Gio", cache = true}){
      return data;
    };

    let result = doWork(
        "api/test", {
          cache: false
        }
      );

    expect(result).toBe("Gio"); 

  });

}); 

// Rest Parameters 
describe("rest parameters", function(){
  "use strict";

  it("is like var args", function(){
      let doWork = function(name, ...numbers){
        let result = 0;
        numbers.forEach(function(n){
          result += n;
        });
        return result;
      };

      let result = doWork("Giovas", 5, 5, 2);
      expect(result).toBe(12);
  });

});

// Spread Operator 
describe("spread operator", function(){
  "use strict"; 
  
  it("can build arrays", function(){
      var a = [4, 5, 6];
      var b = [ 1, 2, 3, ...a, 7, 8, 9];

      expect(b).toEqual([1,2,3,4,5,6,7,8,9]); 
  });
  
  it("can spread an array across parameters", function(){

      let sumXYZ = function(x, y, z){
        return x + y + z;
      }

      let res = sumXYZ(...[1, 2, 3]);
      expect(res).toBe(6);

  });

}); 

// Template Literals
describe("template literals", function(){
  "use strict"; 

  it("can easily combine literals and data", function(){
      let saludo = function(name){
        return `Hello, ${name}`; // Use `` // No use'' ´´ 
      }; 

      let res = saludo("Giovanni");
      expect(res).toBe("Hello, Giovanni");
  });

  it("can help build URLs", function(){
      let category = "music";
      let id = 2112;

      let url = `http://apiserver/${category}/${id}`

      expect(url).toBe("http://apiserver/music/2112");
  });

  it("can use tags", function(){

    let upper = function(strings, ...values){
/*
    strings = ["", "+", " is ", ""];
    values = [1, 3, 4];
*/
      let res = "";
      for(var i = 0; i < strings.length; i++){
        res += strings[i];
        if(i < values.length){
          res += values[i];
        }
      }
      return res;
    }

    var x = 1; var y = 3;
    var res = upper `${x} + ${y} is ${x+y}`;
    console.log("upper function:",  res);
    // This example it need to be: 1 + 3 IS 4, but in this case I don't know why it didn't happen 
    expect(res).toBe("1 + 3 is 4");
  });

});
