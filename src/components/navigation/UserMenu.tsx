
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function UserMenu() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-end">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden rounded-full bg-gray-800 w-8 h-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer">
                <Avatar.Image
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                />
                <Avatar.Fallback className="text-white text-sm leading-none">U</Avatar.Fallback>
              </Avatar.Root>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              sideOffset={5}
            >
              <DropdownMenu.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Your Profile</DropdownMenu.Item>
              <DropdownMenu.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</DropdownMenu.Item>
              <DropdownMenu.Item className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Sign out</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
}