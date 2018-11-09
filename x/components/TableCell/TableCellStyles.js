import { StyleSheet } from 'react-native';

export default (theme) => {
    let TableCellStyles = {
        defaultTypeTableCell: {
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(233,233,233,.05)',
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
        },
        defaultSizeTableCellHeader: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
        },
        defaultSizeTableCellDrawer: {
            display: 'flex',
            paddingBottom: 20,
            paddingRight: 40,
        },
        switchTypeTableCellIcon: {
            alignItems: 'flex-start',
            height: '100%',
            margin: 5,
            width: '10%',
        },
        switchTypeTableCellTitle: {
            padding: 20,
            width: '70%',
        },
        switchTypeTableCellType: {
            alignItems: 'center',
            width: '20%',
        },
        customTypeTableCellIcon: {
            alignItems: 'flex-start',
            height: '100%',
            margin: 5,
            width: '10%',
        },
        customTypeTableCellTitle: {
            padding: 20,
            width: '70%',
        },
        customTypeTableCellType: {
            alignItems: 'center',
            width: '20%',
        },
        defaultTypeTableCellTitle: {
            padding: 20,
            width: '60%',
        },
        defaultTypeTableCellType: {
            width: '40%',
        },
    };

    // Assign TableCell Sizes
    Object.keys(theme.tableCell.sizes).map((size) => {
        TableCellStyles[`${ size }SizeTableCell`] = {
            height: theme.tableCell.sizes[size],
        }
    })

    // Assign TableCell Spacing
    Object.keys(theme.tableCell.spacing).map((spacing) => {
        TableCellStyles[`${ spacing }SpacingTableCell`] = {
            paddingLeft: theme.tableCell.spacing[spacing],
            paddingRight: theme.tableCell.spacing[spacing],
        }
    })

    // Assign TableCell Colors
    Object.keys(theme.tableCell.colors).map((color) => {
        TableCellStyles[`${ color }ColorTableCell`] = {
            backgroundColor: theme.tableCell.colors[color],
        }
    })

    // Assign TableCell States
    Object.keys(theme.tableCell.states).map((state) => {
        Object.keys(theme.tableCell.states[state]).map((stateKey) => {
            TableCellStyles[`${ state }StateTableCell`] = {
                [`${ stateKey }`]: theme.tableCell.states[state][stateKey],
            }
        })
    })

    // Assign TableCell Inputs
    Object.keys(theme.tableCell.types).map((type) => {
        Object.keys(theme.tableCell.types[type]).map((typeKey) => {
            TableCellStyles[`${ type }TypeTableCellInput`] = {
                [`${ typeKey }`]: theme.tableCell.types[type][typeKey],
            }
        })
    })

    return StyleSheet.create(TableCellStyles);
}
