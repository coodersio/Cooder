import { Meta } from "@storybook/react";
import {
  Pagination as MuiPagination,
  PaginationProps,
  Stack,
} from "@mui/material";

export default {
  title: "@MUI/Material/Navigation/Pagination",
  component: MuiPagination,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4783%3A31636",
    },
    multiThemeDirection: "column",
  },
} as Meta<typeof MuiPagination>;

export const Pagination: React.FC = () => {
  const colors: PaginationProps["color"][] = [
    "primary",
    "secondary",
    "standard",
  ];
  const pages = [1, 5, 10];
  const shapes: PaginationProps["shape"][] = ["circular", "rounded"];
  const sizes: PaginationProps["size"][] = ["small", "medium", "large"];
  const variants: PaginationProps["variant"][] = ["text", "outlined"];

  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: (t) =>
          t.palette.mode === "light" ? "common.white" : "background.default",
        p: 4,
      }}
    >
      {colors.map((color) => (
        <Stack key={color} alignItems={"center"}>
          {shapes.map((shape) => (
            <Stack key={shape} sx={{ mb: 8 }}>
              {sizes.map((size) => (
                <Stack key={size} sx={{ mb: 8 }}>
                  {variants.map((variant) => (
                    <Stack key={variant} sx={{ mb: 8 }}>
                      {[
                        pages.map((page) => (
                          <MuiPagination
                            key={`${page}-enabled`}
                            count={10}
                            page={page}
                            color={color}
                            variant={variant}
                            size={size}
                            shape={shape}
                            sx={{ mb: 2 }}
                          ></MuiPagination>
                        )),
                      ]}
                      <MuiPagination
                        key={`enabled-last`}
                        count={10}
                        page={5}
                        color={color}
                        variant={variant}
                        size={size}
                        shape={shape}
                        sx={{ mb: 8 }}
                        showLastButton
                        showFirstButton
                      ></MuiPagination>
                      <MuiPagination
                        key={`disabled`}
                        count={10}
                        page={5}
                        color={color}
                        variant={variant}
                        size={size}
                        shape={shape}
                        sx={{ mb: 2 }}
                        disabled
                      ></MuiPagination>
                      <MuiPagination
                        key={`disabled-last`}
                        count={10}
                        page={5}
                        color={color}
                        variant={variant}
                        size={size}
                        shape={shape}
                        sx={{ mb: 2 }}
                        showLastButton
                        showFirstButton
                        disabled
                      ></MuiPagination>
                    </Stack>
                  ))}
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
