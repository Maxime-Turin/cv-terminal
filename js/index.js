const commandDetails = [
  {
    command: 'help',
    html: `<ul>
            <li><strong>a-propos</strong>: Qui suis-je ?</li>
            <li><strong>projets</strong>: Liste des projets sur lesquels j'ai travaillé</li>
            <li><strong>theme &#60option&#62</strong>: Changer le thème du terminal (light, dark, matrix)</li>
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
                    <a href=" https://oclock.io/formations/developpeur-web-fullstack-javascript">Ecole O'Clock</a> : Labellisée grande école du numérique
                </p>
                <p>mars 2022 - sept. 2022  </p>
            </li>
            <br>
            <li>
                <strong>Bac S</strong>
                <p>2014</p>
            </li>
        </ul>
    </div>
    <br>
    <h2>Expérience professionnelle</h2>
    <div class="cv__container">
        <p><strong>Amical Football - Projet de fin de formation</strong></p>
        <p>O'Clock - Août 2022 - Remote</p>
        <p>
            <ul>
            <li>- Conception </li>
            <li>- Gestion base de données PostgreSQL</li>
            <li>- API Node / Express</li>
            <li>- Déploiement</li>
        </ul>
        </p>
        <br>
        <p><strong>Opérateur de fabrication</strong></p>
        <p><a href="https://www.linkedin.com/company/edilians/">EDILIANS</a> . CDI</p>
        <p>nov. 2017 - mai 2021</p>
        <p>Bourgogne-Franche-Comté, France</p>
        <p>
            <ul>
            <li>- Rigueur : Contrôle qualité  à chaque étape de la fabrication du produit</li>
            <li>- Exigence : Remplacement du personnel laboratoire pendant congés pour les analyses normes NF</li>
            <li>- Flexibilité: Travail posté</li>
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
<p class="a-propos__text">Développeur fullstack avec une appétence pour les techniques backend, je recherche un poste, en France ou à l'étranger, qui me permettra d'améliorer mes compétences et d'en développer de nouvelles.  </p>
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
            <td>Lead Dev Backend</td>
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
    html: '<p><strong>options: </strong>light / matrix / dark</p>',
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

const keyCodeException = [
  9,
  16,
  17,
  18,
  19,
  20,
  27,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  44,
  45,
  91,
  92,
  93,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  144,
  145,
  173,
  174,
  175,
  181,
  182,
  183,
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
    console.log(event.keyCode);
    // Handle backspace
    if (event.keyCode === 13) {
      app.commandInstructionHandler(inputValue);
    } else if (event.keyCode === 8 && app.caractCount > 0) {
      app.caractCount -= 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    } else if (event.keyCode === 8 && app.caractCount === 0) {
      app.caractCount = 0;
    } else if (keyCodeException.includes(event.keyCode)) {
      return null;
    } else {
      // Move when typing
      app.caractCount += 1;
      caretPosition.style.transform = `translateX(${(app.caractCount * 0.6).toString()}rem)`;
    }
  },

  // Read the input and handle commands
  commandInstructionHandler(inputValue) {
    // remove spaces from the input value
    const command = inputValue.split(' ').join('').toLowerCase();
    // eslint-disable-next-line no-constant-condition
    if (command === 'themedark' || command === 'themelight' || command === 'themematrix') {
      document.querySelector('.terminal__body__input').remove();
      app.terminalHistory(inputValue);
      this.themeHandler(command);
    } else {
    // Create an history of the input
    // delete terminal__body__input and childs
      document.querySelector('.terminal__body__input').remove();

      // Draw terminalHistory
      app.terminalHistory(inputValue);

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
    }
    // Draw a new firstname@lastname > input
    app.caractCount = 0;
    app.init();
  },

  // Draw the command who has been typed
  terminalHistory(inputValue) {
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
  },

  // Close terminal and show a funny img
  closeTerminal() {
    document.querySelector('body').innerHTML = '';
    const memeImg = document.createElement('div');
    memeImg.classList.add('meme__img');
    document.querySelector('body').appendChild(memeImg);
  },

  themeHandler(theme) {
    const root = document.querySelector(':root');
    const logo = document.querySelector('.terminal__header__logo');
    const body = document.querySelector('body');
    switch (theme) {
      case 'themelight':
        body.style.background = 'no-repeat linear-gradient(132deg, rgba(247,135,100,1) 0%, rgba(9,9,121,1) 100%)';
        logo.style.background = 'url("../img/termimaxLogo.png") center no-repeat';
        logo.style.backgroundSize = 'cover';
        root.style.setProperty('--main', 'rgb(222, 221, 228, 0.3)');
        root.style.setProperty('--secondary', 'rgb(226, 216, 247, 0.3)');
        root.style.setProperty('--border', 'none');
        root.style.setProperty('--button-border', 'lightgray');
        root.style.setProperty('--name', '#736ced');
        root.style.setProperty('--history-color', '#A0D2DB');
        root.style.setProperty('--table-border', 'rgb(226, 216, 247, 0.3)');
        root.style.setProperty('--strong', '#F2E94E');
        root.style.setProperty('--terminal-title', 'white');
        root.style.setProperty('--reduce-button', 'green');
        root.style.setProperty('--enlarge-button', 'orangered');
        root.style.setProperty('--close-button', 'red');

        break;

      case 'themematrix':
        logo.style.background = 'url("../img/neo.png") center no-repeat';
        logo.style.backgroundSize = '2rem';
        body.style.background = 'url("../img/matrix.gif") center no-repeat';
        body.style.backgroundSize = 'cover';
        root.style.setProperty('--main', 'transparent');
        root.style.setProperty('--secondary', 'transparent');
        root.style.setProperty('--border', 'none');
        root.style.setProperty('--button-border', 'black');
        root.style.setProperty('--name', 'green');
        root.style.setProperty('--history-color', 'green');
        root.style.setProperty('--table-border', 'green');
        root.style.setProperty('--strong', 'green');
        root.style.setProperty('--terminal-title', 'green');
        root.style.setProperty('--reduce-button', 'black');
        root.style.setProperty('--enlarge-button', 'black');
        root.style.setProperty('--close-button', 'black');

        break;

      case 'themedark':
        body.style.background = 'no-repeat linear-gradient(132deg, rgba(247,135,100,1) 0%, rgba(9,9,121,1) 100%)';
        logo.style.background = 'url("../img/termimaxLogo.png") center no-repeat';
        logo.style.backgroundSize = 'cover';
        root.style.setProperty('--main', '#131b23');
        root.style.setProperty('--secondary', '#090d11');
        root.style.setProperty('--border', 'black');
        root.style.setProperty('--button-border', 'white');
        root.style.setProperty('--name', 'rgb(114, 114, 212)');
        root.style.setProperty('--history-color', '#c8553d');
        root.style.setProperty('--table-border', '#474747');
        root.style.setProperty('--strong', 'rgb(231, 64, 64)');
        root.style.setProperty('--terminal-title', 'white');
        root.style.setProperty('--reduce-button', 'green');
        root.style.setProperty('--enlarge-button', 'orangered');
        root.style.setProperty('--close-button', 'red');
        break;

      default:
        break;
    }
  },

  // Events list
  listeners() {
    // Event listener to add focus on terminal input
    document.querySelector('.terminal__body').addEventListener('click', app.makeCaretFocused);
    // Event listeners to remove focus on terminal input
    document.querySelector('.terminal__header').addEventListener('click', app.makeCaretUnfocused);
    // Event listener when typing in the terminal input
    document.querySelector('.command-input').addEventListener('keydown', app.typingInCommandInput);
    // Event listener to close terminal
    document.querySelector('.fake-button__close').addEventListener('click', app.closeTerminal);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
