import React from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery, Breadcrumbs, Link } from '@mui/material';

interface PageBreadcrumb {
  label: string;
  href?: string;
}

interface PageContainerProps {
  /** The main content of the page */
  children: React.ReactNode;
  /** The page title */
  title: string;
  /** Optional page description */
  description?: string;
  /** Optional breadcrumbs */
  breadcrumbs?: PageBreadcrumb[];
  /** Optional actions to display in the header */
  actions?: React.ReactNode;
  /** Optional maximum width for the content */
  maxWidth?: number | string;
  /** Optional top content (before the main content) */
  topContent?: React.ReactNode;
  /** Optional bottom content (after the main content) */
  bottomContent?: React.ReactNode;
}

/**
 * A responsive container for page content that handles layout, spacing,
 * and common page elements like titles and breadcrumbs.
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  description,
  breadcrumbs,
  actions,
  maxWidth = 1600,
  topContent,
  bottomContent,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      spacing={{ xs: 2, sm: 3, md: 4 }}
      sx={{
        width: '100%',
        maxWidth: maxWidth,
        mx: 'auto',
        pb: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            '& .MuiBreadcrumbs-separator': {
              mx: 1,
              color: theme.palette.text.disabled,
            },
          }}
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return crumb.href && !isLast ? (
              <Link
                key={crumb.label}
                href={crumb.href}
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography
                key={crumb.label}
                color={isLast ? 'text.primary' : 'text.secondary'}
                variant="body2"
              >
                {crumb.label}
              </Typography>
            );
          })}
        </Breadcrumbs>
      )}

      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Stack spacing={1} flex={1}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: '60ch',
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
          )}
        </Stack>
        {actions && (
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              alignSelf: isMobile ? 'stretch' : 'center',
            }}
          >
            {actions}
          </Box>
        )}
      </Box>

      {/* Top Content */}
      {topContent && (
        <Box sx={{ width: '100%' }}>
          {topContent}
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          width: '100%',
          flex: 1,
        }}
      >
        {children}
      </Box>

      {/* Bottom Content */}
      {bottomContent && (
        <Box sx={{ width: '100%' }}>
          {bottomContent}
        </Box>
      )}
    </Stack>
  );
};

export default PageContainer; 