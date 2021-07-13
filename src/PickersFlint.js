import 'date-fns'
import React, { PureComponent } from 'react'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers'
import {
    DatePicker,
    TimePicker 
} from '@wiley-flint/components'
import DateFnsUtils from '@date-io/date-fns'
import moment from 'moment'

class PickersFlint extends PureComponent {
    constructor (props) {
        super(props)

        this.state = { selectedDate: new Date('2014-08-18T21:11:54') }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleDateChangeMoment = this.handleDateChangeMoment.bind(this)
    }

    handleDateChange = date => {
        this.setState(() => ({
            selectedDate: date
        }))
    }

    handleDateChangeMoment = dateMomentWrapper => {
        this.setState(() => ({
            selectedDate: dateMomentWrapper.toDate()
        }))
    }

    render () {
        const { selectedDate } = this.state
        const selectedDateMoment = moment(selectedDate)

        return (
            <>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            id="date-picker"
                            label="MUI Date picker"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        <DatePicker
                            dataBi="bi123"
                            label="Flint Date picker"
                            value={selectedDateMoment}
                            onChange={this.handleDateChangeMoment}
                        />
                        <TimePicker
                            label="Flint Time picker"
                            timePickerId="time-picker"
                            value={selectedDateMoment}
                            onChange={this.handleDateChangeMoment}
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

export default PickersFlint
