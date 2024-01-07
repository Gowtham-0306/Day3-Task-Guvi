let obj1 = {  
    name : "person1" ,
    age : 5
    
    };
    
    let obj2 = {  
        age : 5,
        name : "person1" 
        
        }; 
    
    var j = JSON.stringify(obj1, Object.keys(obj1).sort());
    var k =   JSON.stringify(obj2, Object.keys(obj2).sort());
    
    if (j ==k)
    {
        console.log('trueee it has equal properties');
    }
     else{
        console.log('no it does not');
     }
    
    