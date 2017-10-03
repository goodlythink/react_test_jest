import React from 'react'

class CheckboxWithLabel extends React.Component {
    state = { isChecked: true }

    onChange = () => {
        this.setState(s => ({ isChecked: !s.isChecked }))
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        )
    }
}

CheckboxWithLabel.defaultProps = {
    labelOn: 'On',
    labelOff: 'Off'
}

export default CheckboxWithLabel