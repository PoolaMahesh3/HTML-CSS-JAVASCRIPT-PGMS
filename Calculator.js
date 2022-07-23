function display(value) {
    document.getElementById("result").value += value;
   }
  
  function calculate(){
      try{
          result.value=eval(result.value);
      }
  
      catch(err){
          alert("Please Enter Valid Input");
          document.getElementById("result").value="";
      }
  }
  
  function clearScreen()
  {
      result.value="";
  
  }
  