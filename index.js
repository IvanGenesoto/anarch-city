var express = require('express')
var app = express()
var http = require('http')
var server = http.Server(app)
var socket = require('socket.io')
var io = socket(server)

var id = 0
var playerID = 0
// var stopBroadcasting = false

var broadcasts = {
  '1': {}
}

var players = {}

var areas = {
  '1': {
    timestamp: 0,
    id: 1,
    name: 'District 1',
    width: 8000,
    height: 8000,
    element: 'canvas',
    backgrounds: {
      '1': {
        x: 0,
        y: 0,
        element: 'canvas',
        width: 8000,
        height: 8000,
        sections: {
          '1': {
            rows: 1,
            options: {
              '1': {
                x: 0,
                y: 0,
                prevalence: 1,
                element: 'img',
                src: 'images/background/far/above-top.png',
                width: 1024,
                height: 367
              }
            }
          },
          '2': {
            rows: 1,
            options: {
              '1': {
                x: 0,
                y: 0,
                prevalence: 4,
                element: 'img',
                src: 'images/background/far/top/top.png',
                width: 1024,
                height: 260
              },
              '2': {
                x: 0,
                y: 0,
                prevalence: 1,
                element: 'img',
                src: 'images/background/far/top/top-pink-jumbotron-left.png',
                width: 1024,
                height: 260
              },
              '3': {
                x: 0,
                y: 0,
                prevalence: 2,
                element: 'img',
                src: 'images/background/far/top/top-pink-jumbotron-right.png',
                width: 1024,
                height: 260
              }
            }
          },
          section3: {
            rows: 50,
            options: {
              '1': {
                x: 0,
                y: 0,
                prevalence: 3,
                element: 'img',
                src: 'images/background/far/middle/middle.png',
                width: 1024,
                height: 134
              },
              '2': {
                x: 0,
                y: 0,
                prevalence: 2,
                element: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-far-left.png',
                width: 1024,
                height: 134
              },
              '3': {
                x: 0,
                y: 0,
                prevalence: 1,
                element: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-left.png',
                width: 1024,
                height: 134
              },
              '4': {
                x: 0,
                y: 0,
                prevalence: 1,
                element: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-mid-left.png',
                width: 1024,
                height: 134
              },
              '5': {
                x: 0,
                y: 0,
                prevalence: 2,
                element: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-middle.png',
                width: 1024,
                height: 134
              },
              '6': {
                x: 0,
                y: 0,
                prevalence: 2,
                element: 'img',
                src: 'images/background/far/middle/middle-pink-jumbotron-right.png',
                width: 1024,
                height: 134
              },
              '7': {
                x: 0,
                y: 0,
                prevalence: 3,
                element: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-left.png',
                width: 1024,
                height: 134
              },
              '8': {
                x: 0,
                y: 0,
                prevalence: 2,
                element: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-middle.png',
                width: 1024,
                height: 134
              },
              '9': {
                x: 0,
                y: 0,
                prevalence: 3,
                element: 'img',
                src: 'images/background/far/middle/middle-blue-jumbotron-right.png',
                width: 1024,
                height: 134
              }
            }
          },
          '4': {
            rows: 1,
            options: {
              '1': {
                x: 0,
                y: 0,
                prevalence: 1,
                element: 'img',
                src: 'images/background/far/bottom.png',
                width: 1024,
                height: 673
              }
            }
          }
        }
      },
      '2': {
        x: 0,
        y: 7232,
        element: 'canvas',
        width: 16000,
        height: 8000,
        sections: {
          '1': {
            rows: 1,
            options: {
              '1': {
                x: 0,
                y: 0,
                width: 1024,
                height: 768,
                prevalence: 1,
                element: 'img',
                src: 'images/background/middle.png'
              }
            }
          }
        }
      },
      '3': {
        x: 0,
        y: 7232,
        element: 'canvas',
        width: 32000,
        height: 8000,
        sections: {
          '1': {
            rows: 1,
            options: {
              '1': {
                x: 0,
                y: 0,
                width: 1408,
                height: 768,
                prevalence: 1,
                element: 'img',
                src: 'images/background/near.png'
              }
            }
          }
        }
      }
    },
    rooms: {
      room1: {
        id: 1,
        key: '',
        viewingKey: undefined,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        element: 'canvas',
        background: undefined,
        foreground: undefined,
        scenery: {
          background: undefined,
          foreground: undefined
        },
        inventory: undefined
      }
    },
    characters: {
    },
    aiCharacters: {
      '1': {
        id: 1,
        name: '',
        vehicle: 0,
        room: 0,
        keys: [],
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        direction: 'east',
        speed: 0,
        maxSpeed: 0,
        acceleration: 0,
        frames: {}
      }
    },
    vehicles: {
      '1': {
        id: 1,
        key: '',
        x: 450,
        y: 7852,
        width: 268,
        height: 80,
        direction: 'east',
        speed: 0,
        maxSpeed: 0,
        acceleration: 0,
        deceleration: 0,
        armor: undefined,
        weight: 0,
        element: 'img',
        src: 'images/vehicles/delorean.png'
      }
    },
    projectiles: {
      '1': {
        x: 0,
        y: 0,
        speed: 0,
        type: undefined
      }
    },
    scenery: {
      background: {
        '1': {
          x: 0,
          y: 0
        }
      },
      foreground: {
        '1': {
          x: 0,
          y: 0
        }
      }
    }
  }
}

