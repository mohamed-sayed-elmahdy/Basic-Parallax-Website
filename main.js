function myFunction() {
    let x = document.getElementById('list')
    if (x.className === "mobile") {
        x.className = "responsive";
    } else {
      x.className = "mobile";
    }
  }