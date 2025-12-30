export const metadata = {
  title: "Whitelist Server",
  description: "Roblox whitelist host"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
