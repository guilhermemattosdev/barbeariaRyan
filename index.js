// Manha
const manhaContent = document.getElementById('manhaContent');

if (manhaContent) {
    const avisoManha = document.createElement('p');
    avisoManha.textContent = 'Não existe agendamentos!';
    avisoManha.classList.add('spanHorario');

    if (manhaContent.childElementCount === 0) {
        manhaContent.appendChild(avisoManha);
    }
}

// Tarde
const tardeContent = document.getElementById('tardeContent');

if (tardeContent) {

    const avisoTarde = document.createElement('p');
    avisoTarde.textContent = 'Não existe agendamentos!';
    avisoTarde.classList.add('spanHorario');

    if (tardeContent.childElementCount === 0) {
        tardeContent.appendChild(avisoTarde);
    }
}

// Noite

const noiteContent = document.getElementById('noiteContent');

if (noiteContent) {

    const avisoNoite = document.createElement('p');
    avisoNoite.textContent = 'Não existe agendamentos!';
    avisoNoite.classList.add('spanHorario');

    if (noiteContent.childElementCount === 0) {
        noiteContent.appendChild(avisoNoite);
    }
}
