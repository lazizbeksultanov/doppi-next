import { Montserrat } from 'next/font/google'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const Button = ({ children, rSize, size, variant, onClick }) => {
  return (
    <button
      className={classNames(
        rSize === 'w-full' ? 'w-full' : 'w-auto',
        variant === 'solid'
          ? 'border border-customGreen bg-customGreen text-black'
          : variant === 'outline'
          ? 'border border-customGreen bg-inherit text-gray-200'
          : '',
        'w-full py-[18px] text-xl',
        montserrat300.className,
      )}
    >
      {children}
    </button>
  )
}
