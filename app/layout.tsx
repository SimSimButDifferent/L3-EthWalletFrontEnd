import { ReactNode } from 'react';

import { Poppins } from 'next/font/google'
import './globals.css'
import { Web3ModalProvider } from '@/context/Web3Modal';

const inter = Poppins({ weight: ['200', '300', '400'], subsets: ['latin'] })

export const metadata = {
 title: "Web3Modal",
 description: "Web3Modal Example",
};

export default function RootLayout({ children }: { children: ReactNode }) {
 return (
   <html lang="en">
     <body>
       <Web3ModalProvider>{children}</Web3ModalProvider>
     </body>
   </html>
 );
}