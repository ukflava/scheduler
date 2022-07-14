// Create a function called getAppointmentsForDay 
// that will receive two arguments state and day will return an array of appointments for the given day


function selectUserByName(state, name) {
  const filteredNames = state.users.filter(user => user.name === name);
  return filteredNames;
}