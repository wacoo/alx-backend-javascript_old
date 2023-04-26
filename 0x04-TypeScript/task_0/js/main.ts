interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = { firstName: 'John', lastName: 'Smith', age: 30, location: 'Addis Ababa'};
const student2 = {firstName: 'Yeshi', lastName: 'Tesema', age: '26', location: 'Cairo'};
const studentList: Array<Student> = [student1, student2];

const tbl = document.createElement('table');

for (const st of studentList) {
  const row = tbl.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = st.firstName;
  cell2.innerHTML = st.location;
}
