import './globals.css'


export const metadata = {
  title: 'DevJobs',
  description: 'Web dev jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-primary'>{children}</body>
    </html>
  )
}
