const commandDetails = [
  {
    command: 'help',
    html: `<ul>
            <li><strong>a-propos</strong>: Qui suis-je ?</li>
            <li><strong>projets</strong>: Liste des projets sur lesquelles j'ai travaillé</li>
            <li><strong>theme</strong>: Changer le thème du terminal</li>
            <li><strong>cv</strong>: Affiche le cv</li>
            <li><strong>clear</strong>: Nettoyer le terminal</li>
          </ul>`,
  },
  {
    command: 'cv',
    html: `<h2>Formation</h2>
    <div class="cv__container">
        <ul>
            <li>
                <strong> Formation Développeur Fullstack JavaScript : </strong>
                <p>
                    <a href=" https://oclock.io/formations/developpeur-web-fullstack-javascript">Ecole O'Clock</a>
                </p>
                <p>mars 2021 - sept. 2021  </p>
            </li>
            <li>
                <strong>Bac S</strong>
                <p>2014</p>
            </li>
        </ul>
    </div>
    <h2>Expérience professionnelle</h2>
    <div class="cv__container">
        <p><strong>Opérateur de fabrication</strong></p>
        <p><a href="https://www.linkedin.com/company/edilians/">EDILIANS</a> . CDI</p>
        <p>nov. 2017 - mai 2021</p>
        <p>Bourgogne-Franche-Comté, France</p>
        <p>
            <ul>
            <li>Rigueur : Contrôle qualité  à chaque étape de la fabrication du produit</li>
            <li>Exigence : Remplacement du personnel laboratoire pendant congés pour les analyses normes NF</li>
            <li>Flexibilité: Travail posté</li>
        </ul>
        </p>
    </div>`,
  },
  {
    command: 'a-propos',
    html: `<ul>
    <li><strong>Prenom:</strong> Maxime</li>
    <li><strong>Nom:</strong> Turin</li>
    <li><strong>Date de naissance:</strong> 15/02/1996</li>
    <li><strong>Stack:</strong> HTML/CSS - JS -  Node - SQL & NoSQL</li>
</ul>
<p class="a-propos__text">Développeur fullstack avec une appétence pour les techniques backend, je recherche un poste, en France ou à l'étranger, qui me permettra d'améliorer mes skills et d'en développer de nouveaux.  </p>
<ul class="a-propos__links">
    <li><a href="https://github.com/Maxime-Turin"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="github"></a></li>
    <li><a href="www.linkedin.com/in/maxime-turin"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"></a></li>
    <li><a href="mailto:maxime.turin@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail"></a></li>
</ul>`,
  },
  {
    command: 'projets',
    html: `<table>
    <thead>
        <th><strong>Nom du projet</strong></th>
        <th><strong>Rôle</strong></th>
        <th><strong>Lien(s)</strong></th>
        <th><strong>Etat</strong></th>
    </thead>
    <tbody>
        <tr>
            <td>Cv-Terminal</td>
            <td>All</td>
            <td><a href="https://github.com/Maxime-Turin/cv-terminal">Github</a></td>
            <td>Terminé</td>
        </tr>
        <tr>
            <td>Projet de fin d'étude</td>
            <td>Backend</td>
            <td>Coming soon</td>
            <td>En cours</td>
        </tr>
        <tr>
            <td>csv_to_pdf</td>
            <td>All</td>
            <td><a href="https://github.com/Maxime-Turin/csv_to_pdf">Github</a></td>
            <td>En cours</td>
        </tr>
        <tr>
            <td>search_administrator</td>
            <td>All</td>
            <td><a href="https://github.com/Maxime-Turin/search-administrator">Github</a></td>
            <td>En cours</td>
        </tr>
    </tbody>
</table>`,
  },
  {
    command: 'theme',
    html: '<p>Coming soon</p>',
  },
  {
    command: 'clear',
    html: '',
  },
  {
    command: 'rainbow',
    html: '',
  },
  {
    command: 'konamicode',
    html: '',
  },
  {
    command: 'music',
    html: '',
  },
];

