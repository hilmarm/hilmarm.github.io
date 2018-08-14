var timetable4 = new Timetable();
timetable4.setScope(0,23)
timetable4.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
timetable4.addEvent('FIDELITY KASTROW ', 'Hammerhalle', new Date(2015,7,17,1,00), new Date(2015,7,17,5,00), { url: '#' });
timetable4.addEvent('GORGE ', 'Wintergarten', new Date(2015,7,17,2,00), new Date(2015,7,17,6,00), { url: '#' });
timetable4.addEvent('JAKOB SEIDENSTICKER &amp; MELINA ', 'Wintergarten', new Date(2015,7,17,22,00), new Date(2015,7,17,2,00), { url: '#' });
timetable4.addEvent('OLIVER DEUTSCHMANN ', 'Hammerhalle', new Date(2015,7,17,21,00), new Date(2015,7,17,1,00), { url: '#' });
timetable4.addEvent('SHLOMSEN ', 'Wintergarten', new Date(2015,7,17,6,00), new Date(2015,7,17,9,00), { url: '#' });
var renderer4 = new Timetable.Renderer(timetable4);
renderer4.draw('.timetable');
