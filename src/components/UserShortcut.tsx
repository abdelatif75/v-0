import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { LifeBuoy, Plus, User } from 'lucide-react'
import Link from 'next/link'

export default function UserShortcut({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <Link className='w-full' href={`/payment`}>
                Profile
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className='font-bold'>store</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/user/stores' className='flex items-center'>
                <Plus className='mr-2 h-4 w-4' />
                <span>New store</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className='mr-2 h-4 w-4' />
            <Link href={`support`} className='w-full '>
              Support
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
