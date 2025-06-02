import Script from "next/script";
import { Container, PaymentForm, Title } from "@/components"

export default function () {
    return (
        <Container>
            <Title>Si deseas donar para beneficiar a nuestros pacientes, este es el lugar</Title>
            <PaymentForm />
            <Script
                src='https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js'
                strategy="beforeInteractive"
            />
            <Script
                src='https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js'
                strategy="beforeInteractive"
            />
        </Container>
    )
}
export const data = {
    MerchantID: "8878254",
    User: "prueba8878254",
    Password: "C0M53him$%",
    Mode: "PRD",
    TerminalID: "88782541",
    CustomerRef1: "",
    CustomerRef2: "",
    CustomerRef3: "",
    CustomerRef4: "",
    CustomerRef5: "",
    MerchantName: "HIMFG CURSOS",
    MerchantCity: "CIUDAD DE MEXICO CDMX",
    Language: "ES",
};

export const cerKey = `
  MIIGdDCCBVygAwIBAgITFwABTnQA5m6Udb1vlQABAAFOdDANBgkqhkiG9w0BAQsF
  ADB5MQswCQYDVQQGEwJNWDEZMBcGCgmSJomT8ixkARkWCWdmYmFub3J0ZTEeMBwG
  A1UEChMVU2VndXJpZGFkIGluZm9ybWF0aWNhMS8wLQYDVQQDEyZHcnVwbyBGaW5h
  bmNpZXJvIEJhbm9ydGUgQ0EgRW50ZXJwcmlzZTAeFw0yNTAyMjEyMDAwMzVaFw0y
  NjAyMjEyMDAwMzVaMIGoMQswCQYDVQQGEwJNWDELMAkGA1UECBMCREYxDzANBgNV
  BAcTBk1leGljbzErMCkGA1UEChMiR3J1cG8gRmluYW5jaWVybyBCYW5vcnRlIFNB
  QiBkZSBDVjEkMCIGA1UECxMbU2VndXJpZGFkIGRlIGxhIEluZm9ybWFjaW9uMSgw
  JgYDVQQDEx9tdWx0aWNvYnJvc2tleS51bml4LmJhbm9ydGUuY29tMIIBIjANBgkq
  hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvp69wp3Z6ZXCHS+OQ2k8H26dWwuF/cSv
  f37YT7NYfz4YvvXeahNv0CCStL5tATSoYj8MDKzNbwidXq/7e6JQpV1bcZjYXcjL
  qli0GrOaJ00wUdR3zFS5F85Ks7ycTW6wNl/n7X8QXFVAh+HJyO7yrKdopcPyNLfJ
  xBeXlvvuGfAKLJ7mCDdPN2UROg/35yLKil+VMB8OgF/KXEajmR0a+FiEe96+AkW3
  oWMslb9fXm8+Kc4IqXKTZQg52CHPlbSnY8vaBqZd0sH5W60NILFFXgNFXsQAHhUt
  njvcL+MY6NOHGeRYyrafP7Vwoog2kQiIUZafH/D1dWmB0r9qCv3VkQIDAQABo4IC
  wzCCAr8wMgYDVR0RBCswKYIKbG54c2lzYTAxcIIbbG54c2lzYTAxcC51bml4LmJh
  bm9ydGUuY29tMB0GA1UdDgQWBBR3lYj1Ic4B/MjmXVpM+fSAo3YxhTAfBgNVHSME
  GDAWgBTQBPbPr59ruX3bXiA0YK0zB6UM0zCB7QYDVR0fBIHlMIHiMIHfoIHcoIHZ
  hoHWbGRhcDovLy9DTj1HcnVwbyUyMEZpbmFuY2llcm8lMjBCYW5vcnRlJTIwQ0El
  MjBFbnRlcnByaXNlLENOPUNBLUJBTk9SVEUtUkEsQ049Q0RQLENOPVB1YmxpYyUy
  MEtleSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZpZ3VyYXRpb24sREM9
  Z2ZiYW5vcnRlP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RD
  bGFzcz1jUkxEaXN0cmlidXRpb25Qb2ludDCB2wYIKwYBBQUHAQEEgc4wgcswgcgG
  CCsGAQUFBzAChoG7bGRhcDovLy9DTj1HcnVwbyUyMEZpbmFuY2llcm8lMjBCYW5v
  cnRlJTIwQ0ElMjBFbnRlcnByaXNlLENOPUFJQSxDTj1QdWJsaWMlMjBLZXklMjBT
  ZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPWdmYmFub3J0
  ZT9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1
  dGhvcml0eTALBgNVHQ8EBAMCBaAwPAYJKwYBBAGCNxUHBC8wLQYlKwYBBAGCNxUI
  g+v5BoK1j0eNkROCp58GguHddCKCxphfgtj9DwIBZAIBEjATBgNVHSUEDDAKBggr
  BgEFBQcDATAbBgkrBgEEAYI3FQoEDjAMMAoGCCsGAQUFBwMBMA0GCSqGSIb3DQEB
  CwUAA4IBAQBicj3sAYJZTkjNo+HcqhPGDSA8vJ3rTEvDDqcaNiWlfPFaXLNBxfk2
  aKuV6Ibf1nSE9lfrpqVz+RwKCrtc4jXx9lO6BkgAuG7H2h6Tg53TbYPUJnr5ynwi
  jRlOacsJFvj5c6MLoM0Jrdw9ozd8UVjbqHTWo9iClPOGm9GX3FSc21bUWkSlp/Re
  MeWXKhMhCtKdWPqQGYIW3skpUYzhgGTDdEaUvXFYK79Pud7mxS1761P1qt7s1Axo
  61dvEM9gwtPuqcARkrwMroAqUhPmda71sndN3Z1CAh1khviyowwA2dZdxdT8ZqZy
  01+dEnuNx6BtEq8aht+M2u01BOXiqj1U
  `

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
}

const formButton = {
    alignItems: 'center',
    background: '#fb0424',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    padding: '0 1rem',
    textAlign: 'center'
}

const formImage = {
    width: '2rem'
}