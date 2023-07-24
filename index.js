const input = document.querySelector("input");
const qrimage = document.querySelector("img");
const genratebtn= document.querySelector("#genratebtn");
const downloadbtn= document.querySelector("#downloadbtn");
genratebtn.addEventListener("click" ,()=>{

const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200×200&data=${input.value}`;

qrimage.src = qrcode;


})
downloadbtn.addEventListener("click", async () => {
    const response = await fetch(qrimage.src);
    const blob = await response.blob();
    const downloadlink = document.createElement("a");
    downloadlink.href = URL.createObjectURL(blob);
    downloadlink.download = "qrcode.jpg";
    downloadlink.click();
    
    })