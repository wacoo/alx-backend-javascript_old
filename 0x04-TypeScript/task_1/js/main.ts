interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [state: string]: any; 
}
/*
const teacher1: Teacher = {
  contract: false,
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};
console.log(teacher1);
*/
interface Directors extends Teacher {
  numberOfReports: number;
}

/*const director2: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director2);
*/
function printTeacher(firstName: string, lastName: string): string {
  const initial: string = firstName.charAt(0);
  return `${initial}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//console.log(printTeacher("Wonde", "Chosha"));

interface StudentClassInt {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstractor {
  new (firstName: string, lastName: string): StudentClassInt;
}

class StudentClass implements StudentClassInt {
  private _firstName: string;
  private _lastName: string;

  constructor (firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework () {
    return 'Currently working';
  }
  displayName () {
    return this._firstName;
  }  
}
