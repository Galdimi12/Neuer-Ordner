

var guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
var guestName = prompt('Whats your name: ')

if (guestList.includes(guestName)) {

    alert('Welcome ' + guestName + '!')
} else {
    alert('Sorry not on the list.')
}
