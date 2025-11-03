import CustomNavbar from "./components/layout/CustomNavbar";
import { ThemeProvider } from "./components/theme-provider";
import RouterApp from "./routes/RouterApp";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CustomNavbar />
        <RouterApp />
      </ThemeProvider>
    </>
  );
}

export default App;
