// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYe4DaHqRUI3gsMy74XUk52j8ly8-Lmhk",
    authDomain: "calculator2000.firebaseapp.com",
    projectId: "calculator2000",
    storageBucket: "calculator2000.firebasestorage.app",
    messagingSenderId: "790614837892",
    appId: "1:790614837892:web:54406a765886218b7b90d1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let currentUser = null;

// Fonctions d'authentification
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            currentUser = userCredential.user;
            showUserInterface();
        })
        .catch(error => {
            alert("Erreur de connexion: " + error.message);
        });
}

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            currentUser = userCredential.user;
            showUserInterface();
        })
        .catch(error => {
            alert("Erreur d'inscription: " + error.message);
        });
}

function showUserInterface() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('user-interface').style.display = 'block';
    loadItems();
    loadRanking();
}

// Chargement des items
async function loadItems() {
    const itemsRef = db.collection('items');
    const snapshot = await itemsRef.get();
    
    const table = document.getElementById('item-table');
    // Construction du tableau avec les 45 items et leurs calculs
    
    snapshot.forEach(doc => {
        const item = doc.data();
        // Ajout des lignes au tableau
    });
}

// Calculateur de montant
function calculateItems() {
    const targetAmount = document.getElementById('target-amount').value;
    if (!targetAmount) return;
    
    // Logique de calcul selon les 45 items
}

// Classement des items
async function loadRanking() {
    // Récupération et tri des items par rentabilité
}

// Interface admin
function accessAdmin() {
    const code = document.getElementById('admin-code').value;
    if (code === 'AxoLePlusBeau') {
        document.getElementById('admin-interface').style.display = 'block';
        loadEditTable();
    } else {
        alert("Code incorrect !");
    }
}

// Édition des prix
async function loadEditTable() {
    // Remplir le tableau d'édition avec les 45 items
}