import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";

interface Props {
    children: React.ReactNode;
}

const Theme = ({ children }: Props) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
)

export default Theme;