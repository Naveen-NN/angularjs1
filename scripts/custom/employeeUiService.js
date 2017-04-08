function employeeUiService(employeeService, targetCtrlId ){

    this.service = employeeService;
    this.ctrlId = targetCtrlId; 

    this.displayEmployees = function  (){
        
        
    var table = [];

    table.push("<table class='table-normal'>");
    table.push("<tr>");
    table.push("<th>Id</th>");
    table.push("<th>Name</th>");
    table.push("<th>Salary</th>");
    table.push("</tr>");

    for(i=0; i<employees.length; i++){
        table.push("<tr>");
        table.push("<td>" + employees[i].id + "</td>");
        table.push("<td>" + employees[i].name + "</td>");
        table.push("<td>" + employees[i].salary + "</td>");
        table.push("</tr>");
    }    

    table.push("</table>");

    document.getElementById(target).innerHTML = table.join("");
    }
}
