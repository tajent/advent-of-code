const assert = require('assert');
const { findOrbits, getAllOrbits } = require('../src/DaySix')
const fs = require('fs');

describe('Test paths with sample input', () => {
    it('prints number of orbits root to node', () => {
        const nodeMap = new Map()
        nodeMap.set('D', 'C')
        nodeMap.set('C', 'B')
        nodeMap.set('B', 'COM')
        assert.equal(findOrbits('D', nodeMap, 0), 3)
    })

    it('prints number of orbits root to node for direct', () => {
        const nodeMap = new Map()
        nodeMap.set('B', 'COM')
        assert.equal(findOrbits('B', nodeMap, 0), 1)
    })

    it('prints number of orbits root to node for all from L', () => {
        const nodeMap = new Map()
        nodeMap.set('B', 'COM')
        nodeMap.set('C', 'B')
        nodeMap.set('D', 'C')
        nodeMap.set('E', 'D')
        nodeMap.set('F', 'E')
        nodeMap.set('G', 'B')
        nodeMap.set('H', 'G')
        nodeMap.set('I', 'D')
        nodeMap.set('J', 'E')
        nodeMap.set('K', 'J')
        nodeMap.set('L', 'K')
        assert.equal(findOrbits('L', nodeMap, 0), 7)
    })

    it('find total number of orbits for all nodes', () => {
        const nodeMap = new Map()
        nodeMap.set('B', 'COM')
        nodeMap.set('C', 'B')
        nodeMap.set('D', 'C')
        nodeMap.set('E', 'D')
        nodeMap.set('F', 'E')
        nodeMap.set('G', 'B')
        nodeMap.set('H', 'G')
        nodeMap.set('I', 'D')
        nodeMap.set('J', 'E')
        nodeMap.set('K', 'J')
        nodeMap.set('L', 'K')
        assert.equal(getAllOrbits(nodeMap, 0), 42)
    })

    describe('Test orbit with actual input', () => {
        it('prints number of orbits root to node with real input', () => {
            
            const mapData = new Map()
            const textByLine = fs.readFileSync('orbits.txt').toString().split('\n');
            const createOrbitMap = (orbit) => {
                const split = orbit.split(')')
                mapData.set(split[1], split[0])
            }
            textByLine.forEach(createOrbitMap);
            console.log(getAllOrbits(mapData, 0))
        })
    })
})