function assignElementIDs(object) {
  for (var property in object) {
    if (property === 'element') {
      id += 1
      object.elementID = 'id' + id
    }
    else if (
      typeof object[property] !== 'string' &&
      typeof object[property] !== 'number' &&
      typeof object[property] !== 'boolean'
    ) {
      var nestedObject = object[property]
      assignElementIDs(nestedObject)
    }
  }
}

function createPlayer(playerID) {
  players[playerID] = {
    id: 0,
    token: 0,
    character: 0,
    area: 1,
    latencies: [],
    input: {
      up: false,
      down: false,
      left: false,
      right: false,
      accelerate: false,
      decelerate: false,
      shoot: false
    }
  }
  var player = players[playerID]
  player.id = playerID
  player.token = playerID
  player.character = playerID
  return player
}

function createCharacter(player) {
  var characterID = player.character
  var areaID = player.area
  var area = areas[areaID]
  area.characters[characterID] = {
    id: 0,
    name: '',
    vehicle: 0,
    room: 0,
    keys: [],
    x: 250,
    y: 7832,
    width: 105,
    height: 155,
    direction: 'east',
    speed: 0,
    maxSpeed: 0,
    acceleration: 0,
    elementID: 0,
    element: 'img',
    src: 'images/characters/man.png',
    load: true
  }
  var character = area.characters[characterID]
  character.id = characterID
  id += 1
  character.elementID = 'id' + id
  var x = Math.floor(Math.random() * area.width)
  character.x = x
  return character
}

function broadcastCharacter(player, character) {
  for (var areaID in broadcasts) {
    var broadcast = broadcasts[areaID]
    for (var playerID in broadcast) {
      console.log('here');
      var socket = broadcast[playerID]
      console.log('emitting character');
      socket.emit('character', character)
      console.log('now!');
    }
  }
}

/* Use for persistent online world:
function getPlayerByToken(token) {
  for (var playerID in players) {
    if (players.hasOwnProperty(playerID)) {
      var player = players[playerID]
      if (player.token === token) {
        return player
      }
    }
  }
}
*/

function associatePlayerWithSocket(player, socket) {
  var playerID = player.id
  var areaID = player.area
  var broadcast = broadcasts[areaID]
  broadcast[playerID] = socket
}

