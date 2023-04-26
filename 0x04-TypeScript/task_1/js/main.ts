interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [state: string]: any; 
}
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher1);

interface Directors extends Teacher {
  numberOfReporters: number;
}

const director2: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
  numberOfReports: 17,
};
console.log(director2);

function printTeacher(firstName: string, lastName: string): string {
  const intial: string = firstName.charAt(0);
  return `${initial}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: lastName): string;
}

interface StudentClassInt {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstractor {
  new (firstName: string, lastName): StudentClassInt;
}

class StudentClass implements StudentClassInt {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework () {
    return 'Currently working';
  }
  displayName () {
    return this._firstName;
  }  
}
