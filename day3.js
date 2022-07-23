"use strict";
const ps = require('prompt-sync');
const prompt = ps();
function EmployeeSystem(){
    console.log('Press 1 --> Show All Employees')
    console.log('Press 2 --> Add Employees')
    console.log('Press 3 --> Remove Employees')
    console.log('Press 4 --> Search Employees')
    console.log('Press -1 -->To Exit')
    console.log('---------------------------------')
    var option = prompt("Choose Options :");   //npm install prompt-sync
    option = Number(option)
    // console.log(typeof(option))
    var employees =[{
        name: "vasu",
        id : 1258,
        role: "devloper"
    },
    {
        name: "mahi",
        id : 1253,
        role: "Analyst"
    }
    ]

    
    if(option === 1){
        ShowEmployees()
    }else if(option === 2){
        AddEmployee()
    }else if(option === 3){
        RemoveEmployee()
    }else if(option === -1){
        Exit()
    }else if(option === 4){
        SearchEmployee()
    }else{
        console.log("please enter valid input")
    }
    

    function ShowEmployees(){
        console.log(employees)
        options()
    }
    function AddEmployee(){
        let emp = {
            name : prompt("Enter employee name :"),
            id : Number(prompt("Enter employee id")),
            role: prompt("Enter employee role")
        };
        console.log(emp);
        employees.push(emp);
        options()
    }
    function RemoveEmployee(){

    }
    function SearchEmployee(){
        let id = Number(prompt("Enter Id to search :"))
        let emp = employees.find(emp => emp.id === id)
        console.log(emp)
        options()
    }
    function Exit(){

    }

}
EmployeeSystem();
