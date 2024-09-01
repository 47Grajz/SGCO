import './globals.css'


export const metadata = {
  title: 'Shiny Desk',
  description: 'Shiny Desk App',
}


export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        {children}</body>
    </html>

  )
}
