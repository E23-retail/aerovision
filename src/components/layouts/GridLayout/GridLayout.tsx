import React from 'react';
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';

interface GridLayoutProps {
  /** The grid items to display */
  children: React.ReactNode;
  /** Optional spacing between items */
  spacing?: number;
  /** Optional minimum width for each item */
  minItemWidth?: number;
  /** Optional maximum width for each item */
  maxItemWidth?: number;
  /** Optional maximum columns */
  maxColumns?: number;
}

/**
 * A responsive grid layout that automatically adjusts columns based on screen size
 * and content. Optimized for dashboard-style layouts.
 */
export const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  spacing = 3,
  minItemWidth = 300,
  maxItemWidth = 400,
  maxColumns = 4,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Calculate columns based on screen size
  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return Math.min(2, maxColumns);
    return maxColumns;
  };

  // Convert children to array
  const items = React.Children.toArray(children);

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
      }}
    >
      <Grid
        container
        spacing={spacing}
        sx={{
          '--min-item-width': `${minItemWidth}px`,
          '--max-item-width': `${maxItemWidth}px`,
          '--grid-columns': getColumns(),
        }}
      >
        {items.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={12 / Math.min(items.length, getColumns())}
            sx={{
              minWidth: {
                xs: '100%',
                sm: 'var(--min-item-width)',
              },
              maxWidth: {
                xs: '100%',
                sm: 'var(--max-item-width)',
              },
            }}
          >
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridLayout; 