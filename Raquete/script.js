
        window.onload = function () {
            iniciar();
            
            setInterval(principal, 1000 / 30); 
        }

            function iniciar(){
         folhaDesenho = document.getElementById("folha");
         areaDesenho = folhaDesenho.getContext("2d");

         larguraCampo = 600;
         alturaCampo = 500;
         espessuraRede = 5;         
         diametroBola = 10;

         espessuraRaquete = 11;
         alturaRaquete = 100;

         efeitoRaquete = 0.3;
         velocidadeJogador2 = 10;

         posicaoJogador1 = posicaoJogador2 = 40;
         posicaoBolaX = posicaoBolaY = 10;
         velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 10;
         pontuacaoJogador1 = pontuacaoJogador2 = 0;
                 
        folhaDesenho.addEventListener('mousemove', function (e) {
            posicaoJogador1 = e.clientY - alturaRaquete / 2;
        });
    }

        function principal() {
            desenhar();
            calcular(); 
        }

        function desenhar() {
            areaDesenho.fillStyle = '#1C1C1C';
            areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);
            areaDesenho.fillStyle = "#fff";
            areaDesenho.fillRect(larguraCampo / 2 - espessuraRede / 2, 0, espessuraRede, alturaCampo);

            //Desenho da Bola
            areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);

            // Raquete
            areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete);
            areaDesenho.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete);

            // Placar
            areaDesenho.fillText("Humano - " + pontuacaoJogador1 + " pontos", 100, 100);
            areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo - 200, 100);

        }


        function calcular() {
            
            
            posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
            posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

            // Lateral superior
            if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
                velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
            }

            //verifica lateral inferior
            if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
                velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
            }

            //verificar se o jogador2 fez um ponto
            if (posicaoBolaX < 0) {
                if (posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete) {
                    // rebater a bola 
                    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

                    var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
                    velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
                } else {
                    // Pontos pro jogador2
                    pontuacaoJogador2++;
                    continuar();

                  
                }
            }

            //verificar se o jogador 1 fez ponto
            if (posicaoBolaX > larguraCampo) {
                if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete) {
                    // rebater a bola 
                    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

                    var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
                    velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
                } else {
                    //pontos do jogador1
                    pontuacaoJogador1++;

                    // colocar no centro  

                    continuar();
                }
            }
            // atualiza a posição do jogador 2
            if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
                posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;
            } else {
                posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;

            }
        }


        function continuar(){
              // colocar bola no centro
              posicaoBolaX = larguraCampo / 2;
                    posicaoBolaY = larguraCampo / 2;
                    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
                    velocidadeBolaPosicaoY = 3;
        }