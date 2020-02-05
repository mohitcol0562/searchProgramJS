let criminals = new Map();
criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
criminals.set("Paul White Jr.", null);
criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
criminals.set("Redford Fort", "Red Strong, Red Fort");

function searchProgram(map, query) {
    var str = 'No Match';
    if (query && map.size && map.size > 0  ) {
        for (let entry of map.keys()) {
            if (map.get(entry) && map.get(entry).split(',').join('').toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                str = `name : ${entry}, Alias : ${map.get(entry)} `;
            }
            if (entry && entry.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return (`name : ${entry}, Alias : ${map.get(entry) ? map.get(entry) : 'N/A' } `);
            }
        }
    }
    return str;
}

console.log(searchProgram(criminals ,"paul"));
