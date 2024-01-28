let data = document.querySelector('.input_info');
        let button = document.querySelector('#text_btn');
        button.onclick = function () {
        let login = document.querySelector('#login').value;
        let publ = document.querySelector('#publ').value;
        let sub = document.querySelector('#sub').value;
        let sc = document.querySelector('#sc').value;
        let inf1 = document.querySelector('#inf1').value;
        let inf2 = document.querySelector('#inf2').value;
        let histor1 = document.querySelector('#histor1').value;
        let histor2 = document.querySelector('#histor2').value;
        let histor3 = document.querySelector('#histor3').value;
        let histor4 = document.querySelector('#histor4').value;
        let histor5 = document.querySelector('#histor5').value;
        document.getElementById("divloc").textContent = login;
        document.getElementById("pk").textContent = publ;
        document.getElementById("subscribers").textContent = sub
        document.getElementById("subscriptions").textContent = sc;
        document.getElementById("info1").textContent = inf1;
        document.getElementById("info2").textContent = inf2;
        document.getElementById("his1").textContent = histor1;
        document.getElementById("his2").textContent = histor2;
        document.getElementById("his3").textContent = histor3;
        document.getElementById("his4").textContent = histor4;
        document.getElementById("his5").textContent = histor5;

    };

    function runAnimations() {
        document.querySelector("#id-9775").addEventListener("click", func_9775_7110);
      
        function func_9775_7110() {
          document.querySelector("#id-9775").classList.add("animationClass-9775");
          document.querySelector("#id-7117").classList.add("animationClass-null7117");
          document.querySelector("#id-7114").classList.add("animationClass-null7114");
          document
            .querySelector("#id-7114 > div:first-child")
            .classList.add("bgClass-7114");
          document.querySelector("#id-7116").classList.add("animationClass-null7116");
          document
            .querySelector("#id-7116 > div:first-child")
            .classList.add("bgClass-7116");
          document.querySelector("#id-9776").classList.add("animationClass-9776");
          document
            .querySelector("#id-9775")
            .removeEventListener("click", func_9775_7110);
        }
      }
      runAnimations();
      