import { Button } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import type { ReactNode } from "react"

interface ButtonProps {
  title: string
  subtitle?: string
  titleButton?: string
  className?: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  onClick?: () => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const CustomButton = ({
  titleButton,
  onClick,
  iconLeft,
  iconRight,
  variant, }: ButtonProps) => {

      <Button onClick={onClick} className="font-semibold" variant={variant || "default"}>
              {iconLeft && <span className="mr-2">{iconLeft}</span>}
              {titleButton}
              {iconRight && <span className="ml-2">{iconRight}</span>}
            </Button>

};

export default CustomButton;
