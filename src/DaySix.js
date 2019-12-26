const findOrbits = (object, mapData, orbits) => {
    if (!mapData.has(object)) {
        return orbits
    }
    if (mapData.get(object) == 'COM') {
        orbits++
        return orbits
}
    orbits++
    return findOrbits(mapData.get(object), mapData, orbits)
}

const getAllOrbits = (mapData, totalOrbits) => {
    for (let key of mapData.keys()) {
        totalOrbits += findOrbits(key, mapData, 0)
      }
    return totalOrbits
}

exports.findOrbits = findOrbits
exports.getAllOrbits = getAllOrbits

