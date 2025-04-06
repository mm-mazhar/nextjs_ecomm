export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'craftsHub'
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || 'Spend less, enjoy more.'
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Ecommerce Website'

export const PRODUCT_CATEGORIES = ['Marbles', 'Pottery', 'Hand Crafts'] as const

export const COPYRIGHT_TEXT = '© 2000-2025, {APP_NAME}, Inc'

export const ADDRESS_PHONE ='123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE || 35
  )