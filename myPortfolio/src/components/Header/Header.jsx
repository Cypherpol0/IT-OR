import Logo from '@/assets/Logo(My initials).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
  { label: 'About', href: '#About' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Games', href: '#Games' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' }
];

export const Header = () => {
  return (
    <header className="bg-transparent shadow-sm fixed top-0 left-0 right-0 py-5 mx-0 w-full">

        <nav className="container mx-auto flex items-center justify-between px-2 sm:px-4">
            <a href="#" className="rounded-full shrink-0"><img src={Logo} className="w-12 h-12 sm:w-15 sm:h-15 mx-auto" alt="Logo" /></a>
            <ul className="glass flex flex-nowrap items-center gap-1 sm:gap-2 px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-full overflow-x-auto max-w-[45vw] sm:max-w-none">
                {navLinks.map((link) => (
                    <li key={link.href} className="shrink-0">
                        <a href={link.href} className="px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full hover:bg-gray-100 whitespace-nowrap">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    <a href="https://github.com/Cypherpol0" target="_blank" aria-label="GitHub">
                        <button className="rounded-full hover:bg-gray-100" type="button">
                            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/oluwafikayomi-odumosu-p/" target="_blank" aria-label="LinkedIn">
                        <button className="rounded-full hover:bg-gray-100" type="button">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    </header>
  );
}