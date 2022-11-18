let souris = prompt("utilisation");

switch (souris){
    case 'souris':
        alert("j utilise une souris");
        break;
    case 'clavier':
        alert("j utilise un clavier");
        break;
    case 'ordinateur':
        alert("j utilise un ordinateur");
        break;
    case 'tapis':
        alert("j utilise un tapis");
        break;
    case 'imprimante':
        alert("j utilise une imprimante");
        break;
    case 'ondulateur':
        alert("j utilise un ondulateur");
        break;
    default:
        alert("accessoire inconnu");
}