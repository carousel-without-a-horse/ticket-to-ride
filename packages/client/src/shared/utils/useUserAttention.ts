import { useCallback, useEffect, useRef, useState } from 'react'

// function handleVisibilityChange(onHide: () => void, onBack: () => void) {
//   if (document.hidden) {
//     console.log('hidden')
//     onHide()
//   } else {
//     console.log('back')
//     onBack()
//   }
// }

type TProps = {
  onBackAction: () => void
  duration?: number
}

const useUserAttention = ({ onBackAction, duration = 5 }: TProps) => {
  const [isVisibilityListenerAdded, setIsVisibilityListenerAdded] =
    useState(false)
  const [absenceTime, setAbsenceTime] = useState(0)

  const interval = useRef<ReturnType<typeof setInterval>>()

  const onHide = () => {
    interval.current = setInterval(() => {
      setAbsenceTime(prev => prev + 1)
    }, 1000)
  }

  const onBack = () => {
    console.log('absenceTime:', absenceTime)
    console.log('duration:', duration)
    if (absenceTime > duration) {
      onBackAction()
    }

    setAbsenceTime(0)
    clearInterval(interval.current)
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      console.log('hidden')
      onHide()
    } else {
      console.log('back')
      onBack()
    }
  }

  useEffect(() => {
    if (typeof document === 'undefined') return

    if (!isVisibilityListenerAdded) {
      document.addEventListener(
        'visibilitychange',
        handleVisibilityChange,
        false
      )
      setIsVisibilityListenerAdded(true)
    }

    return () => {
      if (!isVisibilityListenerAdded) {
        clearInterval(interval.current)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useUserAttention
