// File type categories
export const FILE_TYPES = {
  image: ['JPG', 'JPEG', 'PNG', 'GIF', 'BMP', 'WEBP', 'SVG'],
  document: ['PDF', 'DOCX', 'DOC', 'TXT', 'XLSX', 'PPTX'],
  video: ['MP4', 'AVI', 'MOV', 'MKV', 'WMV'],
  audio: ['MP3', 'WAV', 'FLAC', 'AAC'],
  archive: ['ZIP', 'RAR', '7Z', 'TAR', 'GZ'],
}

// Extension badge colors
export const EXT_COLORS = {
  JPG: 'bg-blue-50 text-blue-500',
  JPEG: 'bg-blue-50 text-blue-500',
  PNG: 'bg-blue-50 text-blue-500',
  PDF: 'bg-green-50 text-green-600',
  DOCX: 'bg-green-50 text-green-600',
  MP4: 'bg-purple-50 text-purple-500',
  AVI: 'bg-purple-50 text-purple-500',
  ZIP: 'bg-amber-50 text-amber-500',
  RAR: 'bg-amber-50 text-amber-500',
}

// Hash methods
export const HASH_METHODS = [
  { value: 'md5', label: 'MD5 (Fastest)' },
  { value: 'sha256', label: 'SHA-256 (Recommended)' },
  { value: 'sha512', label: 'SHA-512 (Most Secure)' },
]

// API endpoints
export const ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  SCAN: '/scan',
  RESULTS: '/scan/results',
  STATS: '/scan/stats',
  DELETE_FILE: '/file',
  SETTINGS: '/settings',
}