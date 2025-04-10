import {
  CartSchema,
  OrderInputSchema,
  OrderItemSchema,
  ProductInputSchema,
  ReviewInputSchema,
  // SettingInputSchema,
  ShippingAddressSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from '@/lib/validator'
import { z } from 'zod'

export type IReviewInput = z.infer<typeof ReviewInputSchema>
export type IReviewDetails = IReviewInput & {
  _id: string
  createdAt: string
  user: {
    name: string
  }
}

export type IProductInput = z.infer<typeof ProductInputSchema>
export type Data = {
  // settings: ISettingInput[]
  users: IUserInput[]
  products: IProductInput[]
  reviews: {
    title: string
    rating: number
    comment: string
  }[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}

export type IOrderInput = z.infer<typeof OrderInputSchema>
export type IOrderList = IOrderInput & {
  _id: string
  user: {
    name: string
    email: string
  }
  createdAt: Date
}
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>
// Shipping and Payment Methods | Creating Checkout Page
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>

// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
// UserSignUpSchema,
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserName = z.infer<typeof UserNameSchema>

// setting
// export type ISettingInput = z.infer<typeof SettingInputSchema>
// export type ClientSetting = ISettingInput & {
//   currency: string
// }