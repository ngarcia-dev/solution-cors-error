const http = "http://";
const port = "80";
const domin = "store.company.com:";
const ruta = "/dir/page.html";

const url = http + domin + port + ruta;
console.log(url);
const compare = (a, b, c) => {
  if (a !== http) {
    console.log(a + b + c + " distinto protocolo");
    return false;
  }
  if (b !== domin) {
    console.log(a + b + c + " distinto host");
    return false;
  }
  if (c !== port) {
    console.log(a + b + c + " distinto puerto");
    return false;
  }
  console.log(a + b + c + " mismo origen");
  return true;
};

compare("http://", "store.company.com:", "80");
