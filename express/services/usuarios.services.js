const ProfessorModel = require("../models/usuario.model")

const professores = [
    {id:0, email:'jeff.uchoa82@gmail.com', senha:'12345678'}
]

let id = 1

class ProfessorService {

    static list() {
        return professores
    }

    static register(data) {
        let professor = new ProfessorModel(
            id++,
            data.email,
            data.senha
        )
        professores.push(professor)
        return professor
    }

    static retrieve(id) {
        for (let i = 0; i < professores.length; i++)
            if (professores[i].id == id) {
                return professores[i]
            }
        return null
    }

    static update(id,data) {
        for (let professor of professores) {
            if (professor.id == id) {
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.ai = data.ai
                return professor
            }
        }
        return null
    }

    static delete(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1);
                return true;
            }
        }
        return false
    }
}

module.exports = ProfessorService