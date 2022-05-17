const employee = {
    name : "Lucy",
    streetAddress : "11 Broadway"
  };
  
  
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = employee;
    newObject[key]=value;
    return newObject;
  }
  
  function deleteFromEmployeeByKey(employee,key){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
  }