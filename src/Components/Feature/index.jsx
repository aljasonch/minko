import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import FeatureIMG from './src/FeatureIMG.png'
import FeatureIMG2 from './src/FeatureIMG2.png'
const features = [
  {
    name: 'High Quality and Durability',
    description: 'Crafted with care using the finest materials, our furniture ensures long-lasting quality for your investment.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Unique and Stylish Design',
    description: 'Discover our curated collection of furniture that combines functionality with statement-making style.',
    icon: LockClosedIcon,
  },
  {
    name: 'Customization Options',
    description: 'Tailor your furniture to match your unique style and space with a range of customizable options.',
    icon: ServerIcon,
  },
];


export default function Feature() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pl-8 lg:pt-4 lg:order-last"> {/* Modified */}
            <div className="lg:max-w-lg rounded-xl shadow-xl  p-8">
              <h2 className="text-base font-semibold leading-7 text-gray-700">Minko</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Modern design</p>
              <p className="mt-6 text-lg leading-8 text-[#1f2937] font-[500]">
              Our company give a modern and perfect design for your lovely home. Give a solution for many people who confuse for choosing their furniture.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-[#1f2937] font-[500] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-black">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4 lg:order-first"> {/* Modified */}
            <img
              src={FeatureIMG}
              alt="Product screenshot"
              className="hidden sm:block sm:w-[57rem] md:ml-4 lg:ml-0 mx-auto" // Modified
              width={2432}
              height={1442}
            />            <img
            src={FeatureIMG2}
            alt="Product screenshot"
            className="hidden sm:block sm:w-[57rem] md:ml-4 lg:ml-0 mx-auto" // Modified
            width={2432}
            height={1442}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
