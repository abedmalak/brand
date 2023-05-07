import '@styles/globals.css'
import Navbar from '@app/components/Navbar'

export const metadata = {
    title: 'BrandCode',
    description: 'Brand Code',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className='app'>
            <div className="bg-primary-black overflow-hidden">
    <Navbar />
    </div>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;