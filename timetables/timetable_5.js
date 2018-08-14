var timetable5 = new Timetable();
timetable5.setScope(0,23)
timetable5.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
var renderer5 = new Timetable.Renderer(timetable5);
renderer5.draw('.timetable');
