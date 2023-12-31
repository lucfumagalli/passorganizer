import "@styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PASSORGANIZER",
  description: "Keep your password in one place",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
    <link
      rel="icon"
      href="/icon?<generated>"
      type="image/<generated>"
      sizes="<generated>"
    />
    <link
      rel="apple-touch-icon"
      href="/apple-icon?<generated>"
      type="image/<generated>"
      sizes="<generated>"
    />
    </head>
    <body>
      <Provider>
        <Nav />
        <main className='app'>
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
