 const hexkey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        const btn = document.getElementById("btn");
        const color = document.getElementById("color");

        btn.addEventListener("click", () => {
            let hexRengi = "#";
            for (let i = 0; i < 6; i++) {
                hexRengi += hexkey[Math.floor(Math.random() * hexkey.length)];
            }

            document.body.style.backgroundColor = hexRengi;
            color.textContent = hexRengi;
            
            
        });


