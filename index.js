let emailReceiver = "firzaqdpalvian20@gmail.com";
let emailReceiverCC = "alfianfirzaq50@gmail.com";
function submitForm() {
  let isError = false;

  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let no = document.getElementById("input-phone").value;
  let subject = document.getElementById("choose-object").value;
  let message = document.getElementById("input-message").value;

  //Mengecek di Inspect terdapat/tidak element yang dibuat//

   console.log(name);
   console.log(email);
   console.log(no);
   console.log(subject);
   console.log(message);

  if (name == "") {
    alert("Please Enter Your Name!");
    isError = true;
  }
  if (email == "") {
    alert("Please Enter Your Email!");
    isError = true;
  }
  if (no == "") {
    alert("Please Enter Your No!");
    isError = true;
  }
  if (message == "") {
    alert("Please Enter Your Message!");    isError = true;
  }
  if (!isError) {
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?cc=${emailReceiverCC}&subject=${subject}&body=Hay, my name ${name}, ${subject}, ${message}`;
    a.click();
  }
  let dataObj = {
    name: name,
    email: email,
    nohp: no,
    subject: subject,
    message: message,
  };
  //console.log(dataObj);//
}
