const baseStyle = {
    height: '50px',
    width: '240px',
    border: 'none',
    textAlign: 'center',
    verticalAlign: 'center',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
    fontSize: '16px',
    lineHeight: '48px',
    display: 'block',
    borderRadius: '1px',
    transition: 'background-color .218s, border-color .218s, box-shadow .218s',
    fontFamily: 'Roboto,arial,sans-serif',
    cursor: 'pointer',
    userSelect: 'none'
}

export const darkStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    color: '#000',
    ...baseStyle
}

export const lightStyle = {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.54)',
    ...baseStyle
}

export const iconStyle = {
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    float: 'left',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap'
}

export const svgStyle = {
    height: '62px',
    margin: 'auto',
    paddingLeft: '12px',
    display: 'block'
}

export const hoverStyle = {
    boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
    transition: 'background-color .218s, border-color .218s, box-shadow .218s',
    backgroundColor: 'rgba(255, 255, 255, 1.0)'
}

// export const pressedStyle = {
//   backgroundColor: '#3367D6'
// }

export const disabledStyle = {
    backgroundColor: 'rgba(37, 5, 5, .08)',
    color: 'rgba(0, 0, 0, .40)',
    cursor: 'not-allowed'
}
