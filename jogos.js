var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Jogo.prototype.getGenero = function () {
        return this.genero;
    };
    Jogo.prototype.getClassificacaoEtaria = function () {
        return this.classificacaoEtaria;
    };
    Jogo.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Jogo.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Jogo.prototype.setClassificacaoEtaria = function (classificacaoEtaria) {
        this.classificacaoEtaria = classificacaoEtaria;
    };
    ///**** */
    ///public getDetalhes(): string;
    Jogo.prototype.getDetalhes = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", G\u00EAnero: ").concat(this.genero, ", Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtaria);
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(titulo, genero, classificacaoEtaria, plataforma) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.plataforma = plataforma;
        return _this;
    }
    JogoEletronico.prototype.getPlataforma = function () {
        return this.plataforma;
    };
    JogoEletronico.prototype.setPlataforma = function (plataforma) {
        this.plataforma = plataforma;
    };
    JogoEletronico.prototype.getDetalhes = function () {
        return "T\u00EDtulo: ".concat(this.getTitulo(), ", G\u00EAnero: ").concat(this.getGenero(), ", Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.getClassificacaoEtaria(), ", Plataforma: ").concat(this.plataforma);
    };
    return JogoEletronico;
}(Jogo));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = numeroDeJogadores;
        return _this;
    }
    JogoDeTabuleiro.prototype.getNumeroDeJogadores = function () {
        return this.numeroDeJogadores;
    };
    JogoDeTabuleiro.prototype.setNumeroDeJogadores = function (numeroDeJogadores) {
        this.numeroDeJogadores = numeroDeJogadores;
    };
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        return "T\u00EDtulo: ".concat(this.getTitulo(), ", G\u00EAnero: ").concat(this.getGenero(), ", Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.getClassificacaoEtaria(), ", N\u00FAmero de Jogadores: ").concat(this.numeroDeJogadores);
    };
    return JogoDeTabuleiro;
}(Jogo));
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = [];
    }
    BibliotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function (titulo) {
        this.jogos = this.jogos.filter(function (jogo) { return jogo.getTitulo() !== titulo; });
    };
    BibliotecaDeJogos.prototype.listarJogos = function () {
        return this.jogos.map(function (jogo) { return jogo.getDetalhes(); }).join('\n');
    };
    return BibliotecaDeJogos;
}());
var biblioteca = new BibliotecaDeJogos();
var jogoEletronico1 = new JogoEletronico("Doom", "Aventura", 12, "Atari");
var jogoEletronico2 = new JogoEletronico("GTA", "Ação", 18, "Xbox");
var jogoDeTabuleiro1 = new JogoDeTabuleiro("Xadrez", "Estratégia", 2, 2);
var jogoDeTabuleiro2 = new JogoDeTabuleiro("War", "Estratégia", 12, 6);
biblioteca.adicionarJogo(jogoEletronico1);
biblioteca.adicionarJogo(jogoEletronico2);
biblioteca.adicionarJogo(jogoDeTabuleiro1);
biblioteca.adicionarJogo(jogoDeTabuleiro2);
console.log(biblioteca.listarJogos());
