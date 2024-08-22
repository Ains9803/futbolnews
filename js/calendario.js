const premierLeagueCalendar = [
    { jornada: 1, fecha: '2024-08-18', partido: 'Arsenal vs Chelsea' },
    { jornada: 2, fecha: '2024-08-25', partido: 'Manchester City vs Liverpool' },
    { jornada: 3, fecha: '2024-09-01', partido: 'Tottenham vs Manchester United' },
   
];

const laLigaCalendar = [
    { jornada: 1, fecha: '2024-08-18', partido: 'Real Madrid vs Barcelona' },
    { jornada: 2, fecha: '2024-08-25', partido: 'Atlético de Madrid vs Valencia' },
    { jornada: 3, fecha: '2024-09-01', partido: 'Sevilla vs Real Betis' },
   
];

const serieACalendar = [
    { jornada: 1, fecha: '2024-08-20', partido: 'Juventus vs AC Milan' },
    { jornada: 2, fecha: '2024-08-27', partido: 'Inter vs Napoli' },
    { jornada: 3, fecha: '2024-09-03', partido: 'Roma vs Lazio' },
   
];

const bundesligaCalendar = [
    { jornada: 1, fecha: '2024-08-18', partido: 'Bayern Múnich vs Borussia Dortmund' },
    { jornada: 2, fecha: '2024-08-25', partido: 'RB Leipzig vs Bayer Leverkusen' },
    { jornada: 3, fecha: '2024-09-01', partido: 'Borussia Mönchengladbach vs Schalke' },
   
];

const ligue1Calendar = [
    { jornada: 1, fecha: '2024-08-20', partido: 'Paris Saint-Germain vs Lille' },
    { jornada: 2, fecha: '2024-08-27', partido: 'Monaco vs Lyon' },
    { jornada: 3, fecha: '2024-09-03', partido: 'Marseille vs Nice' },
   
];

// Función para generar la tabla de partidos
function generateLeagueTable(league, sectionId) {
    const section = document.getElementById(sectionId);
    const table = document.createElement('table');
    
    // Crear encabezados de la tabla
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Jornada</th><th>Fecha</th><th>Partido</th>';
    table.appendChild(headerRow);
    
    league.forEach(match => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${match.jornada}</td><td>${match.fecha}</td><td>${match.partido}</td>`;
        table.appendChild(row);
    });
    
    section.appendChild(table);
}

// Generar las tablas de cada liga
generateLeagueTable(premierLeagueCalendar, 'premier-league-calendar');
generateLeagueTable(laLigaCalendar, 'la-liga-calendar');
generateLeagueTable(serieACalendar, 'serie-a-calendar');
generateLeagueTable(bundesligaCalendar, 'bundesliga-calendar');
generateLeagueTable(ligue1Calendar, 'ligue-1-calendar');