import { ThemeProvider } from "./components/theme-provider";
import AnimatedRoutes from "./routes/AnimatedRoutes";
// import RouterApp from "./routes/RouterApp";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <RouterApp /> */}
        <AnimatedRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
