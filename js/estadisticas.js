const playersStats = [
    { name: "Lionel Messi", goals: 30, assists: 12, yellowCards: 3 },
    { name: "Cristiano Ronaldo", goals: 25, assists: 10, yellowCards: 2 },
    { name: "Kylian Mbappé", goals: 28, assists: 8, yellowCards: 1 },
];

const teamsStats = [
    { name: "Manchester City", points: 80, goalsScored: 75, goalsConceded: 30 },
    { name: "Real Madrid", points: 78, goalsScored: 70, goalsConceded: 35 },
    { name: "Bayern Múnich", points: 82, goalsScored: 80, goalsConceded: 28 },
];

const statsContainer = document.getElementById('stats-container');
const statTypeSelect = document.getElementById('stat-type');

// Función para cargar estadísticas
const loadStats = (type) => {
    statsContainer.innerHTML = ''; // Limpiar el contenedor de estadísticas
    let statsData = type === 'players' ? playersStats : teamsStats;

    const statsTable = document.createElement('div');
    statsTable.classList.add('stats-table');
    let tableHTML = '<table><thead><tr>';

    // Crear encabezados de la tabla
    if (type === 'players') {
        tableHTML += '<th>Jugador</th><th>Goles</th><th>Asistencias</th><th>Tarjetas Amarillas</th>';
    } else {
        tableHTML += '<th>Equipo</th><th>Puntos</th><th>Goles Marcados</th><th>Goles Concedidos</th>';
    }
    tableHTML += '</tr></thead><tbody>';

    // Llenar la tabla con datos
    statsData.forEach(stat => {
        tableHTML += '<tr>';
        if (type === 'players') {
            tableHTML += `<td>${stat.name}</td><td>${stat.goals}</td><td>${stat.assists}</td><td>${stat.yellowCards}</td>`;
        } else {
            tableHTML += `<td>${stat.name}</td><td>${stat.points}</td><td>${stat.goalsScored}</td><td>${stat.goalsConceded}</td>`;
        }
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table>';
    statsTable.innerHTML = tableHTML;
    statsContainer.appendChild(statsTable);
};

// Cargar estadísticas al inicio
loadStats('players');

// Evento para cambiar entre jugadores y equipos
statTypeSelect.addEventListener('change', (e) => {
    loadStats(e.target.value);
});