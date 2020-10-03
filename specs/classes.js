/* Classes */

describe("the class keyword", function(){

  it("can create a class", function(){

      class Employee {
        doWork() {
          return "complete!";
        }
        getName(){
          return "Giovanni"
        }
      }

      let e = new Employee();

      expect(e.doWork()).toBe("complete!");
      expect(e.getName()).toBe("Giovanni");

      // call allows you to invoke a function and pass an argument that you want set up for the context of that call 

      expect(Employee.prototype.doWork.call(e)).toBe("complete!");
  });

  it("can have a constructor", function(){

      class Employee {
      
        constructor(name){
          this._name = name;
        }

        doWork() {
          return "complete!";
        }
        getName(){
          return this._name;
        }
      }

      let e1 = new Employee("Giovanni");
      let e2 = new Employee("David");

      expect(e1.getName()).toBe("Giovanni");
      expect(e2.getName()).toBe("David");
  });

  it("can have getters and setters", function(){

      class Employee {
      
        constructor(name){
          this._name = name;
        }

        doWork() {
          return "complete!";
        }
        get name(){
          return this._name;
        }

        set name(newName){
          this._name = newName
        }
        
        get nameUpperCase(){
          return this._name.toUpperCase();
        }
      }

      let e1 = new Employee("Giovanni");
      let e2 = new Employee("David");

      expect(e1.name).toBe("Giovanni");
      expect(e2.name).toBe("David");

      e1.name = "Giovanni Efrain";
      expect(e1.name).toBe("Giovanni Efrain");

      expect(e1.nameUpperCase).toBe("GIOVANNI EFRAIN");

  });

  it("can have a super class", function(){
      class Person{
        
        constructor(name){
          this.name = name;
        }

        get name(){
          return this._name;
        }

        set name(newValue){
          if(newValue){
            this._name = newValue;
          }
        }

      }

      class Employee extends Person {

        doWork(){
          return `${this._name} is working`;
        }

      }

      let p1 = new Employee("Giovanni");
      let e1 = new Employee("David");

      expect(p1.name).toBe("Giovanni");
      expect(e1.name).toBe("David");

      expect(e1.doWork()).toBe("David is working");

  });

  it("can invoke super methods", function(){

      class Person{
        
        constructor(name){
          this.name = name;
        }

        get name(){
          return this._name;
        }

        set name(newValue){
          if(newValue){
            this._name = newValue;
          }
        }
      }

      class Employee extends Person {

        constructor(title, name){
          super(name);
          this._title = title;
        }

        get title() {
          return this._title;
        }

        doWork() {
          //super();
          return `${this._name} is working`;
        }

      }

      let e1 = new Employee("Ingeniero Civil","David");

      expect(e1.name).toBe("David");
      expect(e1.title).toBe("Ingeniero Civil");

  });


  it("can overide methods", function(){

      class Person{
        
        constructor(name){
          this.name = name;
        }

        get name(){
          return this._name;
        }

        set name(newValue){
          if(newValue){
            this._name = newValue;
          }
        }

        doWork(){
          return 'Free';
        }

        toString(){
          return this.name;
        }
      }

      class Employee extends Person {

        constructor(title, name){
          super(name);
          this._title = title;
        }

        get title() {
          return this._title;
        }

        doWork() {
          //return super.doWork() + 'Paid';
          return 'Paid'; 
        }

      }

      let e1 = new Employee("Ingeniero Civil","David");
      let p1 = new Person("Giovanni");

      // ----------------------------------

      expect(p1.doWork()).toBe("Free");
      expect(e1.doWork()).toBe("Paid");

      console.log("Person class:", p1.doWork());
      console.log("Employee class:", e1.doWork());

      // ----------------------------------

      expect(p1.toString()).toBe("Giovanni");
      expect(e1.toString()).toBe("David");

      // ----------------------------------

      let makeEveryoneWork = (...people) => {
        var res = [];
        for (var i = 0; i < people.length; i++){
          res.push(people[i].doWork());
        }
        return res;
      }

      console.log("makeEveryoneWork(e1, p1):", makeEveryoneWork(e1, p1));

      expect(makeEveryoneWork(e1, p1)).toEqual(["Paid","Free"]);

      // ----------------------------------
      // El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.

      let makeEveryoneWorkPerson = (...people) => {
        var res = [];
        for (var i = 0; i < people.length; i++){
          if(people[i] instanceof Person){   // Employee, Object
            // If it instaced on, then it will be ok
            /*
              Person (OK), 
              Employee (Expected $.length = 1 to equal 2.
                        Expected $[1] = undefined to equal 'Free'.)
              Object (TypeError: people[i].doWork is not a function)
             */
            res.push(people[i].doWork());
          }
        }
        return res;
      };

      console.log("makeEveryoneWorkPerson(e1, p1, {}):", makeEveryoneWorkPerson(e1, p1, {}));
      expect(makeEveryoneWorkPerson(e1, p1, {})).toEqual(["Paid","Free"]);

      /*
      La clase Object representa uno de los tipos de datos de Javascript. Es es usado para guardar una colección de datos definidos y entidades más complejas. Los objetos pueden ser creados utilzando el constructor Object() o la sintaxis literal de objeto. 

      El constructor Object crea una envoltura al objeto
       */

  });

});