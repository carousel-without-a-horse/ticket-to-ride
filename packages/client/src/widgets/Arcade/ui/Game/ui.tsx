import { useMachine } from '@xstate/react'
import { useEffect } from 'react'

import level1Bg from 'public/assets/images/level1Background.png'
import level2Bg from 'public/assets/images/level2Background.png'
import level3Bg from 'public/assets/images/level3Background.png'

import { LevelBackgroundImage } from '../LevelBackgroundImage'
import { Grid } from '../Grid'
import { Player } from '../Player'
import { GameOverScreen } from '../GameOverScreen'
import { SuccessScreen } from '../SuccessScreen'
import { HomeScreen } from '../HomeScreen'
import { gameMachine } from '../../machines/gameMachine'
import { Treasure } from '../Treasure'
import { Monster } from '../Monster'
import { ScreenTransition } from '../ScreenTransition'
import { Coins } from '../Coins'

import type { TGame } from './types'
import type { FC } from 'react'

export const Game: FC<TGame> = ({ fastForwardEvents }) => {
  const [state, send] = useMachine(gameMachine)
  const { playerActor, monsterActor, coinsActor, monsterActor2 } =
    state.children

  useEffect(() => {
    if (!fastForwardEvents) return
    fastForwardEvents.forEach(event => {
      send(event)
    })
  }, [fastForwardEvents, send])

  if (state.matches('home')) {
    return (
      <HomeScreen
        onStartGameButtonClicked={() => send('START_BUTTON_CLICKED')}
      />
    )
  }

  const Screen = () => {
    if (state.matches('playing')) {
      if (state.matches('playing.level1')) {
        return (
          <>
            <LevelBackgroundImage src={level1Bg} alt="Level 1" />
            <Grid>
              <Player actor={playerActor} />
              {coinsActor && <Coins actor={coinsActor} />}
              {monsterActor && <Monster actor={monsterActor} />}
              {monsterActor2 && <Monster actor={monsterActor2} />}
            </Grid>
          </>
        )
      }

      if (state.matches('playing.level2') || state.matches('playing.level3')) {
        return (
          <>
            <LevelBackgroundImage src={level2Bg} alt="Level 2" />
            <Grid>
              {playerActor && <Player actor={playerActor} />}
              {monsterActor && <Monster actor={monsterActor} />}
              {monsterActor2 && <Monster actor={monsterActor2} />}
              {coinsActor && <Coins actor={coinsActor} />}
            </Grid>
          </>
        )
      }

      if (state.matches('playing.level4')) {
        return (
          <>
            <LevelBackgroundImage src={level3Bg} alt="Level 4" />
            <Grid>
              <Player actor={playerActor} />
              {coinsActor && <Coins actor={coinsActor} />}
              {monsterActor && <Monster actor={monsterActor} />}
              {monsterActor2 && <Monster actor={monsterActor2} />}
              <Treasure />
            </Grid>
          </>
        )
      }
    }

    if (state.matches('gameOver')) {
      return (
        <GameOverScreen
          onRestartButtonClicked={() => send('RESTART_BUTTON_CLICKED')}
        />
      )
    }

    if (state.matches('gameComplete')) {
      return (
        <SuccessScreen
          onResetButtonClicked={() => send('HOME_BUTTON_CLICKED')}
        />
      )
    }

    throw Error(`Unknown game state: ${state.value.toString()}`)
  }

  return (
    <ScreenTransition key={JSON.stringify(state.value)}>
      <Screen />
    </ScreenTransition>
  )
}