/* Use for persistent online world:
function associatePlayerWithSocket(player, socket) {
  var playerID = player.id
  var areaID = player.area
  var broadcast = broadcasts[areaID]
  broadcast[playerID] = socket
}
*/

function broadcast() {
  for (var areaID in broadcasts) {
    if (broadcasts.hasOwnProperty(areaID)) {
      var broadcast = broadcasts[areaID]
      for (var playerID in broadcast) {
        if (broadcast.hasOwnProperty(playerID)) {
          var socket = broadcast[playerID]
          var area = areas[areaID]
          var timestamp = getTimestamp()
          area.timestamp = timestamp
          socket.emit('area', area)
        }
      }
    }
  }
}

function getTimestamp() {
  var timestamp = Date.now()
  return timestamp
}

function getPlayerBySocket(socket) {
  for (var broadcastID in broadcasts) {
    if (broadcasts.hasOwnProperty(broadcastID)) {
      var broadcast = broadcasts[broadcastID]
      for (var playerID in broadcast) {
        if (broadcast.hasOwnProperty(playerID)) {
          var playerSocket = broadcast[playerID]
          if (playerSocket === socket) {
            return playerID
          }
        }
      }
    }
  }
}

function updatePlayerLatency(playerID, timestamp) {
  var newTimestamp = getTimestamp()
  var latency = (newTimestamp - timestamp) / 2
  var player = players[playerID]
  var latencies = player.latencies
  latencies.push(latency)
  if (latencies.length >= 20) {
    latencies.shift()
  }
}

function loopThrough(objects, callback) {
  for (var property in objects) {
    if (objects.hasOwnProperty(property)) {
      var object = objects[property]
      callback(object)
    }
  }
}

function updatePlayerInput(id, input) {
  for (var playerID in players) {
    if (players.hasOwnProperty(playerID)) {
      var player = players[playerID]
      if (playerID === id) {
        player.input = input
        return player
      }
    }
  }
}

function updateCharacter(player) {
  var input = player.input
  var characterID = player.character
  var areaID = player.area
  var area = areas[areaID]
  var character = area.characters[characterID]
  if (input.right === true) {
    character.direction = 'right'
    character.speed = 12
  }
  else if (input.left === true) {
    character.direction = 'left'
    character.speed = 12
  }
  else character.speed = 0
  if (character.speed > 0) {
    if (character.direction === 'left') {
      character.x -= character.speed
    }
    if (character.direction === 'right') {
      character.x += character.speed
    }
    var value = character.x
    var min = character.width
    var max = area.width - character.width
    character.x = keepCharacterInArea(value, min, max)
  }
}

function keepCharacterInArea(value, min, max) {
  if (value < min) return min
  else if (value > max) return max
  else return value
}

io.on('connection', socket => {
  playerID += 1
  var player = createPlayer(playerID)
  var character = createCharacter(player)
  broadcastCharacter(player, character)
  associatePlayerWithSocket(player, socket)
  socket.emit('player', player)

  /* Use for persistent online world:
  socket.emit('request-token')

  socket.on('token', token => {
    var player = getPlayerByToken(token)
    associatePlayerWithSocket(player, socket)
  })
  */

  socket.on('timestamp', timestamp => {
    // stopBroadcasting = true
    var playerID = getPlayerBySocket(socket)
    updatePlayerLatency(playerID, timestamp)
  })

  socket.on('input', input => {
    var playerID = getPlayerBySocket(socket)
    var player = updatePlayerInput(playerID, input) // eslint-disable-line no-unused-vars
    // checkForMissedEvents(player)
  })
})

assignElementIDs(areas)

app.use(express.static('public'))
var port = process.env.PORT || 3000
server.listen(port)

setInterval(() => {
  loopThrough(players, updateCharacter)
  broadcast()
}, 33)

/* Use for testing a single boadcast
setInterval(() => {
  if (!stopBroadcasting) {
    broadcast()
  }
}, 33)
*/
