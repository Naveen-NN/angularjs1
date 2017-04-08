function employeeService(){
    
    this.getEmployees = function  (){
      
       var employees  = [
                            { "id" :  1, "name" : "Rahul" ,  "salary" : 50000 },
                            { "id" :  2, "name" : "Rakshit" ,  "salary" : 60000 },
                            { "id" :  3, "name" : "Akshay" ,  "salary" : 42000 },
                            { "id" :  4, "name" : "Lingaraju" ,  "salary" : 84000 },
                            { "id" :  5, "name" : "Anand" ,  "salary" : 50000 },
                            { "id" :  6, "name" : "Prakash" ,  "salary" : 50000 }
                        ];

        return employees;
    }
}
