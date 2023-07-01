import {
  type TCharacterKey,
  charactersKeys,
} from '@/entities/Game/data/characters'

const getOpponentPlayerCharacter = (
  currentPlayer: TCharacterKey
): TCharacterKey => {
  const availableCharacters = charactersKeys.filter(
    char => char !== currentPlayer
  )

  const characterIndex = Math.floor(Math.random() * availableCharacters.length)

  return availableCharacters[characterIndex]
}

export default getOpponentPlayerCharacter
