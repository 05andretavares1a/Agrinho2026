function calcularSustentabilidade() {
    // 1. Pegar os valores que o usuário digitou/escolheu
    const areaPreservada = parseFloat(document.getElementById('area-preservada').value);
    const defensivos = document.getElementById('defensivos').value;
    const agua = document.getElementById('agua').value;

    // Validação simples para garantir que o usuário preencheu a área
    if (isNaN(areaPreservada)) {
        alert("Por favor, insira a porcentagem de área preservada.");
        return;
    }

    // 2. Lógica de cálculo da pontuação (Score)
    let score = 0;

    // Pontos pela área preservada (Código Florestal pede 20% na maioria das regiões)
    if (areaPreservada >= 20) {
        score += 40;
    } else {
        score += (areaPreservada * 2); // Pontuação proporcional se for menor que 20%
    }

    // Pontos pelo tipo de manejo de pragas
    if (defensivos === 'biologico') {
        score += 30;
    } else if (defensivos === 'moderado') {
        score += 15;
    } else {
        score += 0;
    }

    // Pontos pelo uso da água
    if (agua === 'gotejamento') {
        score += 30;
    } else {
        score += 5;
    }

    // Garantir que o score não passe de 100
    if (score > 100) score = 100;

    // 3. Definir o diagnóstico baseado no resultado
    let diagnostico = "";
    const resultadoDiv = document.getElementById('resultado');
    const scoreBox = document.getElementById('score-box');
    const diagnosticoP = document.getElementById('diagnostico');

    if (score >= 80) {
        diagnostico = "✨ Excelente! Sua propriedade representa o verdadeiro Agroforte e Sustentável. Alto uso de tecnologia e respeito aos limites ecológicos.";
        scoreBox.style.color = "#2e7d32";
    } else if (score >= 50) {
        diagnostico = "⚠️ Bom caminho, mas pode melhorar! O equilíbrio está próximo. Tente adotar mais bioinsumos ou melhorar a eficiência da sua irrigação para proteger o futuro do negócio.";
        scoreBox.style.color = "#ef6c00";
    } else {
        diagnostico = "🚨 Alerta de Desequilíbrio! A produção corre riscos a longo prazo devido à escassez de recursos. Considere aumentar a área verde e adotar sistemas de irrigação inteligente.";
        scoreBox.style.color = "#c62828";
    }

    // 4. Mostrar os resultados na tela
    scoreBox.innerText = Math.round(score) + "%";
    diagnosticoP.innerText = diagnostico;
    resultadoDiv.classList.remove('hidden'); // Remove a classe que escondia a div