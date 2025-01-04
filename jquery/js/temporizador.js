(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes);

        // Criando elementos HTML para o temporizador
        const horaDezena = $('<span class="digito">').html('0');
        const horaUnidade = $('<span class="digito">').html('0');
        const minutoDezena = $('<span class="digito">').html('0');
        const minutoUnidade = $('<span class="digito">').html('0');
        const segundoDezena = $('<span class="digito">').html('0');
        const segundoUnidade = $('<span class="digito">').html('0');

        const separadorHora = $('<span class="separador">').html(':');
        const separadorMinuto = $('<span class="separador">').html(':');
        const mensagem = $('<span class="mensagem">').html(opcoesFinais.mensagem);

        // Adicionando elementos ao container
        $(this).addClass('temporizador');
        $(this).append(
            horaDezena, 
            horaUnidade, 
            separadorHora, 
            minutoDezena, 
            minutoUnidade, 
            separadorMinuto, 
            segundoDezena, 
            segundoUnidade, 
            mensagem
        );

        // Regex para capturar o horário no formato hh:mm:ss
        const regex = /(\d{2}):(\d{2}):(\d{2})/;
        const horarioAlvo = regex.exec(opcoesFinais.horario);

        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();
            alvo.setHours(horarioAlvo[1]);
            alvo.setMinutes(horarioAlvo[2]);
            alvo.setSeconds(horarioAlvo[3]);

            const diferencaEmMili = alvo.getTime() - agora.getTime();

            if (diferencaEmMili >= 0) {
                const horas = Math.floor(diferencaEmMili / (1000 * 60 * 60));
                const minutos = Math.floor((diferencaEmMili % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferencaEmMili % (1000 * 60)) / 1000);

                horaDezena.html(String(horas).padStart(2, '0')[0]);
                horaUnidade.html(String(horas).padStart(2, '0')[1]);
                minutoDezena.html(String(minutos).padStart(2, '0')[0]);
                minutoUnidade.html(String(minutos).padStart(2, '0')[1]);
                segundoDezena.html(String(segundos).padStart(2, '0')[0]);
                segundoUnidade.html(String(segundos).padStart(2, '0')[1]);
            } else {
                clearInterval(temporizador);
                mensagem.html('Tempo Esgotado!');
            }
        }, 1000);

        return this;
    };
})(jQuery);
