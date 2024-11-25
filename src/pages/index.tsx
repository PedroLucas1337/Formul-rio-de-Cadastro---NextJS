import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("bg-green-100");
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto mt-8">
      <div className="mt-4">
        <div>
          <h1 className="text-xl font-bold">Contate-Nos</h1>
        </div>
        <br />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700"> Nome:</label>
            <input type="text" id="firstName" name="firstName" className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"/>
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Sobrenome: </label>
            <input type="text" id="lastName" name="lastName" className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"/>
          </div>
        </div>
        <br/>
        <div className="w-full">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700"> Endereço de E-Mail:</label>
            <input type="text" id="firstName" name="firstName" className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"/>
          </div>
          <br/>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Tipo de Consulta: </label>
          <br/>
          <div className="flex gap-9 justify-around">
          <div className="border-5 border black w-full  h-[50px] rounded-full focus:ring-2 focus:ring-gray-500 focus:outline-none">
            <input type="radio" id="option2" name="options" value="option1" className="ml-2 h-4 w-4 mt-4 text-blue-600 focus:ring-blue-500 border-2 border-black rounded-lg" style={{ accentColor: 'gray' }}/>
            <label htmlFor="option1" className="ml-2 text-sm font-medium text-gray-700">Inquerito Geral</label>
            </div>
            <div className="border-5 border black w-full h-[50px] rounded-full">
            <input type="radio" id="option2" name="options" value="option2" className="ml-2 h-4 w-4 mt-4 text-blue-600 focus:ring-blue-500 border-2 border-black rounded-lg" style={{ accentColor: 'gray' }}/>
            <label htmlFor="option2" className="ml-2 text-sm font-medium text-gray-700">Requisição de Suporte</label>
            </div>
            </div>
            <br />
            <div className="w-full">
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem:</label>
  <textarea id="message" name="message" className="h-[100px] mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none">
  </textarea>
</div>
<br />
<div className="flex items-center gap-2">
  <input type="checkbox" id="accept" name="accept" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
  <label htmlFor="accept" className="text-sm font-medium text-gray-700"> Me comprometo a ficar em contato com o time</label>
</div>
<br />
<button className="w-full bg-green-600 text-white rounded-lg h-[40px]">Enviar</button>
</div>
</div>
  );
}