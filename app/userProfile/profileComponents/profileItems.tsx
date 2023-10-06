
import Link from "next/link"

export default function ProfileItems({ activeTab, onTabClick }: {activeTab: string, onTabClick: (tab:string) => void}){

    return(
        <main>
            {/* Navigation Bar */}
        <div className="p-4 flex justify-start font-semibold items-center">
          <ul className="flex gap-8 text-gray-600">
            <li>
              <Link
                href="/"
                onClick={() => onTabClick('About')}
                className={`${activeTab === 'About' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} pb-3`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => onTabClick('Products')}
                className={`${activeTab === 'Products' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} pb-3`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => onTabClick('Schedule')}
                className={`${activeTab === 'Schedule' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} pb-3`}
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => onTabClick('Reviews')}
                className={`${activeTab === 'Reviews' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} pb-3`}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        </main>
    )
}