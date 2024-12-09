

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-2xl text-center mt-8">
        inner layout item
      </h2>
        {children}
    </>
  );
}
