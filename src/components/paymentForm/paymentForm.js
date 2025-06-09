import axios from "axios"
import Image from "next/image"
import Swal from "sweetalert2"
import { reference } from "./reference"
import { data, cerKey } from "./consts"
import { useEffect, useState } from "react"
import visa from "../../assets/visaLogo.png"
import styles from "./paymentForm.module.css"
import mastercard from "../../assets/mastercard.png"
import { cypherData, dataToObject } from "./cyperData"

export const PaymentForm = () => {
  const [invoice, setInvoice] = useState(false);
  const [files, setFiles] = useState({
    donativo_facturacion: null,
    donativo_carta_motivo: null
  });
  const [paymentData, setPaymentData] = useState({
    ...data,
    ControlNumber: reference(456),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (evt) => {
    const { name, type, files: fileList, value } = evt.target;

    if (type === "file") {
      setFiles((prev) => ({
        ...prev,
        [name]: fileList[0]
      }));
    } else {
      setPaymentData((prev) => ({
        ...prev,
        [name]: name === "Amount" ? parseFloat(value).toFixed(2) : value,
        ControlNumber: reference(456),
      }));
    }
  };

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
    return localStorage.getItem('cyperData');
  };

  useEffect(() => {
    setTimeout(() => {
      Payment.setEnv("pro");
    }, 1000);
  }, []);

  const getCypherData = async (data) => {
    try {
      const resp = await axios.post(
        'https://ensewebsite-001-site1.ntempurl.com/aes/decrypt',
        data
      );
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendToServer = async () => {
    try {
      const formData = new FormData();
      formData.append("Amount", paymentData.Amount);
      formData.append("donativo_nombre", paymentData.donativo_nombre);
      formData.append("donativo_carta_motivo", files.donativo_carta_motivo);
      if (files.donativo_facturacion) {
        formData.append("donativo_facturacion", files.donativo_facturacion);
      }
      console.log(formData)
      const response = await axios.post(
        "https://himfg.edu.mx/server/controllers/donations/addDonation/index.php",
        formData,

      );
      console.log("Respuesta servidor:", response.data);
    } catch (err) {
      console.error("Error enviando los datos:", err);
    }
  };

  const startPayment = (evt) => {
    evt.preventDefault();
    showModal();
    if (Payment) {
      Payment.setEnv("pro");
      const xOBJ = cypherData(paymentData, cerKey);

      Payment.startPayment({
        Params: xOBJ,
        onClosed: function (res) {
          localStorage.removeItem('cyperData');
          console.log(res);
        },
        onError: function (res) {
          localStorage.removeItem('cyperData');
          console.log(res);
        },
        onSuccess: async function (res) {
          let cypherMessage;
          let cyperMessageToObject;

          if (res.data) {
            let datatoValue = {
              vi: dataToObject.vi,
              salt: dataToObject.salt,
              passPhrase: dataToObject.passPhrase,
              cypherData: res.data
            };
            cypherMessage = await getCypherData(datatoValue);
          }

          if (cypherMessage) {
            cyperMessageToObject = JSON.parse(cypherMessage.plainText);
            console.log('Objeto a evaluar', cyperMessageToObject);
            console.log(cyperMessageToObject.resultadoPayw);
          }

          if (cyperMessageToObject?.resultadoPayw === 'A') {
            await sendToServer();
            Swal.fire({
              title: "Su donación ha sido procesada con éxito",
              text: `Gracias por su apoyo`,
              icon: "success",
              showCloseButton: true,
              showConfirmButton: false,
              position: "center",
            });
          }
        },
        onCancel: function (res) {
          localStorage.removeItem('cyperData');
          Swal.fire({
            title: "Operación cancelada",
            icon: "error",
            showCloseButton: true,
            showConfirmButton: false,
            position: "center",
          });
        },
      });
    }
  };

  return (
    <>
      <div className={styles.paymentWrapper}>
        <form className={`${styles.paymentForm} boxShadow borderRadius`} onSubmit={startPayment}>
          <div className={`${styles.paymentImage} borderRadius`}>
            <img src='https://www.canchammx.com//packages/cancham/images/logo.png' />
          </div>
          <label>Nombre:</label>
          <input type='text' name='donativo_nombre' onChange={onChange} required />
          <label>Inserte la cantidad a donar:</label>
          <input type='number' name='Amount' required onChange={onChange} />
          <button className={styles.paymentButton}>
            <img src='https://himfg.edu.mx/archivos/graficos/banorte/BANORTE.jpg' />
            <span>Donar</span>
          </button>
        </form>
      </div>

      <div className={`${styles.debitCards} flexContainer`}>
        <figure><Image src={visa} alt='VISA' /></figure>
        <figure><Image src={mastercard} alt='Mastercard' /></figure>
      </div>
    </>
  );
};