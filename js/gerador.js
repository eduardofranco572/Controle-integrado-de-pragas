$(document).ready(() => {
    const titulos = [
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
        'Controle Integrado de Pragas',
    ]
    const descricao = [
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
        'Métodos eficientes de Controle Integrado de Pragas urbanas.',
    ]

    for (let j = 1; j < 9; j++) {
        let projeto = `
            <div class="card1" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div class="alinhacard1">
                    <div class="titulo-card">
                        <h1>${titulos[j - 1]}</h1>
                    </div>
                    <div class="descricao-card">
                        <p>${descricao[j - 1]}</p>
                    </div>
                </div>
            </div>

        `
        $('.cards').append(projeto);
    }
})

