import { AppBar, Box, Paper, Typography } from '@material-ui/core'
import PickersMui from './PickersMui'
import PickersFlint from './PickersFlint'

function App() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Typography variant="h1">NWP Flint Consumer</Typography>
      </AppBar>
      <Box p={1}>
        <Paper>
          <Box p={2}>
            <Typography variant="h2">MUI Pickers</Typography>
            <PickersMui />
          </Box>
          <Box px={2} pt={10} pb={2}>
            <Typography variant="h2">@wiley-flint Pickers</Typography>
            <PickersFlint />
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default App
