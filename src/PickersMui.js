import 'date-fns'
import React, { PureComponent } from 'react'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers'

class PickersMui extends PureComponent {
    static defaultProps = {}

    static propTypes = {}

    state = {
        selectedDate: new Date('2014-08-18T21:11:54')
    }

    handleDateChange = date => {
        this.setState(() => ({
            selectedDate: date
        }))
    }

    render () {
        const { selectedDate } = this.state
        return (
            <>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Paper>
                    <Box p={2}>
                        <Typography variant="body1">{`Result date: ${selectedDate}`}</Typography>
                    </Box>
                </Paper>
            </>
        )
    }
}

export default PickersMui
