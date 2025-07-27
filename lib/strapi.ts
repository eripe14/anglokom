import axios from 'axios'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const API_TOKEN = process.env.STRAPI_API_TOKEN

const api = axios.create({
    baseURL: `${STRAPI_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` })
    }
})

// Interfejsy TypeScript dla Strapi v5
export interface StrapiResponse<T> {
    data: T
    meta: {
        pagination?: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

export interface StrapiImageFormat {
    name: string
    hash: string
    ext: string
    mime: string
    path: string | null
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface StrapiImage {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
        thumbnail?: StrapiImageFormat
        small?: StrapiImageFormat
        medium?: StrapiImageFormat
        large?: StrapiImageFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: unknown
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface ContentChild {
    type: string
    text: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
}

export interface ListItem {
    type: 'list-item'
    children: ContentChild[]
}

export interface ContentBlock {
    type: 'paragraph' | 'heading' | 'list' | string
    children?: ContentChild[] | ListItem[]
    level?: number // dla nagłówków
    format?: 'ordered' | 'unordered' // dla list
}

export interface Category {
    id: number
    documentId: string
    name: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Post {
    id: number
    documentId: string
    title: string
    slug: string
    content: ContentBlock[]
    excerpt: string
    standing: 'draft' | 'published'
    createdAt: string
    updatedAt: string
    publishedAt: string
    featured_image: StrapiImage[]
    categories: Category[]
}

// Typ dla tworzenia/aktualizacji postu (bez systemowych pól)
export interface CreatePostData {
    title: string
    slug: string
    content: ContentBlock[]
    excerpt: string
    standing?: 'draft' | 'published'
    featured_image?: number[] // IDs obrazów
    categories?: number[] // IDs kategorii
}

// API funkcje
export const strapiApi = {
    // Pobierz wszystkie posty
    async getPosts(): Promise<StrapiResponse<Post[]>> {
        try {
            const response = await api.get('/posts?populate=*')
            console.log('getPosts response:', response.data);
            console.log(STRAPI_URL);
            (response.data.data as Post[]).forEach((post: Post) => {
                console.dir(post.featured_image, { depth: null });
            });
            return {
                data: response.data.data || [],
                meta: response.data.meta || {}
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('getPosts error:', error.response?.data || error.message)
                throw new Error(`Failed to fetch posts: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('getPosts error:', String(error))
                throw new Error('Failed to fetch posts')
            }
        }
    },

    // Pobierz jeden post po slug
    async getPost(slug: string): Promise<Post | null> {
        try {
            const response = await api.get(`/posts?filters[slug][$eq]=${slug}&populate=*`)
            console.dir(response.data.data[0]?.featured_image, { depth: null });
            return response.data.data[0] || null
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('getPost error:', error.response?.data || error.message)
                if (error.response?.status === 404) {
                    return null
                }
                throw new Error(`Failed to fetch post: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('getPost error:', String(error))
                throw new Error('Failed to fetch post')
            }
        }
    },

    // Pobierz post po documentId
    async getPostByDocumentId(documentId: string): Promise<Post | null> {
        try {
            const response = await api.get(`/posts/${documentId}?populate=*`)
            console.log('getPostByDocumentId response:', response.data)
            return response.data.data || null
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('getPostByDocumentId error:', error.response?.data || error.message)
                if (error.response?.status === 404) {
                    return null
                }
                throw new Error(`Failed to fetch post: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('getPostByDocumentId error:', String(error))
                throw new Error('Failed to fetch post')
            }
        }
    },

    // Stwórz post
    async createPost(postData: CreatePostData): Promise<Post> {
        try {
            const response = await api.post('/posts', {
                data: postData
            })
            console.log('createPost response:', response.data)
            return response.data.data
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('createPost error:', error.response?.data || error.message)
                throw new Error(`Failed to create post: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('createPost error:', String(error))
                throw new Error('Failed to create post')
            }
        }
    },

    // Aktualizuj post po documentId
    async updatePost(documentId: string, postData: Partial<CreatePostData>): Promise<Post> {
        try {
            const response = await api.put(`/posts/${documentId}`, {
                data: postData
            })
            console.log('updatePost response:', response.data)
            return response.data.data
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('updatePost error:', error.response?.data || error.message)
                throw new Error(`Failed to update post: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('updatePost error:', String(error))
                throw new Error('Failed to update post')
            }
        }
    },

    // Usuń post po documentId
    async deletePost(documentId: string): Promise<void> {
        try {
            await api.delete(`/posts/${documentId}`)
            console.log('deletePost success for documentId:', documentId)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('deletePost error:', error.response?.data || error.message)
                throw new Error(`Failed to delete post: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('deletePost error:', String(error))
                throw new Error('Failed to delete post')
            }
        }
    },

    // Upload obrazka
    async uploadImage(file: File): Promise<StrapiImage> {
        try {
            const formData = new FormData()
            formData.append('files', file)

            const response = await api.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log('uploadImage response:', response.data)
            return response.data[0]
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('uploadImage error:', error.response?.data || error.message)
                throw new Error(`Failed to upload image: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('uploadImage error:', String(error))
                throw new Error('Failed to upload image')
            }
        }
    },

    // Pobierz wszystkie kategorie
    async getCategories(): Promise<StrapiResponse<Category[]>> {
        try {
            const response = await api.get('/categories')
            console.log('getCategories response:', response.data)
            return {
                data: response.data.data || [],
                meta: response.data.meta || {}
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('getCategories error:', error.response?.data || error.message)
                throw new Error(`Failed to fetch categories: ${error.response?.status} ${error.response?.statusText}`)
            } else {
                console.error('getCategories error:', String(error))
                throw new Error('Failed to fetch categories')
            }
        }
    }
}

// Helper do URL obrazków dla Strapi v5
export const getStrapiImageUrl = (imageData: StrapiImage | StrapiImage[] | null | undefined): string => {
    // Jeśli to array, weź pierwszy element
    if (Array.isArray(imageData)) {
        if (imageData.length === 0) return ''
        imageData = imageData[0]
    }

    // Jeśli nie ma danych obrazu
    if (!imageData?.url) return ''

    const url = imageData.url
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`
}

// Helper do uzyskania konkretnego formatu obrazu
export const getStrapiImageFormat = (
    imageData: StrapiImage | StrapiImage[] | null | undefined,
    format: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string => {
    // Jeśli to array, weź pierwszy element
    if (Array.isArray(imageData)) {
        if (imageData.length === 0) return ''
        imageData = imageData[0]
    }

    // Jeśli nie ma danych obrazu
    if (!imageData) return ''

    // Spróbuj uzyskać żądany format
    const formatData = imageData.formats?.[format]
    if (formatData?.url) {
        const url = formatData.url
        return url.startsWith('http') ? url : `${STRAPI_URL}${url}`
    }

    // Fallback do oryginalnego obrazu
    return getStrapiImageUrl(imageData)
}

// Helper do konwersji content blocks na plain text
export const getContentAsText = (content: ContentBlock[]): string => {
    if (!Array.isArray(content)) return ''

    return content.map(block => {
        switch (block.type) {
            case 'paragraph':
                if (block.children) {
                    return (block.children as ContentChild[]).map(child => child.text || '').join('')
                }
                return ''

            case 'heading':
                if (block.children) {
                    const headingText = (block.children as ContentChild[]).map(child => child.text || '').join('')
                    const level = block.level || 1
                    const prefix = '#'.repeat(level) + ' '
                    return prefix + headingText
                }
                return ''

            case 'list':
                if (block.children) {
                    return (block.children as ListItem[]).map((item, index) => {
                        if (item.children) {
                            const itemText = item.children.map(child => child.text || '').join('')
                            const prefix = block.format === 'ordered' ? `${index + 1}. ` : '• '
                            return prefix + itemText
                        }
                        return ''
                    }).filter(item => item.trim()).join('\n')
                }
                return ''

            default:
                return ''
        }
    }).filter(text => text.trim()).join('\n\n')
}

// Helper do konwersji content blocks na HTML
export const getContentAsHTML = (content: ContentBlock[]): string => {
    if (!Array.isArray(content)) return ''

    return content.map(block => {
        switch (block.type) {
            case 'paragraph':
                if (block.children) {
                    const html = (block.children as ContentChild[]).map(child => {
                        let text = child.text || ''
                        if (text.trim() === '') return '' // Skip empty text nodes

                        if (child.bold) {
                            text = `<strong>${text}</strong>`
                        }
                        if (child.italic) {
                            text = `<em>${text}</em>`
                        }
                        if (child.underline) {
                            text = `<u>${text}</u>`
                        }
                        if (child.strikethrough) {
                            text = `<s>${text}</s>`
                        }
                        return text
                    }).join('')
                    return html.trim() ? `<p>${html}</p>` : ''
                }
                return ''

            case 'heading':
                if (block.children) {
                    const level = Math.min(Math.max(block.level || 1, 1), 6) // Ensure level is between 1-6
                    const html = (block.children as ContentChild[]).map(child => {
                        let text = child.text || ''
                        if (text.trim() === '') return ''

                        if (child.bold) {
                            text = `<strong>${text}</strong>`
                        }
                        if (child.italic) {
                            text = `<em>${text}</em>`
                        }
                        if (child.underline) {
                            text = `<u>${text}</u>`
                        }
                        if (child.strikethrough) {
                            text = `<s>${text}</s>`
                        }
                        return text
                    }).join('')
                    return html.trim() ? `<h${level}>${html}</h${level}>` : ''
                }
                return ''

            case 'list':
                if (block.children) {
                    const listItems = (block.children as ListItem[]).map(item => {
                        if (item.children && item.children.length > 0) {
                            const html = item.children.map(child => {
                                let text = child.text || ''
                                if (text.trim() === '') return ''

                                if (child.bold) {
                                    text = `<strong>${text}</strong>`
                                }
                                if (child.italic) {
                                    text = `<em>${text}</em>`
                                }
                                if (child.underline) {
                                    text = `<u>${text}</u>`
                                }
                                if (child.strikethrough) {
                                    text = `<s>${text}</s>`
                                }
                                return text
                            }).join('')
                            return html.trim() ? `<li>${html}</li>` : ''
                        }
                        return ''
                    }).filter(item => item.trim()).join('')

                    if (listItems) {
                        const listTag = block.format === 'ordered' ? 'ol' : 'ul'
                        return `<${listTag}>${listItems}</${listTag}>`
                    }
                }
                return ''

            default:
                return ''
        }
    }).filter(html => html.trim()).join('')
}

export default strapiApi