declare module "*.webp"
import "vite/client"

declare global {
  type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
}
