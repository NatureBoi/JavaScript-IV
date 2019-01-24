// CODE here for your Lambda Classes
class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    this.gender = att.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(att) {
    super(att);
    this.specialty = att.specialty;
    this.favLanguage = att.favLanguage;
    this.catchPhrase = att.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(att) {
    super(att);
    this.previousBackground = att.previousBackground;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
    this.grade = att.grade;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
    //.forEach(subject => console.log(`${subject}`));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(att) {
    super(att);
    this.gradClassName = att.gradClassName;
    this.favInstructor = att.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}
//------------------------------------------------------------------------------------------------------------------------------------------
const fred = new Person({
  name: "Fred",
  age: 35,
  location: "BedRock",
  gender: "Male"
});

const cam = new Instructor({
  name: "Cam",
  age: 30,
  location: "SanJose, CA",
  gender: "Male",
  specialty: "JavaScript",
  favLanguage: ["HTML 5", "CSS 3", "JavaScript"],
  catchPhrase: "Who needs a map"
});

const me = new Student({
  name: "Seun",
  age: 25,
  location: "Brockton",
  gender: "Male",
  previousBackground: "Systems Analyst",
  className: "FSWPT4",
  favSubjects: ["HTML 5", "CSS 3", "JavaScript", "React", "Sass"],
  grade: 100
});

const elvis = new ProjectManager({
  name: "Elvis",
  age: 28,
  location: "SanJose, CA",
  gender: "Male",
  specialty: "Judo Master",
  favLanguage: ["JavaScipt", "TypeScript", "React"],
  catchPhrase: "Is a leaf's only purpose to fall?",
  gradClassName: "CS14",
  favInstructor: "Dan"
});

console.log(fred.speak());

console.log(cam.speak());
console.log(cam.demo("JavaScript-IV"));
console.log(cam.grade(me, "React"));

console.log(me.speak());
console.log(me.listsSubjects());
console.log(me.PRAssignment("JavaScript-IV"));
console.log(me.sprintChallenge("PreProcessing-II"));

console.log(elvis.speak());
console.log(elvis.demo("React"));
console.log(elvis.grade(me, "React"));
console.log(elvis.standUp("Elvis-PT4"));
console.log(elvis.debugsCode(me, "Applied JavaScript"));
