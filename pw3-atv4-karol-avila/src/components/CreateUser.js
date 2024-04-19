// import { useState } from 'react';

// function App() {

//   const [sigla, setSigla] = useState("");

//   const [nome, setNome] = useState("");

//   const siglas = ['1ºDS', '2ºDS', '3ºDS'];

//   function cadastrarUsuario(event){
//     event.preventDefault();
//     // alert('TESTE DE SUBMIT!');
//     alert(`SIGLA: ${sigla} NOME: ${nome}`)
    
// }

//   // FUNÇÃO DE CADASTRAR
//   return (
//     <div className="App">
//       <form onSubmit={cadastrarUsuario} className='form'>

//         <h1>FORMULÁRIO</h1>

//         <select
//           value={sigla}
//           onChange={(event) => setSigla(event.target.value)}
//           required>
//           <option value="">Selecione a sigla</option>
//           {siglas.map((opcao) => (
//             <option key={opcao} value={opcao}>{opcao}</option>))}
//         </select>

//         <input
//         type='text'
//         placeholder="DIGITE SEU NOME AQUI"
//         required
//         value={nome}
//         onChange={(event)=>{setNome(event.target.value)}}/>
        
//         <button type='submit'>CADASTRAR</button>

//       </form>
//     </div>
//   );
// }

// export default App;