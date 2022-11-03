(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);

    // fetch('https://api.geoapify.com/v1/ipinfo?apiKey=1235c6c60b7344d8b21d3d8353f9b3d4', { 
    //   method: 'GET'
    // })
    // .then(function(response) { return response.json(); })
    // .then(function(json) {
    //   console.log(json)
    //   document.getElementById("ip-city-location-name").innerHTML = json.city.name;
    //   // use the json
    // });
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/logo/logo-2.png";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/logo/logo.png";
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // WOW active
  new WOW().init();

  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
  document.onreadystatechange = function () {
    myModal.show();
  };

  var form = document.getElementById("my-form");
  async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  const nama = document.getElementById("nama").value;
  const nohp = document.getElementById("nohp").value;
  console.log(nama)
  console.log(nohp)
  if (!nama || !nohp) {
    window.alert("Oops! Tolong periksa kembali data anda")
    return
  }
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
  }
  }).then(response => {
    if (response.ok) {
      const diagnosa = document.getElementById("diagnosa");
      const diagnosaValue = diagnosa.options[diagnosa.selectedIndex].value
      
      switch (diagnosaValue) {
        case('Diabetes'): 
          window.open("https://chat.whatsapp.com/GBj3rC24uDS25RUtU5lOu8");
          break;
        case('GERD'):
          window.open("https://chat.whatsapp.com/Cw3jwqUnZaxCkEbEOdMfdX");
          break;
      }
  
      myModal.hide();
      form.reset()
      window.alert("Terima kasih telah bergabung dengan group whatsapp kami")
    } else {
      response.json().then(data => {
      if (Object.hasOwn(data, 'errors')) {
        console.log(data["errors"].map(error => error["message"]).join(", "))
      } else {
        console.log("Oops! There was a problem submitting your form")
      }
    })
  }
  }).catch(error => {
    console.log("Oops! There was a problem submitting your form")
  });
  }
  form.addEventListener("submit", handleSubmit)

})();
