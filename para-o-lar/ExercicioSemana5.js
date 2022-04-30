class ParametrosConversao { // atribuindo os parametros da classe
    constructor(conversao) {
        this.conversao = conversao;
        this._RNA = []
    }


    conversor(DNA) {
        let InputDNA = DNA.split("")
        for (let bases of InputDNA) { // G vira C
            if (bases == "G") {
                bases = "C"
                this._RNA.push(bases)
            } else if (bases == "C") { // C vira G
                bases = "G"
                this._RNA.push(bases)
            } else if (bases == "T") { //T vira A
                bases = "A"
                this._RNA.push(bases)
            } else {
                bases = "U"
                this._RNA.push(bases)
            }
        } 
        let ResultadoRNA = this._RNA.join("")
        return ResultadoRNA
    }
}
const DNAteste = new ParametrosConversao("ATGCCGAAATTTGCG")
console.log(`A conversão para RNA será: ${DNAteste.conversor(DNAteste.conversao)}`)
DNAteste.conversor(DNAteste.conversao) // como estou chamando a função conversor