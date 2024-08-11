//import exibeNome from "./funcoes.js"; quando for um único import
//import {exibeNome, exibeCarros} from "./funcoes.js"; para especificar quais funções
import * as func from "./funcoes.js";

let nome = "Lucas";
let carrosContainer = document.getElementById("carrosContainer");

/* Funções de console */
func.exibeNome(nome);

func.exibeCarros();

/* Função de DOM */
func.adicionaCarros(carrosContainer);