import { logos } from '../../../../public/assets/logos'
import styles from'./Logo.module.sass'
import Link from 'next/link'

export type IconType = 'gicon' | 'core' | 'strapline' 

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  type: IconType
}

export const Logo: React.FC<LogoProps> = ({ type }) => {

  return (
    <div className={styles.logo}>
      <Link
        href={'/'}
        aria-label="home page"
      >
        <svg
          data-name="GigaclerLogo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={logos[type].viewBox}
          >
          {logos[type].paths.map((p, i) => <path key={i} d={p} className='fill-white' />)}
        </svg>
      </Link>
    </div>
  )
}


