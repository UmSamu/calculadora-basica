const input = document.getElementById("inputCalculadora");
        const historico = document.getElementById("historico-conteudo");

        semHistorico()

        function inserirValor(valor) {
            let valorAtual = input.value;

            if (["+", "-", "*", "/"].includes(valor)) {
                valorAtual += ` ${valor} `;
            } else {
                valorAtual += valor;
            }

            input.value = valorAtual;
        }

        function calcularValor() {
            let valorAntigo = input.value;

            let valorAtual = eval(valorAntigo);
            input.value = valorAtual;

            if (historico.children.length === 1 && historico.children[0].classList.contains("sem-historico")) {
                historico.innerHTML = "";
            }

            const historicoItem = document.createElement("div");
            historicoItem.classList.add("card");
            historicoItem.innerHTML = `
                <div class="horario"><span>${getCurrentDateTime()}</span></div>
                <div class="historico-calculo">${valorAntigo} =<br> ${input.value}</div>
            `;

            historico.appendChild(historicoItem);
            historico.scrollTop = historico.scrollHeight;
        }

        function getCurrentDateTime() {
            const now = new Date();
            // const date = now.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
            const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false });

            return `${time}`;
        }

        function handleKeyPress(event) {
            if (event.keyCode === 13) {
                calcularValor();
            }
        }

        function limparTudo() {
            input.value = "";
            historico.innerHTML = "";
        }

        function limparContaAtual() {
            input.value = "";
        }

        function semHistorico() {
            historico.innerHTML = "<div class='sem-historico'>Nenhum cálculo realizado :(</div>";
        }