let criminals = new Map();
criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
criminals.set("Paul White Jr.", null);
criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
criminals.set("Redford Fort", "Red Strong, Red Fort");

function searchProgram(map, query) {
    var str = 'No Match';
    if (query) {
        for (let entry of criminals.keys()) {
            if (criminals.get(entry) && criminals.get(entry).split(',').join('').toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                str = `name : ${entry}, Alias : ${criminals.get(entry)} `;
            }
            if (entry && entry.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return (`name : ${entry}, Alias : ${criminals.get(entry)} `);
            }
        }
    }

    return str;
}
