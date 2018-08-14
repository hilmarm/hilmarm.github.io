var timetable1 = new Timetable();
timetable1.setScope(0,23)
timetable1.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
var renderer1 = new Timetable.Renderer(timetable1);
renderer1.draw('.timetable');
