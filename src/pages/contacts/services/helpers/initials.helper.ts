export const getInitials = (name: string, lastName: string): string => {
  return `${name.trim()[0] || ''}${lastName.trim()[0] || ''}`
}
