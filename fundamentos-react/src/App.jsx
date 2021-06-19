import './App.css'
import React from 'react';


import ListaAlunos from './components/repeticao/ListaAlunos';
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega';


export default () => (
    <div className="App">
        <h1>Fundamentos React (Arrow) </h1>

        <div className="Cards">
            <Card titulo="#13 - Mega Sena" color="#8BC15E">
                <Mega qtde={8} />
            </Card>

            <Card titulo="#12 - Contador" color="#325dd5">
                <Contador numeroInicial={10} ></Contador>
            </Card>

            <Card titulo="#11- Componente Controlado" color="#1D7619">
                <Input></Input>
            </Card>

            <Card titulo="#10- Comunicação Indireta" color="#761919">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09- Comunicação Direta" color="#45B39D">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08- Renderização condicional" color="#1B4F72">
                <ParOuImpar numero={22} />
                <UsuarioInfo />
                {/* <UsuarioInfo usuario={{}}/>
                <UsuarioInfo /> */}
            </Card>

            <Card titulo="#07- Desafio Repetição" color="#C0392B">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06-Repetição" color="#4A235A">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05-Componente com filhos" color="#FF7F50">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Luis" />
                </Familia>
            </Card>


            <Card titulo="#04-Desafio Aleatorio" color="#D3670D">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#03-Fragmento" color="#C70039">
                <Fragmento />
            </Card>

            <Card titulo="#02-ComParametro" color="#FFBF00">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01-Primeiro Componente" color="#6495ED">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
);
