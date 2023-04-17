/* create a function createReportObject
  Parameters":
    employeesList: Array
*/
export default function createReportObject(employeesList) {
  const all = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return all;
}
