import endpoint from "./endpoint";

export async function fetchBuscarLinhas(value) {
  const res = await fetch(`${endpoint}/Linha/Buscar?termosBusca=${value}`);
  const res_1 = await res.json();
  res_1.splice(51, 1800);
  return [...res_1];
}
