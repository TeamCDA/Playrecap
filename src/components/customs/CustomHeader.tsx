import { Button } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import type { ReactNode } from "react"

interface CustomHeaderProps {
  title: string
  subtitle?: string
  titleButton?: string
  className?: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  onClick?: () => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
  secondaryButtonTitle?: string
  onSecondaryClick?: () => void
  secondaryVariant?: VariantProps<typeof buttonVariants>["variant"]
  secondIconLeft?: ReactNode
  secondIconRight?: ReactNode
}

const CustomHeader = ({
  title,
  subtitle,
  titleButton,
  onClick,
  iconLeft,
  iconRight,
  variant,
  secondaryButtonTitle,
  onSecondaryClick,
  secondaryVariant,
  secondIconRight,
  secondIconLeft,
}: CustomHeaderProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-5xl">{title}</h1>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          {secondaryButtonTitle && (
            <Button
              onClick={onSecondaryClick}
              variant={secondaryVariant || "outline"}
              className="font-semibold"
            >
               {secondIconLeft && <span className="mr-2">{iconLeft}</span>}
              {secondaryButtonTitle}
                   {secondIconRight && <span className="ml-2">{iconRight}</span>}
            </Button>
          )}
          {titleButton && (
            <Button onClick={onClick} className="font-semibold" variant={variant || "default"}>
              {iconLeft && <span className="mr-2">{iconLeft}</span>}
              {titleButton}
              {iconRight && <span className="ml-2">{iconRight}</span>}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomHeader
