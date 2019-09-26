

// export const age = (SpaceAge) => {
//   Earth = 31557600 seconds = 1 rotation(year)
//   Earth = 1
//   Mercury = 0.2408467
//   Venus = 0.61519726 
//   Mars = 1.8808158
//   Jupiter = 11.862615
//   Saturn = 29.447498
//   Uranus = 84.016846
//   Neptune = 164.79132 
// };

export default class SpaceAge {
  constructor (seconds) {
    this._seconds = seconds
    this.earthYears = seconds / 31557600 
  }

  get seconds () {
    return this._seconds
  }

  onEarth () {
    return roundTo2(this.earthYears)
  }

  onMercury () {
    return roundTo2(this.earthYears / 0.2408467)
  }

  onVenus () {
    return roundTo2(this.earthYears / 0.61519726)
  }

  onMars () {
    return roundTo2(this.earthYears / 1.8808158)
  }

  onJupiter () {
    return roundTo2(this.earthYears / 11.862615)
  }

  onSaturn () {
    return roundTo2(this.earthYears / 29.447498)
  }

  onUranus () {
    return roundTo2(this.earthYears / 84.016846)
  }

  onNeptune () {
    return roundTo2(this.earthYears / 164.79132)
  }
}

function roundTo2 (fl) {
  fl *= 100
  fl = Math.round(fl)
  return fl /= 100
}

