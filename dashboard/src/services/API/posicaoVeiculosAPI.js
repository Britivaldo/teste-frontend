import endpoint from "./endpoint";

export async function fetchPosicao() {
  const res = await fetch(`${endpoint}/Posicao`);
  const res_1 = await res.json();
  const arr = res_1.l;
  arr.splice(49, 1800);
  return {
    hr: res_1.hr,
    l: arr
  };
}

export async function fetchPosicaoLinha(value) {
    const res = await fetch(`${endpoint}/Posicao/Linha?codigoLinha=${value}`)
    const res_1 = await res.json();
    return {
      hr: res_1.hr,
      l: [{vs: res_1.vs}]
    }

}

export async function fetchPosicaoGaragem(value) {
    const res = await fetch(`${endpoint}/Posicao/Garagem?codigoEmpresa=${value}`)
    const res_1 = await res.json();
    return res_1
  
}