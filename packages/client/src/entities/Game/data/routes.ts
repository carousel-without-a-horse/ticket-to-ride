import type { TCityKey } from './cities'

type TPathColor =
  | 'orange'
  | 'black'
  | 'purple'
  | 'green'
  | 'blue'
  | 'white'
  | 'red'
  | 'yellow'
  | 'gray'

export interface IRoute {
  length: number
  paths: TPathColor[]
  cities: TCityKey[]
}

export const routes: Record<string, IRoute> = {
  'Edinburgh-London': {
    length: 3,
    paths: ['orange', 'black'],
    cities: ['Edinburgh', 'London'],
  },
  'London-Dieppe': {
    length: 2,
    paths: ['gray', 'gray'],
    cities: ['London', 'Dieppe'],
  },
  'Dieppe-Brest': {
    length: 2,
    paths: ['orange'],
    cities: ['Dieppe', 'Brest'],
  },
  'Dieppe-Paris': {
    length: 1,
    paths: ['purple'],
    cities: ['Dieppe', 'Paris'],
  },
  'Brest-Paris': {
    length: 3,
    paths: ['black'],
    cities: ['Brest', 'Paris'],
  },
  'Brest-Pamplona': {
    length: 4,
    paths: ['purple'],
    cities: ['Brest', 'Pamplona'],
  },
  'Paris-Pamplona': {
    length: 4,
    paths: ['blue', 'green'],
    cities: ['Paris', 'Pamplona'],
  },
  'Pamplona-Madrid': {
    length: 3,
    paths: ['black', 'white'],
    cities: ['Pamplona', 'Madrid'],
  },
  'Madrid-Lisboa': {
    length: 2,
    paths: ['purple'],
    cities: ['Madrid', 'Lisboa'],
  },
  'Lisboa-Cadiz': {
    length: 2,
    paths: ['blue'],
    cities: ['Lisboa', 'Cadiz'],
  },
  'Madrid-Cadiz': {
    length: 3,
    paths: ['orange'],
    cities: ['Madrid', 'Cadiz'],
  },
  'Madrid-Barcelona': {
    length: 2,
    paths: ['yellow'],
    cities: ['Madrid', 'Barcelona'],
  },
  'Pamplona-Barcelona': {
    length: 2,
    paths: ['gray'],
    cities: ['Pamplona', 'Barcelona'],
  },
  'Pamplona-Marseille': {
    length: 4,
    paths: ['orange'],
    cities: ['Pamplona', 'Marseille'],
  },
  'Barcelona-Marseille': {
    length: 4,
    paths: ['gray'],
    cities: ['Barcelona', 'Marseille'],
  },
  'Marseille-Roma': {
    length: 4,
    paths: ['gray'],
    cities: ['Marseille', 'Roma'],
  },
  'Roma-Palermo': {
    length: 4,
    paths: ['gray'],
    cities: ['Roma', 'Palermo'],
  },
  'Roma-Brindisi': {
    length: 2,
    paths: ['white'],
    cities: ['Roma', 'Brindisi'],
  },
  'Brindisi-Palermo': {
    length: 2,
    paths: ['gray'],
    cities: ['Brindisi', 'Palermo'],
  },
  'Brindisi-Athina': {
    length: 4,
    paths: ['gray'],
    cities: ['Brindisi', 'Athina'],
  },
  'Palermo-Smyrna': {
    length: 6,
    paths: ['gray'],
    cities: ['Palermo', 'Smyrna'],
  },
  'Athina-Smyrna': {
    length: 2,
    paths: ['gray'],
    cities: ['Athina', 'Smyrna'],
  },
  'Smyrna-Angora': {
    length: 3,
    paths: ['orange'],
    cities: ['Smyrna', 'Angora'],
  },
  'Smyrna-Constantinople': {
    length: 2,
    paths: ['gray'],
    cities: ['Smyrna', 'Constantinople'],
  },
  'Constantinople-Angora': {
    length: 2,
    paths: ['gray'],
    cities: ['Constantinople', 'Angora'],
  },
  'Angora-Erzurum': {
    length: 3,
    paths: ['black'],
    cities: ['Angora', 'Erzurum'],
  },
  'Erzurum-Sochi': {
    length: 3,
    paths: ['red'],
    cities: ['Erzurum', 'Sochi'],
  },
  'Rostov-Sochi': {
    length: 2,
    paths: ['gray'],
    cities: ['Rostov', 'Sochi'],
  },
  'Sevastopol-Constantinople': {
    length: 4,
    paths: ['gray'],
    cities: ['Sevastopol', 'Constantinople'],
  },
  'Sevastopol-Erzurum': {
    length: 4,
    paths: ['gray'],
    cities: ['Sevastopol', 'Erzurum'],
  },
  'Sevastopol-Sochi': {
    length: 2,
    paths: ['gray'],
    cities: ['Sevastopol', 'Sochi'],
  },
  'Sevastopol-Rostov': {
    length: 4,
    paths: ['gray'],
    cities: ['Sevastopol', 'Rostov'],
  },
  'Bucuresti-Sevastopol': {
    length: 2,
    paths: ['white'],
    cities: ['Bucuresti', 'Sevastopol'],
  },
  'Bucuresti-Constantinople': {
    length: 3,
    paths: ['yellow'],
    cities: ['Bucuresti', 'Constantinople'],
  },
  'Bucuresti-Sofia': {
    length: 2,
    paths: ['gray'],
    cities: ['Bucuresti', 'Sofia'],
  },
  'Kharkov-Rostov': {
    length: 2,
    paths: ['green'],
    cities: ['Kharkov', 'Rostov'],
  },
  'Kharkov-Kyiv': {
    length: 4,
    paths: ['gray'],
    cities: ['Kharkov', 'Kyiv'],
  },
  'Kharkov-Moskva': {
    length: 4,
    paths: ['gray'],
    cities: ['Kharkov', 'Moskva'],
  },
  'Kyiv-Bucuresti': {
    length: 4,
    paths: ['gray'],
    cities: ['Kyiv', 'Bucuresti'],
  },
  'Sofia-Constantinople': {
    length: 3,
    paths: ['blue'],
    cities: ['Sofia', 'Constantinople'],
  },
  'Sofia-Athina': {
    length: 3,
    paths: ['purple'],
    cities: ['Sofia', 'Athina'],
  },
  'Sofia-Sarajevo': {
    length: 2,
    paths: ['gray'],
    cities: ['Sofia', 'Sarajevo'],
  },
  'Budapest-Sarajevo': {
    length: 3,
    paths: ['purple'],
    cities: ['Budapest', 'Sarajevo'],
  },
  'Budapest-Bucuresti': {
    length: 4,
    paths: ['gray'],
    cities: ['Budapest', 'Bucuresti'],
  },
  'Budapest-Kyiv': {
    length: 6,
    paths: ['gray'],
    cities: ['Budapest', 'Kyiv'],
  },
  'Budapest-Zagrab': {
    length: 2,
    paths: ['orange'],
    cities: ['Budapest', 'Zagrab'],
  },
  'Budapest-Wien': {
    length: 1,
    paths: ['red', 'white'],
    cities: ['Budapest', 'Wien'],
  },
  'Zagrab-Sarajevo': {
    length: 3,
    paths: ['red'],
    cities: ['Zagrab', 'Sarajevo'],
  },
  'Zagrab-Wien': {
    length: 2,
    paths: ['gray'],
    cities: ['Zagrab', 'Wien'],
  },
  'Sarajevo-Athina': {
    length: 4,
    paths: ['green'],
    cities: ['Sarajevo', 'Athina'],
  },
  'Venezia-Zagrab': {
    length: 2,
    paths: ['gray'],
    cities: ['Venezia', 'Zagrab'],
  },
  'Venezia-Roma': {
    length: 2,
    paths: ['black'],
    cities: ['Venezia', 'Roma'],
  },
  'Venezia-Zurich': {
    length: 2,
    paths: ['green'],
    cities: ['Venezia', 'Zurich'],
  },
  'Venezia-Munchen': {
    length: 2,
    paths: ['blue'],
    cities: ['Venezia', 'Munchen'],
  },
  'Zurich-Marseille': {
    length: 2,
    paths: ['purple'],
    cities: ['Zurich', 'Marseille'],
  },
  'Zurich-Paris': {
    length: 3,
    paths: ['gray'],
    cities: ['Zurich', 'Paris'],
  },
  'Marseille-Paris': {
    length: 4,
    paths: ['gray'],
    cities: ['Marseille', 'Paris'],
  },
  'London-Amsterdam': {
    length: 2,
    paths: ['gray'],
    cities: ['London', 'Amsterdam'],
  },
  'Amsterdam-Bruxelles': {
    length: 1,
    paths: ['black'],
    cities: ['Amsterdam', 'Bruxelles'],
  },
  'Amsterdam-Frankfurt': {
    length: 2,
    paths: ['white'],
    cities: ['Amsterdam', 'Frankfurt'],
  },
  'Amsterdam-Essen': {
    length: 3,
    paths: ['yellow'],
    cities: ['Amsterdam', 'Essen'],
  },
  'Bruxelles-Paris': {
    length: 2,
    paths: ['yellow', 'red'],
    cities: ['Bruxelles', 'Paris'],
  },
  'Bruxelles-Frankfurt': {
    length: 2,
    paths: ['blue'],
    cities: ['Bruxelles', 'Frankfurt'],
  },
  'Frankfurt-Paris': {
    length: 3,
    paths: ['white', 'orange'],
    cities: ['Frankfurt', 'Paris'],
  },
  'Frankfurt-Munchen': {
    length: 2,
    paths: ['purple'],
    cities: ['Frankfurt', 'Munchen'],
  },
  'Frankfurt-Berlin': {
    length: 3,
    paths: ['black', 'red'],
    cities: ['Frankfurt', 'Berlin'],
  },
  'Frankfurt-Essen': {
    length: 2,
    paths: ['green'],
    cities: ['Frankfurt', 'Essen'],
  },
  'Munchen-Zurich': {
    length: 2,
    paths: ['yellow'],
    cities: ['Munchen', 'Zurich'],
  },
  'Munchen-Wien': {
    length: 3,
    paths: ['orange'],
    cities: ['Munchen', 'Wien'],
  },
  'Essen-Berlin': {
    length: 2,
    paths: ['blue'],
    cities: ['Essen', 'Berlin'],
  },
  'Essen-Kobenhavn': {
    length: 3,
    paths: ['gray', 'gray'],
    cities: ['Essen', 'Kobenhavn'],
  },
  'Berlin-Wien': {
    length: 3,
    paths: ['green'],
    cities: ['Berlin', 'Wien'],
  },
  'Berlin-Warszawa': {
    length: 4,
    paths: ['purple', 'yellow'],
    cities: ['Berlin', 'Warszawa'],
  },
  'Berlin-Danzig': {
    length: 4,
    paths: ['gray'],
    cities: ['Berlin', 'Danzig'],
  },
  'Warszawa-Wien': {
    length: 4,
    paths: ['blue'],
    cities: ['Warszawa', 'Wien'],
  },
  'Warszawa-Danzig': {
    length: 2,
    paths: ['gray'],
    cities: ['Warszawa', 'Danzig'],
  },
  'Warszawa-Wilno': {
    length: 2,
    paths: ['red'],
    cities: ['Warszawa', 'Wilno'],
  },
  'Kyiv-Wilno': {
    length: 2,
    paths: ['gray'],
    cities: ['Kyiv', 'Wilno'],
  },
  'Kyiv-Smolensk': {
    length: 3,
    paths: ['red'],
    cities: ['Kyiv', 'Smolensk'],
  },
  'Smolensk-Wilno': {
    length: 3,
    paths: ['yellow'],
    cities: ['Smolensk', 'Wilno'],
  },
  'Smolensk-Moskva': {
    length: 2,
    paths: ['orange'],
    cities: ['Smolensk', 'Moskva'],
  },
  'Kobenhavn-Stockholm': {
    length: 3,
    paths: ['yellow', 'white'],
    cities: ['Kobenhavn', 'Stockholm'],
  },
  'Stockholm-Petrograd': {
    length: 6,
    paths: ['gray'],
    cities: ['Stockholm', 'Petrograd'],
  },
  'Petrograd-Moskva': {
    length: 4,
    paths: ['white'],
    cities: ['Petrograd', 'Moskva'],
  },
  'Danzig-Riga': {
    length: 3,
    paths: ['black'],
    cities: ['Danzig', 'Riga'],
  },
  'Riga-Wilno': {
    length: 4,
    paths: ['green'],
    cities: ['Riga', 'Wilno'],
  },
  'Riga-Petrograd': {
    length: 4,
    paths: ['gray'],
    cities: ['Riga', 'Petrograd'],
  },
  'Wilno-Petrograd': {
    length: 4,
    paths: ['blue'],
    cities: ['Wilno', 'Petrograd'],
  },
}
