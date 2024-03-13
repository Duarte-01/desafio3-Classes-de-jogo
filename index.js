class hero{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    definirNome(){
        console.log(`O nome do herói é ${this.nomeHeroi}`)
    }
    definirIdade(){
        console.log(`A idade do herói é ${this.idadeHeroi}`)
    }
    definirTipoHeroi(){
        console.log(`o herói é do tipo ${this.tipoHeroi}`)
    }
    atacar(){
        if (this.tipoHeroi === "guerreiro"){
            console.log(`O guerreiro ${this.nomeHeroi} atacou usando espada`)
        }else if (this.tipoHeroi === "mago"){
            console.log(`O mago ${this.nomeHeroi} atacou usando magia`)
        }else if (this.tipoHeroi === "monge"){
            console.log(`O monge ${this.nomeHeroi} atacou usando artes marciais`)
        }else if (this.tipoHeroi === "ninja"){
            console.log(`O ninja ${this.nomeHeroi} atacou usando shuriken`)
        }else{
            console.log("digite um tipo de herói válido")
        }
    }
}
let heroi = new hero("sasuke", 22, "ninja")
let novoHeroi = new hero ("merlim", 27, "mago")
heroi.definirNome() 
heroi.definirIdade()
heroi.definirTipoHeroi()
heroi.atacar()
novoHeroi.definirNome() 
novoHeroi.definirIdade()
novoHeroi.definirTipoHeroi()
novoHeroi.atacar()