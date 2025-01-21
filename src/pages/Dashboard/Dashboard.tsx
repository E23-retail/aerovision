import React, { useMemo } from 'react';
import {
  Button,
  useTheme,
  useMediaQuery,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import AppLayout from '../../components/layouts/AppLayout/AppLayout';
import PageContainer from '../../components/layouts/PageContainer/PageContainer';
import GridLayout from '../../components/layouts/GridLayout/GridLayout';
import MetricCard from '../../components/organisms/MetricCard/MetricCard';
import { TrendDirection } from '../../types/metrics';

interface MetricData {
  label: string;
  value: number;
  trend: {
    value: number;
    direction: TrendDirection;
    description: string;
  };
  formatter: (value: string | number) => string;
}

const MOCK_METRICS: MetricData[] = [
  {
    label: 'Total Passengers',
    value: 1234567,
    trend: { value: 12.5, direction: 'up', description: 'Compared to last month' },
    formatter: (val: string | number) => new Intl.NumberFormat().format(Number(val)),
  },
  {
    label: 'Average Wait Time',
    value: 15.3,
    trend: { value: -5.2, direction: 'down', description: 'Compared to last month' },
    formatter: (val: string | number) => `${Number(val)} min`,
  },
  {
    label: 'On-Time Performance',
    value: 94.8,
    trend: { value: 2.1, direction: 'up', description: 'Compared to last month' },
    formatter: (val: string | number) => `${Number(val)}%`,
  },
  {
    label: 'Customer Satisfaction',
    value: 4.7,
    trend: { value: 0.3, direction: 'up', description: 'Compared to last month' },
    formatter: (val: string | number) => `${Number(val)}/5`,
  },
];

export const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const actions = useMemo(() => (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      sx={{
        '& .MuiButton-root': {
          minWidth: isMobile ? 'unset' : undefined,
        },
      }}
    >
      {!isMobile && (
        <>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            size={isMobile ? 'small' : 'medium'}
          >
            {!isMobile && 'Filter'}
          </Button>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            size={isMobile ? 'small' : 'medium'}
          >
            {!isMobile && 'Refresh'}
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            size={isMobile ? 'small' : 'medium'}
          >
            {!isMobile && 'Export'}
          </Button>
        </>
      )}
      {isMobile && (
        <>
          <IconButton
            aria-label="show more"
            aria-controls="dashboard-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="dashboard-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <FilterIcon sx={{ mr: 1 }} /> Filter
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <RefreshIcon sx={{ mr: 1 }} /> Refresh
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <DownloadIcon sx={{ mr: 1 }} /> Export
            </MenuItem>
          </Menu>
        </>
      )}
    </Stack>
  ), [isMobile, anchorEl]);

  return (
    <AppLayout>
      <PageContainer
        title="Dashboard"
        description="Overview of key metrics and performance indicators"
        actions={actions}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard' },
        ]}
      >
        <GridLayout
          spacing={3}
          minItemWidth={280}
          maxItemWidth={400}
          maxColumns={4}
        >
          {MOCK_METRICS.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.label}
              value={metric.value}
              change={metric.trend.value}
              period={metric.trend.description}
              trend={metric.trend.direction}
            />
          ))}
        </GridLayout>
      </PageContainer>
    </AppLayout>
  );
};

export default Dashboard; 