"use client";
import React, { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Stack,
  FormControlLabel,
  Switch,
  Paper,
  Box,
} from "@mui/material";

const LOCAL_THEME = "themeMode";

enum ThemeModeEnum {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeModeEnum>(ThemeModeEnum.LIGHT);

  const localThemeMode = localStorage.getItem(LOCAL_THEME);

  const currentTheme = createTheme({
    palette: {
      mode,
    },
  });

  const handleThemeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMode = event.target.checked
      ? ThemeModeEnum.DARK
      : ThemeModeEnum.LIGHT;
    setMode(selectedMode);
    localStorage.setItem(LOCAL_THEME, selectedMode);
  };

  useEffect(() => {
    if (!localThemeMode) {
      localStorage.setItem(LOCAL_THEME, ThemeModeEnum.LIGHT);
    } else {
      setMode(localThemeMode as ThemeModeEnum);
    }
  }, [localThemeMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Paper elevation={0} sx={{ borderRadius: 0 }}>
        <Stack gap="30px">
          <Box paddingBlock="8px" paddingInline="16px">
            <FormControlLabel
              control={
                <Switch
                  onChange={handleThemeMode}
                  checked={mode === ThemeModeEnum.DARK}
                />
              }
              label={mode === ThemeModeEnum.DARK ? "Dark theme" : "Light theme"}
            />
          </Box>
          {children}
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};
