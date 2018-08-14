var timetable2 = new Timetable();
timetable2.setScope(0,23)
timetable2.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
timetable2.addEvent('CHRISTIAN VOLDSTAD ', 'Wintergarten', new Date(2015,7,17,8,00), new Date(2015,7,17,11,00), { url: '#' });
timetable2.addEvent('ESTHER DUIJN ', 'Dampfer', new Date(2015,7,17,7,00), new Date(2015,7,17,10,00), { url: '#' });
timetable2.addEvent('FREDEVERYTHING ', 'Wintergarten', new Date(2015,7,17,4,00), new Date(2015,7,17,8,00), { url: '#' });
timetable2.addEvent('HACHE ', 'Hammerhalle', new Date(2015,7,17,4,00), new Date(2015,7,17,7,00), { url: '#' });
timetable2.addEvent('KANT ', 'Wintergarten', new Date(2015,7,17,18,00), new Date(2015,7,17,22,00), { url: '#' });
timetable2.addEvent('MONTY ', 'Hammerhalle', new Date(2015,7,17,16,00), new Date(2015,7,17,20,00), { url: '#' });
timetable2.addEvent('ONNI ', 'Wintergarten', new Date(2015,7,17,11,00), new Date(2015,7,17,14,00), { url: '#' });
timetable2.addEvent('SAMMY D ', 'Wintergarten', new Date(2015,7,17,0,00), new Date(2015,7,17,4,00), { url: '#' });
timetable2.addEvent('TARA BROOKS ', 'Hammerhalle', new Date(2015,7,17,8,00), new Date(2015,7,17,12,00), { url: '#' });
var renderer2 = new Timetable.Renderer(timetable2);
renderer2.draw('.timetable');
