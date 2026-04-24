// File size format karna
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Date format karna
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

// File extension nikalna
export const getFileExtension = (filename) => {
  return filename.split('.').pop().toUpperCase()
}

// Hash short karna
export const truncateHash = (hash) => {
  if (!hash) return ''
  return hash.substring(0, 8) + '...'
}

// Duration format karna
export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`
}

// Number format karna
export const formatNumber = (num) => {
  return num.toLocaleString('en-IN')
}