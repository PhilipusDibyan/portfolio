document.getElementById("sendGmailButton").addEventListener("click", function () {
    const email = "philipusdibyan@gmail.com"; 
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent("Hi, I would like to contact you regarding...");
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, "_blank");
  });