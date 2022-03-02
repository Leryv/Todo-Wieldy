import {
  // THEME_TYPE,
  THEME_TYPE_LITE,
  THEME_TYPE_SEMI_DARK,
  THEME_TYPE_DARK,
} from "../../constants/ThemeSetting";

import {
  // setThemeColor,
  setThemeType
} from "../../appRedux/actions";

const SwitchTheme = () => ({
  switchDarkTheme : (Dark) => {
    console.log(`switch to ${ Dark }`);
    dispatch(setThemeType(THEME_TYPE_DARK));
  };
  switchLiteTheme  (Lite) => {
    console.log(`switch to ${ Lite }`);
    dispatch(setThemeType(THEME_TYPE_LITE));
  };
  switchSemiTheme = (Semi) => {
    console.log(`switch to ${ Semi }`);
    dispatch(setThemeType(THEME_TYPE_SEMI_DARK));
  };
});
export const {sw}
    export default SwitchTheme;
