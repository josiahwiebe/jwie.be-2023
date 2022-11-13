export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateAndTime(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
