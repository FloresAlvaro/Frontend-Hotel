import type { AppNotification, NotificationType } from '~/types/notification'

export function useNotifications() {
  const notifications = useState<AppNotification[]>(
    'app-notifications',
    () => []
  )

  function dismiss(id: string) {
    notifications.value = notifications.value.filter((item) => item.id !== id)
  }

  function notify(type: NotificationType, title: string, description = '') {
    const existing = notifications.value.find(
      (item) =>
        item.type === type &&
        item.title === title &&
        item.description === description
    )
    if (existing) return existing.id
    const id = globalThis.crypto.randomUUID()
    notifications.value = [
      ...notifications.value.slice(-4),
      { id, type, title, description }
    ]
    return id
  }

  return { notifications: readonly(notifications), notify, dismiss }
}
