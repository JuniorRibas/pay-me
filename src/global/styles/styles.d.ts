import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme["light"];

  export interface DefaultTheme extends ThemeType {}
}
