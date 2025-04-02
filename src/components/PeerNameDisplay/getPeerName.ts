import { animalNames as defaultAnimalNames } from './data/animal-names'
import { adjectives as defaultAdjectives } from './data/adjectives'
import { animalNamesZh as defaultAnimalNamesZh } from './data/animal-names-zh'
import { adjectivesZh as defaultAdjectivesZh } from './data/adjectives-zh'

const convertStringToInteger = (str: string) => {
  return str.split('').reduce((acc, char, i) => acc + char.charCodeAt(0) * i, 0)
}

export interface FunAnimalNameConfig {
  animalNames?: string[]
  adjectives?: string[]
  language?: 'en' | 'zh'
}

export const getPeerName = (
  stringToHash: string,
  {
    language = 'en',
    adjectives = language === 'zh' ? defaultAdjectivesZh : defaultAdjectives,
    animalNames = language === 'zh' ? defaultAnimalNamesZh : defaultAnimalNames,
  }: FunAnimalNameConfig = {}
) => {
  const hashNumber = convertStringToInteger(stringToHash)
  const adjective = adjectives[hashNumber % adjectives.length]
  const adjectiveNumberValue = convertStringToInteger(adjective)

  const animal =
    animalNames[(hashNumber + adjectiveNumberValue) % animalNames.length]

  return `${adjective} ${animal}`
}
