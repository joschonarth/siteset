import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      className={cn(
        'font-medium text-sm transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
