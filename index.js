
async function busca() {
  try{
    const resp = await fetch('http://localhost:4567/')
    const dados = await resp.json()
    console.log(dados)
    mostrar(dados)
  } catch (err) {
    console.log(err)
  }
}
busca()  

function mostrar(dados) {
  let li = '';
  for(let dado of dados) {
    li += `<li>${dado.username}</li>`
  }

  document.querySelector('ul').innerHTML = li
}


