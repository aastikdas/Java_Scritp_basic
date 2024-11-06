console.log("hi")
    let call = function () {
        let t = new Date();

        let a = t.getHours();
        let b = t.getMinutes();
        let c = t.getSeconds();
        document.querySelector(".box1").textContent = a + "h";
        document.querySelector(".box2").textContent = b + "min";
        document.querySelector(".box3").textContent = c + "s";

        if(c==0)
        {
            console.log(c);
            let x=document.querySelector(".box2");
            x.classList.add("box2-anim");
            setTimeout(()=>x.classList.remove("box2-anim"),500);
        }
    }
    setInterval(call, 1000);