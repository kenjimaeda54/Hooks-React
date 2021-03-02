import { useEffect, useState } from 'react';

function App() {
   const[texto,setTexto] = useState([
  
   ]);  
  const[input,setInput]= useState('');

//aqui eu substituo o componentDidUptade. Toda vez que a tela e atualizada
//executa este componente
useEffect(()=>{
   const textoStorage= localStorage.getItem('texto');

   if(textoStorage){
     setTexto(JSON.parse(textoStorage));
   }
  return() =>{};  
 
},[]);


  //aqui substitui o componentDidmount//toda vez que sofrer uma mudança no texto
//atualiza automatico  
useEffect(()=>{ 
  localStorage.setItem('texto', JSON.stringify(texto));

}, [texto]);


function inserir(){
   setTexto([...texto,input]);
   setInput('');
}

  return ( 
    <div>    
     <nav>
       {texto.map(item=>(
          <li key={item}>{item}</li> 
       ))}
     </nav>
     <input type="text" value={input} onChange={(e=>{setInput(e.target.value)})}/>
     <button type="button" onClick={inserir} >Inserir novos dados</button>
    </div>
  );
}

export default App;
