/**
 * Retourne le texte en fonction de l'entier
 * @param {*} _number chiffre à traiter
 * @return {string} retourne la chaine de caractère
 */
function getText(_number) {
    let val = "";
    // Si nombre est divisible par 3
    val += _number % 3 === 0 ? "fizz" : "";
    // Si nombre est divisible par 5
    val += _number % 5 === 0 ? "buzz" : "";
    // On écrit le nombre si contenu est vide
    val += val === "" ? _number : "";

    return val;
}

/**
 * Retour la valeur que doit obtenir la checkbox principale
 * @param {*} listCheckBox liste des checkbox
 * @return {bool} retourne boolean sur statut all
 */
function controlCheckAll(listCheckBox) {
    const nbCheck = listCheckBox.filter(function (_check) {
        return _check.value;
    }
    ).length;

    if (nbCheck === listCheckBox.length) {
        return true;
    } else {
        return false;
    }
}
exports.getText = getText;
exports.controlCheckAll = controlCheckAll;
