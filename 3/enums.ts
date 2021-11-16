enum DayOfWeek {
	Sabti = 'Sabti',
	Axad = 'Axad',
	Isniin = 'Isniin',
	Salaasa = 'Salaasa',
	Arbaca = 'Arbaca',
	Khamiis = 'Khamiis',
	Jimce = 'Jimce'
}

function printDayOfWeek(day: DayOfWeek) {
	console.log('Today is', day);
}

printDayOfWeek(DayOfWeek.Isniin);