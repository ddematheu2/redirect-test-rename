import CSS from 'csstype';

export const sideBarStyle: CSS.Properties = {
    height: '100%',
    width: '20%',
    position: 'fixed',
    zIndex: 0,
    top: 0,
    left: '80%',
    backgroundColor: 'white',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '100px',
    borderLeft: '3px solid black'
}

export const sideBarTitleStyle: CSS.Properties = {
    textAlign: 'center',
}

export const sideBarOptionsStyle: CSS.Properties = {
    textAlign: 'center',
}