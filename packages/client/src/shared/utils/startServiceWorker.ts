const serviceWorkerPath = '/assets/serviceWorker.js'

const onServiceWorkerRegisterSuccess = (
  registration: ServiceWorkerRegistration
) => {
  console.debug(
    'ServiceWorker registration successful with scope: ',
    registration.scope
  )
}

const onServiceWorkerRegisterError = (error: string) => {
  console.debug('ServiceWorker registration failed: ', error)
}

const onWindowLoad = () => {
  navigator.serviceWorker
    .register(serviceWorkerPath)
    .then(onServiceWorkerRegisterSuccess)
    .catch(onServiceWorkerRegisterError)
}

const startServiceWorker = (): void => {
  const isSupportServiceWorker =
    typeof navigator !== 'undefined' && 'serviceWorker' in navigator
  if (!isSupportServiceWorker) return

  window.addEventListener('load', onWindowLoad)
}

export default startServiceWorker
