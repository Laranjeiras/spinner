// ElementId = usado pra exibir o 'Loading' dentro do elemento desejado
function SpinnerOn(elementId)
{
    SpinnerOff();

    // Message = Caso queira exibir uma mensagem abaixo do 'Loading'
    var message = null;

    var element = document.getElementById(elementId);
    if (element === null)
        element = document.body;

    var divSpinner = document.createElement('div');
    divSpinner.className = 'spinner';
    divSpinner.id = 'spinner';
    var divBlob0 = document.createElement('div');
    divBlob0.className = 'blob blob-0';
    var divBlob1 = document.createElement('div');
    divBlob1.className = 'blob blob-1';
    var divBlob2 = document.createElement('div');
    divBlob2.className = 'blob blob-2';

    divSpinner.appendChild(divBlob0);
    divSpinner.appendChild(divBlob1);
    divSpinner.appendChild(divBlob2);

    if (message !== null) {
        var divMessage = document.createElement('div');
        divMessage.className = 'spinner-message';
        divMessage.innerHTML = message;
        divSpinner.appendChild(divMessage);
    }

    document.body.appendChild(divSpinner);

    element.appendChild(divSpinner);
}

function SpinnerOff() {
    var node = document.getElementById("spinner");    
    if (node !== null && node.parentNode) { node.parentNode.removeChild(node); }
}