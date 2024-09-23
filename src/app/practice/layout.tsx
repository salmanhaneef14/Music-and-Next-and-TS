

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
       <h1>this is my inner page</h1>
    
            {children}
            </>
      
  );
}
