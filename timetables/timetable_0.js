var timetable0 = new Timetable();
timetable0.setScope(0,23)
timetable0.addLocations(['Wintergarten', 'Hammerhalle', 'Dampfer']);
var renderer0 = new Timetable.Renderer(timetable0);
renderer0.draw('.timetable');
