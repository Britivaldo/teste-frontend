import endpoint from "./endpoint";

export async function fetchBuscarParadas(value) {
  const res = await fetch(`${endpoint}/Parada/Buscar?termosBusca=${value}`);
  const res_1 = await res.json();
  return {
    l: [{vs: res_1}]
  }
}
