const findOrbits = (object, mapData, path) => {
    if (!mapData.has(object)) {
        return path
    }
    if (mapData.get(object) === 'COM') {
        path.push(mapData.get(object))
        return path
}
    path.push(mapData.get(object))
    return findOrbits(mapData.get(object), mapData, path)
}

const getPathYOUtoSAN = (pathOne, pathTwo) => {
    let mergedPath = []
    for (let item of pathOne) {
        if (pathTwo.includes(item)) {
            mergedPath.push(item)
            break
        } else {
            mergedPath.push(item)
        }
        
    };
    const reversed = pathTwo.reverse()
    reversed.forEach(item => {
        if (!mergedPath.includes(item) && !pathOne.includes(item)) {
            mergedPath.push(item)
        }
    });
    return mergedPath
}

const getAllOrbits = (mapData, totalOrbits) => {
    for (let key of mapData.keys()) {
        totalOrbits += findOrbits(key, mapData, []).length
      }
    return totalOrbits
}

exports.findOrbits = findOrbits
exports.getAllOrbits = getAllOrbits
exports.getPathYOUtoSAN = getPathYOUtoSAN