const app = {
  caractCount: 0,

  init() {
    app.makeTerminalInput();
    app.makeCaretFocused();
    app.listeners();
  },

  // Draw 'maxime@turin' -> The input caret and the input
  makeTerminalInput() {
    // Create a div for placement
    const terminalBodyInput = document.createElement('div');
    terminalBodyInput.classList.add('terminal__body__input');
    document.querySelector('.terminal__body').appendChild(terminalBodyInput);
    // Create and place 'name'
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = 'maxime@turin:~$';
    terminalBodyInput.appendChild(name);
    // Create and place a div used for the next placements (see css)
    const commandInputPlacement = document.createElement('div');
    commandInputPlacement.classList.add('command-input-placement');
    terminalBodyInput.appendChild(commandInputPlacement);
    // Create and place the input caret
    const commandInputCaret = document.createElement('div');
    commandInputCaret.classList.add('command-input-caret');
    commandInputCaret.textContent = '_';
    commandInputPlacement.appendChild(commandInputCaret);
    // Create and place the command input
    const commandInput = document.createElement('input');
    commandInput.setAttribute('type', 'text');
    commandInput.classList.add('command-input');
    commandInputPlacement.appendChild(commandInput);
  },
  // Change caret function after focus => change terminal caret style after focus
  makeCaretFocused() {
    document.querySelector('.command-input').focus();
    document.querySelector('.command-input-caret').style.backgroundColor = 'white';
  },

  makeCaretUnfocused() {
    const commandInput = document.querySelector('.command-input').focus();
    if (document.hasFocus(commandInput)) {
      document.querySelector('.command-input-caret').style.backgroundColor = '#131b23';
    }
  },

  // Typing function : Move the caret when typing
  typingInCommandInput(event) {
    // TODO : add exeptions (suppr, maj, tab, etc)
    // Get caret div
    const caretPosition = document.querySelector('.command-input-caret');
    const inputValue = document.querySelector('.command-input').value;
    // Handle backspace
    if (event.keyCode === 13) {
      app.commandInstructionHandler(inputValue);
    } else if (event.code === 'Backspace' && app.caractCount > 0) {
      app.caractCount -= 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    } else if (event.code === 'Backspace' && app.caractCount === 0) {
      app.caractCount = 0;
    } else {
      // Move when typing
      app.caractCount += 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    }
  },

  // Read the input and handle commands
  commandInstructionHandler(inputValue) {
    // remove spaces from the input value
    const command = inputValue.split(' ').join('');
    // Create an history of the input
    // delete terminal__body__input and childs
    document.querySelector('.terminal__body__input').remove();
    // Create all needed elements
    const terminalHistory = document.createElement('div');
    terminalHistory.classList.add('terminal_history');
    const nameHistory = document.createElement('p');
    nameHistory.classList.add('name_history');
    nameHistory.textContent = 'maxime@turin:~$';
    const commandHistory = document.createElement('p');
    commandHistory.classList.add('command_history');
    commandHistory.textContent = inputValue;
    document.querySelector('.terminal__body').appendChild(terminalHistory);
    terminalHistory.appendChild(nameHistory);
    terminalHistory.appendChild(commandHistory);

    // Find what to print in a printList + default error
    const commandDetail = commandDetails.find((element) => element.command === command);
    const commandResult = document.createElement('div');
    if (!commandDetail) {
      const commandError = document.createElement('p');
      commandError.textContent = `${inputValue}: Command not found. Use 'help' to see available commands.`;
      document.querySelector('.terminal__body').appendChild(commandError);
    } else if (command === 'clear') {
      document.querySelector('.terminal__body').innerHTML = '';
    } else {
      commandResult.innerHTML = commandDetail.html;
      document.querySelector('.terminal__body').appendChild(commandResult);
    }

    // Draw a new firstname@lastname > input
    app.caractCount = 0;
    app.init();
  },

  // Events list
  listeners() {
    // Event listener to add focus on terminal input
    document.querySelector('.terminal__body').addEventListener('click', app.makeCaretFocused);
    // Event listeners to remove focus on terminal input
    document.querySelector('.terminal__header').addEventListener('click', app.makeCaretUnfocused);
    // Event listener when typing in the terminal input
    document.querySelector('.command-input').addEventListener('keydown', app.typingInCommandInput);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
