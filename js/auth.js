function handleLogin(event, currentRoom) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Les données sont chargées depuis data.js qui n'est inclus que dans les pages nécessaires
    const user = USERS.find(u => u.username === username && u.password === password);
    
    if (user) {
        if (user.username === "admin") {
            window.location.href = "AdminPanel.html";
        } else if (user.username === "maman") {
            window.location.href = "CasseurFLotteurs.html";
        } else if (user.username === "kevin" && currentRoom === "Cabane") {
            window.location.href = "Tirolienne.html";
        }
    } else {
        alert("Accès refusé");
    }
}