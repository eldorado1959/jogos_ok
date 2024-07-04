
abstract class Jogo {
    private titulo: string;
    private genero: string;
    private classificacaoEtaria: number;

    constructor(titulo: string, genero: string, classificacaoEtaria: number) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getClassificacaoEtaria(): number {
        return this.classificacaoEtaria;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setClassificacaoEtaria(classificacaoEtaria: number): void {
        this.classificacaoEtaria = classificacaoEtaria;
    }

    ///**** */
    ///public getDetalhes(): string;
       
    public getDetalhes(): string {
        return `Título: ${this.titulo}, Gênero: ${this.genero}, Classificação Etária: ${this.classificacaoEtaria}`;
    }

}


class JogoEletronico extends Jogo {
    private plataforma: string;

    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(titulo, genero, classificacaoEtaria);
        this.plataforma = plataforma;
    }

    public getPlataforma(): string {
        return this.plataforma;
    }

    public setPlataforma(plataforma: string): void {
        this.plataforma = plataforma;
    }

    public getDetalhes(): string {
        return `Título: ${this.getTitulo()}, Gênero: ${this.getGenero()}, Classificação Etária: ${this.getClassificacaoEtaria()}, Plataforma: ${this.plataforma}`;
    }
}


class JogoDeTabuleiro extends Jogo {
    private numeroDeJogadores: number;

    constructor(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(titulo, genero, classificacaoEtaria);
        this.numeroDeJogadores = numeroDeJogadores;
    }

    public getNumeroDeJogadores(): number {
        return this.numeroDeJogadores;
    }

    public setNumeroDeJogadores(numeroDeJogadores: number): void {
        this.numeroDeJogadores = numeroDeJogadores;
    }

    public getDetalhes(): string {
        return `Título: ${this.getTitulo()}, Gênero: ${this.getGenero()}, Classificação Etária: ${this.getClassificacaoEtaria()}, Número de Jogadores: ${this.numeroDeJogadores}`;
    }
}


class BibliotecaDeJogos {
    private jogos: Jogo[] = [];

    public adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo);
    }

    public removerJogo(titulo: string): void {
        this.jogos = this.jogos.filter(jogo => jogo.getTitulo() !== titulo);
    }

    public listarJogos(): string {
        return this.jogos.map(jogo => jogo.getDetalhes()).join('\n');
    }
}


const biblioteca = new BibliotecaDeJogos();

const jogoEletronico1 = new JogoEletronico("Doom", "Aventura", 12, "Atari");
const jogoEletronico2 = new JogoEletronico("GTA", "Ação", 18, "Xbox");

const jogoDeTabuleiro1 = new JogoDeTabuleiro("Xadrez", "Estratégia", 2, 2);
const jogoDeTabuleiro2 = new JogoDeTabuleiro("War", "Estratégia", 12, 6);

biblioteca.adicionarJogo(jogoEletronico1);
biblioteca.adicionarJogo(jogoEletronico2);
biblioteca.adicionarJogo(jogoDeTabuleiro1);
biblioteca.adicionarJogo(jogoDeTabuleiro2);

console.log(biblioteca.listarJogos());















