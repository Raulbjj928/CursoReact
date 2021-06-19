import React from 'react';
import alunos from '../../data/alunos'

export default props => {

    const alunojsx = alunos.map((aluno) => {
        return (
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} -{'>'} {aluno.nota}
            </li>
            )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {alunojsx}
            </ul>
        </div>
    )
}