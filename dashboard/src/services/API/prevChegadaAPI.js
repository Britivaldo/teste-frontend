import endpoint from "./endpoint";

export async function fetchPrevChegada(value) {
  const res = await fetch(`${endpoint}/Previsao/Parada?codigoParada=${value}`)
  const res_1 = await res.json();
  const arr = res_1.p.l.map((el) => ({
    cl: el.cl,
    sl: el.sl,
    lt0: el.lt0,
    lt1: el.lt1,
    t: el.vs.map((e) => e.t)
  }) )
  
  return {
    hr: res_1.hr,
    l: [{ 
      vs: arr
    }]
  }
}