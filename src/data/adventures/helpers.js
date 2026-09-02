export const createAdventure = (adventure) => ({
  public: false,
  featured: false,
  gallery: [],
  blocks: [],
  stravaUrl: '',
  gpxUrl: '',
  ...adventure,
})

export const text = (value) => ({
  type: 'text',
  value,
})

export const accent = (value) => ({
  type: 'accent',
  value,
})

const normalizeRichText = (content = '') => {
  if (!content) return []

  if (Array.isArray(content)) {
    return content.map((part) =>
      typeof part === 'string' ? text(part) : part
    )
  }

  return [text(content)]
}

const normalizeParagraphs = (paragraphs = []) => {
  if (!paragraphs) return []

  const list = Array.isArray(paragraphs) ? paragraphs : [paragraphs]

  return list.map((paragraph) => normalizeRichText(paragraph))
}

export const p = (content) => ({
  type: 'paragraph',
  content: normalizeRichText(content),
})

export const h = (text) => ({
  type: 'heading',
  text,
})

export const img = (src, alt, layout = 'normal', options = {}) => {
  const normalizedOptions =
    typeof options === 'string' || Array.isArray(options)
      ? { text: options }
      : options

  return {
    type: 'image',
    src,
    alt,
    layout,
    sideText: normalizeParagraphs(normalizedOptions.text),
    caption: normalizeRichText(normalizedOptions.caption),
  }
}

export const quote = (content) => ({
  type: 'quote',
  content: normalizeRichText(content),
})

const normalizeGalleryImage = (image) => {
  if (typeof image === 'string') {
    return {
      src: image,
      alt: '',
      caption: [],
    }
  }

  return {
    src: image.src,
    alt: image.alt || '',
    caption: normalizeRichText(image.caption || ''),
  }
}

export const gallery = (images) => ({
  type: 'gallery',
  images: images.map(normalizeGalleryImage),
})