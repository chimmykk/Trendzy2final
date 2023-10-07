

export default function ProfileItems({ activeTab, onTabClick }: {activeTab: string, onTabClick: (tab:string) => void}){

    return(
        <main>
            {/* Navigation Bar */}
        <div className="p-4 flex justify-start font-semibold items-center">
          <ul className="flex gap-8 text-gray-600">
            <li>
              <p
                onClick={() => onTabClick('About')}
                className={`${activeTab === 'About' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} cursor-pointer pb-3`}
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => onTabClick('Livestreams')}
                className={`${activeTab === 'Livestreams' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} cursor-pointer pb-3`}
              >
                Livestreams
              </p>
            </li>
            <li>
              <p
                onClick={() => onTabClick('Products')}
                className={`${activeTab === 'Products' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} cursor-pointer pb-3`}
              >
                Products
              </p>
            </li>
            <li>
              <p
                onClick={() => onTabClick('Schedule')}
                className={`${activeTab === 'Schedule' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} cursor-pointer pb-3`}
              >
                Schedule
              </p>
            </li>
            <li>
              <p
                onClick={() => onTabClick('Reviews')}
                className={`${activeTab === 'Reviews' ? 'hover:text-bgGreen border-b-4 border-borderC text-bgGreen' : 'hover:text-bgGreen'} cursor-pointer pb-3`}
              >
                Reviews
              </p>
            </li>
          </ul>
        </div>
        </main>
    )
}