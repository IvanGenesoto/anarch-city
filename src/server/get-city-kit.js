export const getCityKit = function () {

  const createCity = () => {
    const backgroundLayers = [
      {
        id: 1,
        blueprints: [],
        tag: 'canvas',
        width: 16000,
        height: 8000,
        depth: 4,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/far/above-top.png',
                width: 1024,
                height: 367
              }
            ]
          },
          {
            id: 2,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 4,
                tag: 'img',
                src: 'images/background/far/top/top.png',
                width: 1024,
                height: 260
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/far/top/top-pink-jumbotron-left.png',
                width: 1024,
                height: 260
              },
              {
                id: 3,
                prevalence: 2,
                tag: 'img',
                src: 'images/background/far/top/top-pink-jumbotron-right.png',
                width: 1024,
                height: 260
              }
            ]
          },
          {
            id: 3,
            rowCount: 48,
            variations: [
              {
                id: 1,
                prevalence: 3,
                tag: 'img',
                src: 'images/background/far/middle/middle.png',
                width: 1024,
                height: 134
              },
              {
                id: 2,
                prevalence: 2,
                tag: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-far-left.png',
                width: 1024,
                height: 134
              },
              {
                id: 3,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-left.png',
                width: 1024,
                height: 134
              },
              {
                id: 4,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-mid-left.png',
                width: 1024,
                height: 134
              },
              {
                id: 5,
                prevalence: 2,
                tag: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-middle.png',
                width: 1024,
                height: 134
              },
              {
                id: 6,
                prevalence: 2,
                tag: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-right.png',
                width: 1024,
                height: 134
              },
              {
                id: 7,
                prevalence: 3,
                tag: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-left.png',
                width: 1024,
                height: 134
              },
              {
                id: 8,
                prevalence: 2,
                tag: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-middle.png',
                width: 1024,
                height: 134
              },
              {
                id: 9,
                prevalence: 3,
                tag: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-right.png',
                width: 1024,
                height: 134
              }
            ]
          },
          {
            id: 4,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/far/bottom.png',
                width: 1024,
                height: 673
              }
            ]
          }
        ]
      },
      {
        id: 2,
        blueprints: [],
        y: 7050,
        tag: 'canvas',
        width: 24000,
        height: 8000,
        depth: 2,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                width: 1024,
                height: 768,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/middle.png'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        blueprints: [],
        y: 7232,
        tag: 'canvas',
        width: 32000,
        height: 8000,
        depth: 1,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                width: 1408,
                height: 768,
                prevalence: 1,
                tag: 'img',
                src: 'images/background/near.png'
              }
            ]
          }
        ]
      }
    ]
    const foregroundLayers = [
      {
        id: 1,
        blueprints: [],
        x: 0,
        y: 7456,
        width: 32000,
        height: 8000,
        depth: 0.5,
        tag: 'canvas',
        scale: 16,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/lamp/left.png',
                width: 144,
                height: 544
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/lamp/right.png',
                width: 144,
                height: 544
              }
            ]
          }
        ]
      },
      {
        id: 2,
        blueprints: [],
        x: 32000,
        y: 7456,
        width: 32000,
        height: 8000,
        depth: 0.5,
        tag: 'canvas',
        scale: 16,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/lamp/left.png',
                width: 144,
                height: 544
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/lamp/right.png',
                width: 144,
                height: 544
              }
            ]
          }
        ]
      },
      {
        id: 3,
        blueprints: [],
        x: 0,
        y: 6800,
        width: 32000,
        height: 8000,
        depth: 0.25,
        tag: 'canvas',
        scale: 64,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 3,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 4,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 5,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 6,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-down.png',
                width: 1248,
                height: 448
              },
              {
                id: 7,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 8,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-down.png',
                width: 1248,
                height: 448
              }
            ]
          }
        ]
      },
      {
        id: 4,
        blueprints: [],
        x: 32000,
        y: 6800,
        width: 32000,
        height: 8000,
        depth: 0.25,
        tag: 'canvas',
        scale: 64,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 3,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 4,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 5,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 6,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-down.png',
                width: 1248,
                height: 448
              },
              {
                id: 7,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 8,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-down.png',
                width: 1248,
                height: 448
              }
            ]
          }
        ]
      },
      {
        id: 5,
        blueprints: [],
        x: 64000,
        y: 6800,
        width: 32000,
        height: 8000,
        depth: 0.25,
        tag: 'canvas',
        scale: 64,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 3,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 4,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 5,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 6,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-down.png',
                width: 1248,
                height: 448
              },
              {
                id: 7,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 8,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-down.png',
                width: 1248,
                height: 448
              }
            ]
          }
        ]
      },
      {
        id: 6,
        blueprints: [],
        x: 96000,
        y: 6800,
        width: 32000,
        height: 8000,
        depth: 0.25,
        tag: 'canvas',
        scale: 64,
        sections: [
          {
            id: 1,
            rowCount: 1,
            variations: [
              {
                id: 1,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 2,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/up-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 3,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-left.png',
                width: 448,
                height: 1248
              },
              {
                id: 4,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/down-right.png',
                width: 448,
                height: 1248
              },
              {
                id: 5,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 6,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/left-down.png',
                width: 1248,
                height: 448
              },
              {
                id: 7,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-up.png',
                width: 1248,
                height: 448
              },
              {
                id: 8,
                prevalence: 1,
                tag: 'img',
                src: 'images/foreground/arrow/right-down.png',
                width: 1248,
                height: 448
              }
            ]
          }
        ]
      }
    ]
    const prototype = {
      width: 32000,
      height: 8000,
      backgroundLayers,
      foregroundLayers
    }
    return Object
      .entries(prototype)
      .reduce(appendAttribute, {})
  }

  const appendAttribute = (city, [key, value]) => {
    city[key] =
        Array.isArray(value) ? [...value]
      : value && value === 'object' ? {...value}
      : value
    return city
  }

  const assignElementIds = function (layer) {
    Object.entries(layer).forEach(assignElementId, {...this, layer})
  }

  const assignElementId = function ([key, value]) {
    const {state, layer} = this
    if (key === 'tag') layer.elementId = 's' + ++state.elementCount
    else if (Array.isArray(value)) value.forEach(assignElementIds, this)
    return state
  }

  const handleLayer = function (layer) {
    const {sections} = layer
    sections.forEach(handleSection, {...this, layer})
  }

  const handleSection = function (section, sectionIndex) {
    const {variations} = section
    const variationOptions = []
    variations.forEach(pushVariation, {variationOptions})
    pushBlueprints({...this, section, sectionIndex, variationOptions})
  }

  const pushVariation = function (variation, index) {
    const {variationOptions} = this
    let {prevalence} = variation
    while (prevalence) variationOptions.push({variation, index}) && --prevalence
  }

  const pushBlueprints = argumentation => {
    argumentation.rowsDrawn = 0
    startRow(argumentation)
  }

  const startRow = argumentation => {
    const {rowsDrawn, section} = argumentation
    const {rowCount} = section
    argumentation.x = 0
    argumentation.rowY = 0
    if (rowsDrawn < rowCount) pushBlueprint(argumentation)
  }

  const pushBlueprint = argumentation => {
    const {state, x, layer, variationOptions, sectionIndex, isForeground} = argumentation
    if (x >= layer.width) return callStartRow(argumentation)
    const float = Math.random() * variationOptions.length
    const index = Math.floor(float)
    const variationChoice = argumentation.variationChoice = variationOptions[index]
    const {variation, index: variationIndex} = variationChoice
    layer.y && (state.layerY = layer.y)
    const blueprint = {sectionIndex, variationIndex, x, y: state.layerY}
    layer.blueprints.push(blueprint)
    isForeground && handleIsForeground(argumentation)
    argumentation.x += variation.width
    argumentation.rowY = variation.height
    pushBlueprint(argumentation)
  }

  const callStartRow = argumentation => {
    const {state, rowY} = argumentation
    ++argumentation.rowsDrawn
    state.layerY += rowY
    startRow(argumentation)
  }

  const handleIsForeground = argumentation => {
    const {layer, variationChoice} = argumentation
    const {variation} = variationChoice
    if (layer.id < 3) return argumentation.x += 2000
    const float = Math.random() * (3000 - 1000) + 1000
    const gap = Math.floor(float)
    argumentation.x += gap + variation.width
  }

  const detectRowCollisions = function (rowId) {
    const {grid} = this
    const row = grid[rowId]
    Object.keys(row).forEach(detectSectionCollisions, {...this, row})
  }

  const detectSectionCollisions = function (sectionId) {
    const {row, entities} = this
    const section = row[sectionId]
    const entitiesToCompare = section.a
    const comparedEntities = section.b
    comparedEntities.length = 0
    while (entitiesToCompare.length) {
      const entityToCompareId = entitiesToCompare.shift()
      const entityToCompare = entities[entityToCompareId]
      entityToCompare && comparedEntities.forEach(pushCollisions, {...this, entityToCompare})
      entityToCompare && comparedEntities.push(entityToCompare)
    }
    return this
  }

  const pushCollisions = function (comparedEntityId) {
    const {collisionKit, entityToCompare, entities} = this
    const {collisions, interactions} = collisionKit
    const {vehicleIdsA, vehicleIdsB} = collisions
    const {characterIdsA, characterIdsB} = interactions
    const {x, y, width, height, type} = entityToCompare || {}
    const comparedEntity = entities[comparedEntityId]
    const {x: x_, y: y_, width: width_, height: height_, type: type_} = comparedEntity
    const didCollide =
         type === type_
      && x < x_ + width_
      && x + width > x_
      && y < y_ + height_
      && y + height > y_
    if (!didCollide) return this
    type === 'vehicle' && vehicleIdsA.push(entityToCompare)
    type === 'vehicle' && vehicleIdsB.push(comparedEntity)
    type === 'character' && characterIdsA.push(entityToCompare)
    type === 'character' && characterIdsB.push(comparedEntity)
    return this
  }

  var cityKit = {

    createCity: state => {
      const city = createCity()
      const {backgroundLayers, foregroundLayers} = city
      backgroundLayers.forEach(assignElementIds, {state})
      foregroundLayers.forEach(assignElementIds, {state})
      backgroundLayers.forEach(handleLayer, {state})
      foregroundLayers.forEach(handleLayer, {state, isForeground: true})
      return city
    },

    detectCollisions: (entities, grid) => {
      const collisionKit = {
        collisions: {vehicleIdsA: [], vehicleIdsB: []},
        interactions: {characterIdsA: [], characterIdsB: []}
      }
      const {length} = entities
      if (!length) return collisionKit
      grid && Object.keys(grid).forEach(detectRowCollisions, {grid, entities, collisionKit})
      return collisionKit
    }
  }

  return cityKit
}