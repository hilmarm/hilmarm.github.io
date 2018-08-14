var timetable6 = new Timetable();
timetable6.setScope(0,23)
timetable6.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
var renderer6 = new Timetable.Renderer(timetable6);
renderer6.draw('.timetable');
