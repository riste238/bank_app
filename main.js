
let index = null;
window.addEventListener('beforeunload', save);

function save() {
  localStorage.db = JSON.stringify(db);
}

// BUTTONS
let accBtn = document.querySelector('#accBtn');
let addAccBtn = document.querySelector('#addAccBtn');
let editdeleteAccBtn = document.querySelector('#editdeleteAccBtn');

let sendeditAcc = document.querySelector('#sendeditAcc');

// VIEWS
let accountView = document.querySelector('#accountView');
let addAccountView = document.querySelector('#addAccountView');
let editDeleteView = document.querySelector('#editDeleteView');

let editAccountView = document.querySelector('#editAccountView');

// BODY
let mainBody = document.querySelector('#main-body');
let editMainBody = document.querySelector('#editMainBody');

// INPUTS
let idInput = document.querySelector('#idInput');
let nameInput = document.querySelector('#nameInput');
let depositInput = document.querySelector('#depositInput');
let cCardInput = document.querySelector('#cCardInput');

let eidInput = document.querySelector('#eidInput');
let enameInput = document.querySelector('#enameInput');
let edepositInput = document.querySelector('#edepositInput');
let ecCardInput = document.querySelector('#ecCardInput');

// major input form
let sendnewAcc = document.querySelector('#sendnewAcc');
sendnewAcc.addEventListener('click', sendnewMadeAccount);

// addEventListener
accBtn.addEventListener('click', viewAllAccounts);
addAccBtn.addEventListener('click', viewNewAccounts);
editdeleteAccBtn.addEventListener('click', viewEditDeleteAccount);

sendeditAcc.addEventListener('click', viewEditAccountView);

function viewAllAccounts() {
  addAccountView.style.display = 'none';
  editAccountView.style.display = 'none';
  accountView.style.display = 'block';
  editDeleteView.style.display = 'none';
  createTableAgain();
}
function viewNewAccounts() {
  accountView.style.display = 'none';
  editDeleteView.style.display = 'none';
  editAccountView.style.display = 'none';
  addAccountView.style.display = 'block';
}

function viewEditDeleteAccount() {
  createTableAgain();

  accountView.style.display = 'none';
  addAccountView.style.display = 'none';
  editAccountView.style.display = 'none';
  editDeleteView.style.display = 'block';
}
function viewEditAccountView() {
  let newObj = {
    id: eidInput.value,
    name: enameInput.value,
    deposit: edepositInput.value,
    cCard: ecCardInput.value
  };
  db[index] = newObj;
  createTable();
  viewAllAccounts();
}
function sendnewMadeAccount() {

  // let obj = {
  //     id : idInput.value,
  //     name: nameInput.value,
  //     deposit: depositInput.value,
  //     cCard: cCardInput.value
  // };
  db.push({
    id: idInput.value,
    name: nameInput.value,
    deposit: depositInput.value,
    cCard: cCardInput.value
  });
  createTable();
  viewAllAccounts();

  idInput.value = "";
  nameInput.value = "";
  depositInput.value = "";
  cCardInput.value = "";
}

createTableAgain();

function createTableAgain() {
  text = "";
  for (let i = 0; i < db.length; i++) {
    text += `
            <tr>
              <td>${db[i].id}</td>
              <td>${db[i].name}</td>
              <td>${db[i].deposit}</td>
              <td>${db[i].cCard}</td>
              <td><button id="${i}" class="btn btn-primary editBtns">Edit</button></td>
              <td><button data-index="${i}" class="btn btn-warning deleteBtns">Delete</button></td>
            </tr>       
         `
  }
  editMainBody.innerHTML = text;
  let editBtns = document.querySelectorAll('.editBtns');
  let deleteBtns = document.querySelectorAll('.deleteBtns');
  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', changeAccount);
    deleteBtns[i].addEventListener('click', deleteAccount);

  }
}

function changeAccount() {
  accountView.style.display = 'none';
  addAccountView.style.display = 'none';
  editDeleteView.style.display = 'none';
  editAccountView.style.display = 'block';

  index = this.id;
  let sameIndex = db[index];
  eidInput.value = sameIndex.id;
  enameInput.value = sameIndex.name;
  edepositInput.value = sameIndex.deposit;
  ecCardInput.value = sameIndex.cCard;

}


function deleteAccount() {

  let indexForDelete = this.getAttribute('data-index');
  db.findIndex(function (el) {
    return el.name === indexForDelete;
  })
  db.splice(indexForDelete, 1);
  createTable();
  viewAllAccounts();
}
createTable();
function createTable() {

  let text = "";
  for (let i = 0; i < db.length; i++) {
    text += `
       <tr>
       <td>${db[i].id}</td>
       <td>${db[i].name}</td>
       <td>${db[i].deposit}</td>
       <td>${db[i].cCard}</td>
       </tr> 
    `;
  }
  mainBody.innerHTML = text;
}

