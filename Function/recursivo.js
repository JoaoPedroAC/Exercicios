// É uma função que se pode se chamar repetidas vezes
// há um recurso no navegador que impede que a função seja chamada muitas vezes(umas 1k talvez)
function recursiva(max) {
    console.log(max);
    max++
	if (max >= 1000) return;
    /* está chamando a se mesma */
	recursiva(max);
}
recursiva(0);