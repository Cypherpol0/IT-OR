import Logo from '@/assets/Logo(My initials).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Games', href: '#Games' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' }
];

export const Header = () => {
  return (
    <header className="bg-transparent shadow-sm fixed top-0 left-0 right-0 py-5 mx-0 w-full">

        <nav className="container mx-auto flex items-center justify-between px-4">
            <a href="#" className="rounded-full"><img src={Logo} className="w-15 h-15 mx-auto" alt="Logo" /></a>
            <ul className="glass md:flex items-center space-x-4 px-2 py-2 rounded-full">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="px-4 py-2 rounded-full hover:bg-gray-100">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-center gap-1">
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