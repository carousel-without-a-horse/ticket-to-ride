import {
  type TCharacterKey,
  charactersKeys,
} from '@/entities/Game/data/characters'

const getOpponentPlayerCharacter = (
  currentPlayer: TCharacterKey
): TCharacterKey => {
  // Получение массива из доступных персонажей
  const availableCharacters = charactersKeys.filter(
    char => char !== currentPlayer
  )

  // Берем случайного персонажа из доступных
  const characterIndex = Math.floor(Math.random() * availableCharacters.length)

  return availableCharacters[characterIndex]
}

export default getOpponentPlayerCharacter
