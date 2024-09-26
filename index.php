<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Forca</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <header class="cabecalho">
        <span class="cabecalho-pontuacao"><span class="pontuacao">0</span> pontos</span>
    </header>

    <main id="jogo">
        <div class="jogo-container">
            <section class="secao-jogo painel">
                <div class="tentativas">Chances: <span class="tentativas-restantes">5</span></div>
                <div class="palavrachave"></div>
                <div class="campo-dica"></div>
                <div class="resultado"></div>
            </section>
            <section class="secao-jogo teclado">
                <div class="linha-1">
                <?php
                    $alfabeto = range("A", "Z");
                    for($i=0;$i<13;$i++){?>
                        <button class="btn btn-letra" data-letra="<?=$alfabeto[$i]?>"><?=$alfabeto[$i]?></button>
                    <?php }
                ?>
                </div>
                <div class="linha-2">
                <?php
                    for($i;$i<26;$i++){?>
                        <button class="btn btn-letra" data-letra="<?=$alfabeto[$i]?>"><?=$alfabeto[$i]?></button>
                    <?php }
                ?>
                </div>
            </section>
            <button class="btn btn-reset btn-floating pulse"><i class="material-icons">autorenew</i></button>
        </div>
    </main>
    
    <script src="js/script.js"></script>
</body>
</html>