function appendToResult(value) {
  
  const resultField = document.getElementById("result");
  
 const lastChar = resultField.value.slice(-1); 

if ("+-*/%" .includes(value) && "+-*/%".includes(lastChar)){
  return; //Do nothing
}
  
  if (value == '.' && lastChar === '.'){
    return; // Do nothing
  }
   if (resultField.value === '0' && value !== "."){
     resultField.value = value;
   }
  else{
    resultField.value += value;
  }
}

function clearResult()
{
  document.getElementById("result").value = '0'
}
function deleteLastDigit()
{
  const resultField = document.getElementById("result");
  resultField.value = resultField.value.slice(0, -1);
  if (resultField.value === "")
  {
    resultField.value = "0";
  }   
}
function calculateResult()
{
  const resultField = document.getElementById("result");
  try
    {
      let expression = resultField.value.replace(/x/g, "*").replace(/÷/g, '/');
      resultField.value = eval(expression);
    }
  catch(error)
    {
      resultField.value = 'Error';
    }
}

document.addEventListener("keydown", function(event){
  const key = event.key;
  if (!isNaN(key))
    {
      appendToResult(key);
    }
  
  else if ("+-*/%.".includes(key))
    {
      appendToResult(key);
    }
  else if (key === "Enter")
    {
      event.preventDefault();
      calculateResult();
    }
  else if (key === "Backspace")
    {
      deleteLastDigit();
    }
  else if (key === "Escape")
    {
      clearResult();
    }
});
