class Person{
    constructor(name = 'Anonymous',age=0){
       this.name = name;
       this.age = age;
    }
 
    getGreeting(){
        return `Hi ${this.name} !`; 
    } 

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name,age,major){
       super(name,age);
       this.major =major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,hometown){
        super();
        this.hometown = hometown;
    }

    hasHometown(){
        return !!this.hometown;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHometown()){
            greeting+=` I'm visiting from ${this.hometown}.`;
        }
 
        return greeting;
    }
} 
 
const me = new Traveler('Bee',26,'Chiang mai');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

const p1 = new Traveler('Eric',34,'Berlin');
console.log(p1.getGreeting());