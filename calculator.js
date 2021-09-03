function calcul() {

  let out = '';
  let sumOne = document.getElementById('mas').value;
  let brut = document.getElementById('brutto').value;
  let conteiner = document.getElementById('tara').value;

  out +=`${brut - conteiner}` * `${sumOne}`;

  document.getElementById('out').textContent = out;
}

document.getElementById('calculate').onclick = calcul;



