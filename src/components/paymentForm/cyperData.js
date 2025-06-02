import { setItem } from "@/helpers"

let dataToObject
function cypherData(p, key) {
  var paramsE = {};
  if (paramsE !== undefined)
    $.extend(paramsE, {
      // Merchant Params
      merchantId: p.MerchantID,
      name: p.User,
      password: p.Password,
      mode: p.Mode,
      controlNumber: p.ControlNumber,
      terminalId: p.TerminalID,
      amount: p.Amount,
      merchantName: p.MerchantName,
      merchantCity: p.MerchantCity,
      lang: p.Language,
      customerRef1: p.CustomerRef1,
      customerRef2: p.CustomerRef2,
      customerRef3: p.CustomerRef3,
      customerRef4: p.CustomerRef4,
      customerRef5: p.CustomerRef5,
    });
  let ret = "";
  jQuery.ajax({
    //url: "https://localhost:7080/aes/cifradoconllave", // Desde Visual Studio 2022
    //url : 'http://localhost:5080/aes/cifradoconllave',  // Desde Ejecutable Cifrador.exe
    url: "https://cemesatelcyper-001-site1.qtempurl.com/aes/cifradoconllave",
    type: "POST",
    async: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    data: JSON.stringify({
      base64: window.btoa(JSON.stringify(paramsE)),
      pubKeyStrCert: key,
    }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      ret = response;
      if(ret.code === "200"){
        dataToObject = ret
        console.log('ret', dataToObject)
      }
      localStorage.setItem('cyperData', JSON.stringify(ret))
    },
  });
  return ret.data[0]
}
export { cypherData, dataToObject };
