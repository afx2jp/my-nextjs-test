export default function Layout({ children }) {
    return (
      <html>
        <body>
          <header style={{background: 'navy', color: 'blue', padding: '20px'}}>
            My Next.js Test
          </header>
          <main style={{padding: '20px'}}>
            {children}
          </main>
        </body>
      </html>
    );
  }