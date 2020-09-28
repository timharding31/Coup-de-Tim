import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(rootEl, idx, game) {
    super(rootEl, idx, game, true)
    this.knowledge = {
      ambassadors: 3,
      assassins: 3,
      captains: 3,
      contessas: 3,
      dukes: 3
    }

    this.numTurns = 0;
    this.knowledge = this.updateKnowledge(this.cards)
  }

  updateKnowledge(array) {
    this.knowledge.ambassadors -= this.numCharacters(array, 'Ambassador');
    this.knowledge.assassins -= this.numCharacters(array, 'Assassin');
    this.knowledge.captains -= this.numCharacters(array, 'Captain');
    this.knowledge.contessas -= this.numCharacters(array, 'Contessa');
    this.knowledge.dukes -= this.numCharacters(array, 'Duke');
    return this.knowledge
  }

  numCharacters(array, character) {
    return array.reduce((num, card) => (card.character === character ? num + 1 : num), 0)
  }

  reshuffleCard(idx) {
    super.reshuffleCard(idx)
    this.knowledge = this.updateKnowledge(this.cards.slice(-1));
  }

  exchangePartOne() {
    super.exchangePartOne()
    this.knowledge = this.updateKnowledge(this.cards.slice(-2));
  }

  learnLostCard(character) {
    switch(character) {
      case 'Amabassador':
        this.knowledge.ambassadors -= 2;
        break
      case 'Assassin':
        this.knowledge.assassins -= 2;
        break
      case 'Captain':
        this.knowledge.captains -= 2;
        break
      case 'Contessa':
        this.knowledge.contessas -= 2;
        break
      case 'Duke':
        this.knowledge.dukes -= 2;
        break
      default:
        break
    }
  }

  learnOpponentMove(action) {
    switch(action) {
      case 'Tax':
        this.knowledge.dukes += 1;
        break
      case 'Steal':
        this.knowledge.captains += 1;
        break
      case 'Assassinate':
        this.knowledge.assassins += 1;
        break
      default:
        break
    }
  }

  learnOpponentBlock(blockAction) {
    switch(blockAction) {
      case 'Foreign Aid':
        this.knowledge.dukes += 1;
        break
      case 'Steal':
        this.knowledge.captains += 0.5;
        this.knowledge.ambassadors += 0.5;
        break
      case 'Assassinate':
        this.knowledge.contessas += 1;
        break
    }
  }

  decideTurn() {
    this.numTurns += 1;
    if (this.coins >= 10) {
      return 'Coup'
    } else if (this.decideCoup()) {
      return 'Coup'
    } else if (this.decideIncome()) {
      return 'Income'
    } else if (this.decideAssassinate()) {
      return 'Assassinate'
    } else if (this.decideSteal()) {
      return 'Steal'
    } else if (this.decideExchange()) {
      return 'Exchange'
    } else if (this.decideTax()) {
      return 'Tax'
    } else if (this.decideForeignAid()) {
      return 'Foreign Aid'
    } else {
      return 'Income'
    }
  }

  decideIncome() {
    if (this.coins === 6) {
      return true
    } else {
      return false
    }
  }

  decideCoup() {
    if (this.coins >= 7) {
      return [true, false][Math.round(Math.random())]
    } else {
      return false
    }
  }

  decideAssassinate() {
    if (this.coins < 3) {
      return false
    } else if (this.cards.map(card => card.character).indexOf('Assassin') >= 0) {
      if (this.knowledge.contessas <= 1) {
        return true
      } else if (this.opponent.cards <= 1) {
        return true
      } else {
        return [true, false][Math.round(Math.random())]
      }
    } else {
      return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
    }
  }

  decideSteal() {
    if ((this.knowledge.captains + this.knowledge.ambassadors) >= 3) {
      return false
    } else {
      return true
    }
  }

  decideExchange() {
    if (this.cards.map(card => card.character).indexOf('Ambassador') >= 0) {
      return ([true, false][Math.round(Math.random())] || [true, false][Math.round(Math.random())])
    } else if (this.numTurns <= 3) {
      return [true, false][Math.round(Math.random())]
    } else {
      return false
    }
  }

  decideTax() {
    if (this.cards.map(card => card.character).indexOf('Duke') >= 0) {
      return ([true, false][Math.round(Math.random())] || [true, false][Math.round(Math.random())])
    } else if (this.numTurns <= 3) {
      return [true, false][Math.round(Math.random())]
    } else {
      return false
    }
  }

  decideForeignAid() {
    if (this.knowledge.dukes <= 1) {
      return true
    } else {
      return false
    }
  }

  decideChallenge(action) {
    if (this.cards.length <= 1) {
      return false
    } else {
      switch(action) {
        case 'Tax':
          if (this.knowledge.dukes <= 1) {
            return true
          } else {
            return false
          }
        case 'Steal':
          if (this.knowledge.captains <= 1) {
            return true
          } else {
            return false
          }
        case 'Assassinate':
          if (this.knowledge.assassins <= 0) {
            return true
          } else {
            return false
          }
        case 'Exchange':
          if (this.knowledge.ambassadors <= 1) {
            return true
          } else {
            return false
          }
        default:
          return false
      }
    }
  }

  decideBlock(action) {
    switch(action) {
      case 'Foreign Aid':
        if (this.cards.map(card => card.character).indexOf('Duke') >= 0) {
          return true
        } else {
          return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
        }
      case 'Steal':
        if (this.cards.map(card => card.character).indexOf('Captain') >= 0) {
          return true
        } else if (this.cards.map(card => card.character).indexOf('Ambassador') >= 0) {
          return true
        } else {
          return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
        }
      case 'Assassinate':
        if (this.cards.map(card => card.character).indexOf('Contessa') >= 0) {
          return true
        } else if (this.cards.length <= 1) {
          return true
        } else {
          return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
        }
      default:
        return false
    }
  }

  decideBlockChallenge(blockAction) {
    switch(blockAction) {
      case 'Foreign Aid':
        return false
      case 'Steal':
        if ((this.knowledge.captains + this.knowledge.ambassadors) <= 3) {
          return true
        } else {
          return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
        }
      case 'Assassinate':
        if (this.knowledge.contessas <= 1) {
          return true
        } else {
          return ([true, false][Math.round(Math.random())] && [true, false][Math.round(Math.random())])
        }
      default:
        return false
    }
  }

  randKillIdx() {
    return Math.floor(Math.random() * this.cards.length)
  }

  randExchangeIdx() {
    let arr = [Math.floor(Math.random() * this.cards.length)]
    while (arr.length < 2) {
      let rand = Math.floor(Math.random() * this.cards.length)
      if (rand != arr[0]) arr.push(rand)
    }
    return arr
  }

  


}