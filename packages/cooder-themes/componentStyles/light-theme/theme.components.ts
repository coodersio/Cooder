import { createTheme } from "@mui/material/styles";

// Inputs
import MuiAutocomplete from "./muiAutocomplete.styles";
import MuiButton from "./muiButton.styles";
import MuiButtonGroup from "./muiButtonGroup.styles";
import MuiCheckbox from "./muiCheckbox.styles";
import MuiFab from "./muiFab.styles";
import MuiFilledInput from "./muiFilledInput.styles";
import MuiFormControlLabel from "./muiFormControlLabel.styles";
import MuiFormHelperText from "./muiFormHelperText.styles";
import MuiInputBase from "./muiInputBase.styles";
import MuiOutlinedInput from "./muiOutlinedInput.styles";
import MuiRadio from "./muiRadio.styles";
import MuiRating from "./muiRating.styles";
import MuiSlider from "./muiSlider.styles";
import MuiSwitch from "./muiSwitch.styles";
import MuiInputLabel from "./muiInputLabel.styles";
import MuiToggleButton from "./muiToggleButton.styles";

// Data Display
import MuiAvatar from "./muiAvatar.styles";
import MuiAvatarGroup from "./muiAvatarGroup.styles";
import MuiBadge from "./muiBadge.styles";
import MuiChip from "./muiChip.styles";
import MuiListItem from "./muiListItem.styles";
import MuiListItemButton from "./muiListItemButton.styles";
import MuiListSubheader from "./muiListSubheader.styles";
import MuiTableCell from "./muiTableCell.styles";
import MuiTableHead from "./muiTableHead.styles";
import MuiTablePagination from "./muiTablePagination.styles";
import MuiTableRow from "./muiTableRow.styles";
import MuiTooltip from "./muiTooltip.styles";
import MuiTypography from "./muiTypography.styles";

// Feedback
import MuiAlert from "./muiAlert.styles";
import MuiCircularProgress from "./muiCircularProgress.styles";
import MuiLinearProgress from "./muiLinearProgress.styles";
import MuiSnackbarContent from "./muiSnackbarContent.styles";
import MuiSnackbar from "./muiSnackbar.styles";

// Surfaces
import MuiAccordionDetails from "./muiAccordionDetails.styles";
import MuiAccordionSummary from "./muiAccordionSummary.styles";
import MuiAppBar from "./muiAppBar.styles";
import MuiCard from "./muiCard.styles";
import MuiToolbar from "./muiToolbar.styles";

// Navigation
import MuiBottomNavigationAction from "./muiBottomNavigationAction.styles";
import MuiBreadcrumbs from "./muiBreadcrumbs.styles";
import MuiDrawer from "./muiDrawer.styles";
import MuiLink from "./muiLink.styles";
import MuiMenuItem from "./muiMenuItem.styles";
import MuiMobileStepper from "./muiMobileStepper.styles";
import MuiPaginationItem from "./muiPaginationItem.styles";
import MuiStepConnector from "./muiStepConnector.styles";
import MuiStepIcon from "./muiStepIcon.styles";
import MuiStepLabel from "./muiStepLabel.styles";
import MuiTab from "./muiTab.styles";
import MuiTabs from "./muiTabs.styles";

// Mui X
import MuiDataGrid from "./muiDataGrid.styles";
import MuiPickersLayout from "./muiPickersLayout.styles";
import MuiDateCalendar from "./muiDateCalendar.styles";
import MuiModal from "./muiModal.styles";
import MuiPaper from "./muiPaper.styles";
import MuiPopper from "./muiPopper.styles";

const themeComponents = createTheme({
  components: {
    // Inputs
    MuiAutocomplete,
    MuiButton,
    MuiButtonGroup,
    MuiCheckbox,
    MuiFab,
    MuiFilledInput,
    MuiFormControlLabel,
    MuiFormHelperText,
    MuiInputBase,
    MuiOutlinedInput,
    MuiRadio,
    MuiRating,
    MuiSlider,
    MuiSwitch,
    MuiInputLabel,
    MuiToggleButton,

    // Data Display
    MuiAvatar,
    MuiAvatarGroup,
    MuiBadge,
    MuiChip,
    MuiListItem,
    MuiListItemButton,
    MuiListSubheader,
    MuiTableCell,
    MuiTableHead,
    MuiTablePagination,
    MuiTableRow,
    MuiTooltip,
    MuiTypography,

    // Feedback
    MuiAlert,
    MuiCircularProgress,
    MuiLinearProgress,
    MuiSnackbarContent,
    MuiSnackbar,

    // Surfaces
    MuiAccordionDetails,
    MuiAccordionSummary,
    MuiAppBar,
    MuiCard,
    MuiToolbar,

    // Navigation
    MuiBottomNavigationAction,
    MuiBreadcrumbs,
    MuiDrawer,
    MuiLink,
    MuiMenuItem,
    MuiPaginationItem,
    MuiStepConnector,
    MuiStepIcon,
    MuiStepLabel,
    MuiMobileStepper,
    MuiTab,
    MuiTabs,

    // Mui X
    MuiPickersLayout,
    MuiDateCalendar,
    /** These components are only listed here because the custom style overrides are only used in
     * the context of containing a Date Picker component
     **/
    MuiModal,
    MuiPopper,
    MuiPaper,
    MuiDataGrid,
  },
});

export default themeComponents;
