namespace Subjects {
  class Subjects {
    private _teacher: Subjects.Teacher;
    constructor(teacher: Subjects.Teacher) {
      this._teacher = teacher;
    }

    set setTeacher(teacher:Subjects.Teacher) {
      this._teacher = teacher;
    }
  }
}
