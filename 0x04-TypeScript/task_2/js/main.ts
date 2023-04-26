//Task 5
interface EmployeeInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}
interface DirectorInterface extends EmployeeInterface{
  workDirectorTasks(): string;
}

interface TeacherInterface extends EmployeeInterface{
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
}

class Teacher implements TeacherInterface {
  workTeacherTasks(): string {
    return 'Getting to work';
  }
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
}
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}

//console.log(createEmployee(200));
//console.log(createEmployee(1000));
//console.log(createEmployee('$500'));

//Task 6
function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director  | Teacher) {
  if (isDirector(employee)) {
    (employee as Director).workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks();
  }
}

//  Task 7

type Subject = 'Math' | 'History';

function teachClass (todayClass: Subject): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  else {
    return 'Teaching History';
  }
}
