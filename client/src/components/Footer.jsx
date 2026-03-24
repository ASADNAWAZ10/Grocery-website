import asset, {footerLinks} from '../assets/asset';

const Footer = () => {
    return (
        <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10 mt-8'>
            <div className='flex flex-col md:flex-row items-start justify-between 
            gap-10 py-10 border-b border-gray-600/20 text-gray-500'>
                <div className='max-w-80'>
                    <img src={asset.logo} alt="logo" className='w-34 md:w-32' />
                    <p className='text-sm'>
                       we deliver fresh groceries and snacks straight to your door. Trusted 
                       by thousands we aim to make your shopping  experience simple and affordable.
                    </p>
                    </div>
                    <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                        {footerLinks.map((section, index)=>(
                            <div key={index}>
                         <h3 className='font-semibold text-base text-gray-900  md:mb-5 
                         mb-2'>{section.title}</h3>
                         <ul className='text-sm space-y-1 '>
                         {section.links.map((link, index)=>(
                            <li key={index}>
                                <a href='#' className='hover:underline transition'>
                                    {link.text}
                                </a>
                            </li>
                         ))}
                         </ul>
                            </div>
                        ))}
                    
                       </div>
                    </div>
                    <p className='py-4 text-center text-sm md:text-base text-gray-500/80 '>
                        copyright {new Date().getFullYear()} @Asad Nawz All Right Reserved
                    </p>
                </div>
               
             )}
               

export default Footer;