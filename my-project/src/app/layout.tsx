import "./globals.css";


  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" data-theme="dark">
        <body className="bg-black text-white">
          {children}
        </body>
      </html>
    );
  }
