import { useEffect, useRef, useState } from 'react'

type TProps = {
  onBackAction: () => void
  duration?: number
}

const useUserAttention = ({ onBackAction, duration = 5 }: TProps) => {
  const [absenceTime, setAbsenceTime] = useState(0)

  const interval = useRef<ReturnType<typeof setInterval>>()

  const onHide = () => {
    interval.current = setInterval(() => {
      setAbsenceTime(prev => prev + 1)
    }, 1000)
  }

  const onBack = () => {
    if (absenceTime > duration) {
      onBackAction()
    }

    setAbsenceTime(0)
    clearInterval(interval.current)
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      onHide()
    } else {
      onBack()
    }
  }

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [absenceTime])
}

export default useUserAttention
